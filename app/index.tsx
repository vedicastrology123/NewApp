import React, {useState, useEffect} from 'react';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { Link } from "expo-router";
import * as FileSystem from 'expo-file-system';
import { SafeAreaView, Text, View, StyleSheet, Button, TouchableHighlight, TouchableOpacity, ScrollView, useWindowDimensions } from 'react-native';
import A from 'react-native-a'
import Constants from 'expo-constants';
import * as WebBrowser from 'expo-web-browser';

const cleanText = (htmlContent) => {
  return htmlContent.replace(/&nbsp;/g, ' ');
}
const horoscopeUrl = 'https://horoscope-oy3s.onrender.com/VedicHoroscope/birthchart.jsp'; //?firstName=avf&lastName=af&chart=0&date=2025-04-17&time=08%3A45&countryid=Afghanistan&stateid=Badakhshan&cityid=Ashk%C4%81sham&countryLatitude=33.00000000&countryLongitude=65.00000000&countryGmtOffsetName=UTC%2B04%3A30&countryGmtOffset=4.5&countryDstOffset=0&cityLatitude=36.68333000&cityLongitude=71.53333000&cityGmtOffsetName=Asia%2FKabul&cityGmtOffset=4.5&cityDstOffset=4.5';
//let myWAurl = 'https://api.whatsapp.com/send?phone=' + myWhatsAppNumber;
let myWhatsAppNumber = 918610386346;

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

const intro0 = "Horoscope and Predictions are made according to";
const intro1 = " True Lahiri Ayanamsa";
const intro2 = "True sidereal solar years "
const intro3 = " Parasara system ";
const intro4 = " Vimshottari Dasha system.";
var url;

export default function Index() {
  const yourName = encodeURI(birthData.firstName + " " + birthData.lastName + " ");
  const yName = decodeURI(yourName);

  const [htmlContent, setHtmlContent] = useState('');

  const params = new URLSearchParams();
  for (const key in birthData) {
    if (birthData.hasOwnProperty(key)) {
      params.append(key, birthData[key]);
      console.log("key: " + key + " value: " + birthData[key]);
    }
  }

  useEffect(() => {
    url = horoscopeUrl + '?' + params;
    console.log("url  " + url);
    const fetchHTML = async () => {
      try {
        const response = await fetch(url);
        const html = await response.text();
        setHtmlContent(cleanText(html));
      } catch (error) {
        console.error('Error fetching HTML:', error);
      }
    };

    fetchHTML();
  }, []);

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
      //sendWhatsAppWithFile(myWhatsAppNumber, newFileName);
      console.log('File has been saved to:', decodeURI(newFileName));
      await shareAsync(decodeURI(newFileName), { UTI: '.pdf', mimeType: 'application/pdf', dialogTitle: 'Your Horoscope' });   
    }
  };

  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync(url);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container} >
          <Text style={{...styles.text, fontWeight: "bold", textAlign: 'left'}}>{'\n\n\n'}Welcome {yName},{'\n\n'}</Text>
            <Text style={styles.text}> Your Vedic Horoscope (कुंडली or ஜாதகம் or జాతకం),</Text>
          <Text style={styles.text}>created by</Text>
          <Text style={styles.text}>Steve Hora.</Text>
          <TouchableHighlight
              style={styles.submit}
              onPress={() => printToFile(yourName)}
              underlayColor='#fff'>
              <Text style={styles.submitText}>Save as PDF</Text>
            </TouchableHighlight>
			<Text style={styles.titleText}>{'\n'}and share on <A href="https://wa.me/918610386346" style={{fontStyle: 'underline'}}>WhatsApp number</A>, for your horoscope predictions.</Text>
          <Text style={styles.titleText}>{'\n'}{intro0}
          <Text style={{fontWeight: "bold", textAlign: 'left'}}>{intro1}</Text>
          <Text style={styles.titleText}> (Chitra Paksha), 
          <Text style={{fontWeight: "bold", textAlign: 'left'}}>{intro2}</Text>
            of Sun traversing 360 degrees,
          <Text style={{fontWeight: "bold", textAlign: 'left'}}>{intro3}</Text>
            and Timing using 
          <Text style={{fontWeight: "bold", textAlign: 'left'}}>{intro4}{'\n'}</Text></Text></Text>

            {/* <Text style={styles.titleText}>For <Text style={{fontWeight: "bold", textAlign: 'left'}}>Horoscope Predictions</Text>, contact on WhatsApp (918610386346).</Text> */}
            <Text style={styles.text}>Steve Hora, Vedic Astrology Expert, India.</Text>

            <Text style={styles.textU}><Link href="https://stevehora.com">www.stevehora.com</Link></Text>
            <Text style={styles.textU}><Link href="mailto:vedicastrology123@gmail.com">vedicastrology123@gmail.com</Link></Text>
        </View>

      </ScrollView>
      <View style={styles.browsercontainer}>
        <TouchableOpacity style={styles.submit} onPress={_handlePressButtonAsync}>
          <Text style={styles.viewtext}>View your Horoscope</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
    padding: 30,
    justifyContent: 'center',
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#black',
    alignItems: 'center',
  },
  browsercontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  
  titleText: {
    fontSize: 16,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    textAlign: 'left',
    paddingLeft: 4,
    paddingRight: 4,
  },
  viewtext: {
    color: 'white',
    fontWeight: 'bold',
  },
  submit: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    color:'white',
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
    fontWeight: 'bold',
  },
  text: {
    color: 'black',
    fontSize: 16,
  },
  textU: {
    color: 'black',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  pdf: {
    flex: 1,
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