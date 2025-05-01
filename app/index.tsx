import React, {useState, useEffect} from 'react';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { Link } from "expo-router";
import Share from 'react-native-share';

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
  Linking,
  Platform,
} from 'react-native';

//const url = 'https://horoscope-oy3s.onrender.com/VedicHoroscope/birthchart.jsp?firstName=avf&lastName=af&chart=0&date=2025-04-17&time=08%3A45&countryid=Afghanistan&stateid=Badakhshan&cityid=Ashk%C4%81sham&countryLatitude=33.00000000&countryLongitude=65.00000000&countryGmtOffsetName=UTC%2B04%3A30&countryGmtOffset=4.5&countryDstOffset=0&cityLatitude=36.68333000&cityLongitude=71.53333000&cityGmtOffsetName=Asia%2FKabul&cityGmtOffset=4.5&cityDstOffset=4.5';

let myWhatsAppNumber = 918610386346;
let myWAurl = 'https://api.whatsapp.com/send?phone=' + myWhatsAppNumber;

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
  const intro1 = " True Lahiri Ayanamsa";
  const intro2 = "True sidereal solar years "
  const intro3 = " Parasara system ";
  const intro4 = " Vimshottari Dasha system.";

  let clientMobile = '918610386346';
  const printToFile = async (yourName) => {
    let newFileName;
    const result = await Print.printToFileAsync( // On iOS/android prints the given html. On web prints the HTML from the current page.
      { html: htmlContent,
        base64: false
      });
    if (result && result.uri) {
      newFileName = `${FileSystem.documentDirectory}${yourName}Horoscope.pdf`; // New file name

      await FileSystem.moveAsync({
        from: result.uri,
        to: newFileName, // Rename the PDF file
      });

    //console.log('File has been saved to:', newFileName);
    await shareAsync(newFileName, { UTI: '.pdf', mimeType: 'application/pdf', dialogTitle: 'Your Horoscope' }); 
    
    }
    console.log('WhatsApp chat with file, Opened successfully ' + clientMobile + "file " + newFileName);
    sendWhatsAppWithFile(clientMobile, newFileName);
    //openWhatsApp();
};

const sendWhatsAppWithFile = async (phoneNumber, filePath) => {
  const shareOptions = {
    social: Share.Social.WHATSAPP,
    whatsAppNumber: phoneNumber,
    filename: filePath.split('/').pop(), // Extract file name from path
    url: 'file://' + filePath, // Add 'file://' prefix for local files
    type: '*/*', // Set type to accept all file types
  };
  //console.log('WhatsApp chat with file, Opened successfully ' + phoneNumber + "file " + filePath);
/*   try {
    await Share.shareSingle(shareOptions);
  } catch (error) {
    console.error('Error sharing to WhatsApp:', error);
  } */
};

/* const openWhatsApp = () => {


   if (Platform.OS === 'android') {
    url = `whatsapp://send?phone=${phoneNumber}`;
  } else if (Platform.OS === 'ios') {
    url = `whatsapp://wa.me/${phoneNumber}`;
  } else {
     console.error('Unsupported platform');
     return;
  }   

  Linking.openURL(myWAurl).then((data) => {
    console.log('WhatsApp Opened successfully ', data);
  }).catch((err) => {
    console.log(err);
    alert('Make sure Whatsapp is installed on your device.');
  })
}; */

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container} >
        <Text style={styles.titleText}>{yName} - Vedic Horoscope.</Text>
        <Text style={styles.titleText}>made by</Text>
        <Text style={styles.titleText}>Steve Hora.{'\n\n'}</Text>
        <Text style={styles.titleText}>{intro0}
        <Text style={{fontWeight: "bold", textAlign: 'left'}}>{intro1}</Text>
        <Text style={styles.titleText}>(Chitra Paksha), 
        <Text style={{fontWeight: "bold", textAlign: 'left'}}>{intro2}</Text>
          of Sun traversing 360 degrees,
        <Text style={{fontWeight: "bold", textAlign: 'left'}}>{intro3}</Text>
          and Timing using 
        <Text style={{fontWeight: "bold", textAlign: 'left'}}>{intro4}{'\n\n'}</Text></Text></Text>
          <TouchableHighlight
            style={styles.submit}
            onPress={() => printToFile(yourName)}
            underlayColor='#fff'>
            <Text style={[styles.submitText]}>Save as PDF.</Text>
          </TouchableHighlight>
          <Text style={styles.titleText}>{'\n'}For <Text style={{fontWeight: "bold", textAlign: 'left'}}>Horoscope Predictions</Text>, contact</Text>
          <Text style={styles.text}>Steve Hora, Vedic Astrology Expert,{"\n"}</Text>
          <Text style={styles.text}>India.{"\n"}{"\n"}</Text>
          <Text style={styles.textU}><Link href="https://stevehora.com">www.stevehora.com</Link>{"\n"}</Text>
          <Text style={styles.textU}><Link href="mailto:vedicastrology123@gmail.com">vedicastrology123@gmail.com</Link></Text>
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
  text: {
    color: 'black',
    fontSize: 16,
  },
  textU: {
    color: '#black',
    fontSize: 16,
    textDecorationLine: 'underline',
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