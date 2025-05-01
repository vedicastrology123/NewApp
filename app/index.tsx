import React, {useState, useEffect} from 'react';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';

import * as FileSystem from 'expo-file-system';
import WebView from 'react-native-webview';
import Constants from 'expo-constants';

import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

const html = `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
  <body style="text-align: center;">
    <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
      Hello Expo App!
    </h1>
    <img
      src="https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png"
      style="width: 90vw;" />
  </body>
</html>
`;

  //const url = 'https://horoscope-oy3s.onrender.com/VedicHoroscope/birthchart.jsp?firstName=avf&lastName=af&chart=0&date=2025-04-17&time=08%3A45&countryid=Afghanistan&stateid=Badakhshan&cityid=Ashk%C4%81sham&countryLatitude=33.00000000&countryLongitude=65.00000000&countryGmtOffsetName=UTC%2B04%3A30&countryGmtOffset=4.5&countryDstOffset=0&cityLatitude=36.68333000&cityLongitude=71.53333000&cityGmtOffsetName=Asia%2FKabul&cityGmtOffset=4.5&cityDstOffset=4.5';

  const birthData = {
    firstName: 'stringf',
    lastName: 'stringl',
    countryLatitude: 20.00000000,
    countryLongitude: 77.00000000,
    countryGmtOffsetName: 'UTC+05:30',
    countryGmtOffset: 5.5,
    countryDstOffset: 0,
    cityGmtOffsetName: 'Asia/Kolkata',
    cityGmtOffset: 5.5,
    cityDstOffset: 0,
    chart: 0,
    date: '2025-5-9',
    time: '10:25',
    countryid: 'India',
    stateid: 'Tamil Nadu',
    cityid: 'Chennai',
    cityLatitude: 13.08784000,
    cityLongitude: 80.27847000,
  };

  const params = new URLSearchParams();
  for (const key in birthData) {
    if (birthData.hasOwnProperty(key)) {
      params.append(key, birthData[key]);
      console.log("key: " + key + " value: " + birthData[key]);
    }
  }
  
  var url = "https://horoscope-oy3s.onrender.com/VedicHoroscope/birthchart.jsp?" + params;
  console.log("url  " + url);
  /*     
  try {
      const response = fetch(url, {
      mode: 'no-cors',
      method: 'POST',
      body: params,
      headers: {
          'Accept': 'application/text',
          'Content-Type': 'text/html',
      },
      });
      
      const html = await response.text();
      setHtmlstring(htmlString);
  } catch (error) {
      console.error(error);
  }*/
  
export default function Index() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const fetchHTML = async () => {
      try {
        const response = await fetch(url);
        const html = await response.text();
        setHtmlContent(html);
      } catch (error) {
        console.error('Error fetching HTML:', error);
      }
    };

    fetchHTML();
  }, []);

  const yourName = encodeURI(birthData.firstName + " " + birthData.lastName + " ");
  const yName = decodeURI(yourName);
  const intro0 = "Your Vedic horoscope is made according to";
  const intro1 = " True Lahiri Ayanamsa ";
  const intro2 = "True sidereal solar years ,"
  const intro3 = " Parasara system ";
  const intro4 = " Vimshottari Dasha system.";
  const printToFile = async (yourName) => {
  // On iOS/android prints the given html. On web prints the HTML from the current page.
  const result = await Print.printToFileAsync(
    { html: htmlContent,
      base64: false
    });
  if (result && result.uri) {
    // New file name
    const newFileName = `${FileSystem.documentDirectory}${yourName}Horoscope.pdf`;

    // Rename the PDF file
    await FileSystem.moveAsync({
      from: result.uri,
      to: newFileName,
    });

  console.log('File has been saved to:', newFileName);
  await shareAsync(newFileName, { UTI: '.pdf', mimeType: 'application/pdf', dialogTitle: 'Your Horoscope' });
  }
};
/* 
  const printToFile = async () => {
    try {
      const { uri } = await Print.printToFileAsync({ html: htmlContent });
      console.log('File has been saved to:', uri);
    } catch (error) {
      console.error('Error printing:', error);
    }
  }; */

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container} >
        <Text style={styles.titleText}>{yName} - Vedic Horoscope.</Text>
        <Text style={styles.titleText}>By</Text>
        <Text style={styles.titleText}>Steve Hora, Astrology Expert, India.{'\n'}</Text>
        <Text style={styles.titleText}>{intro0}
        <Text style={{fontWeight: "bold", textAlign: 'left'}}>{intro1}</Text>
        <Text style={styles.titleText}>
          (Chitra Paksha), 
        <Text style={{fontWeight: "bold", textAlign: 'left'}}>{intro2}</Text>
          of Sun traversing 360 degrees
        <Text style={{fontWeight: "bold", textAlign: 'left'}}>{intro3}</Text>
          and Timing using 
        <Text style={{fontWeight: "bold", textAlign: 'left'}}>{intro4}
        </Text></Text></Text>
          <TouchableHighlight
            style={styles.submit}
            onPress={() => printToFile(yourName)}
            underlayColor='#fff'>
            <Text style={[styles.submitText]}>Save as PDF.</Text>
          </TouchableHighlight>
          
          {/* <WebView source={{ uri: url }} /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#black',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 16,
    // fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft: 4,
    paddingRight: 4,
  },
  submit: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#247cc7',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fff',
  },
  submitText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },

  textStyle: {
    fontSize: 18,
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
  imageStyle: {
    width: 150,
    height: 150,
    margin: 5,
    resizeMode: 'stretch',
  },
});