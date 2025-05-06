import React, {useState, useEffect} from 'react';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { Link } from "expo-router";
import * as FileSystem from 'expo-file-system';
import { SafeAreaView, Text, View, StyleSheet, TouchableHighlight, ScrollView, useWindowDimensions } from 'react-native';

import HTMLView from 'react-native-render-html';

import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';

const htmlInfo = `
























 
 
<!DOCTYPE html>
<!--[if IE 8]> 				 <html class="no-js lt-ie9" lang="en" > <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en" > <!--<![endif]-->


<style>
  html * {
    font-size: 14px !important;
    line-height: 1.625 !important;
    color: #2020131 !important;
    font-family: Nunito, sans-serif !important;
  }
</style>


<head>
	<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=2.0, user-scalable=yes">

  
        <title>Chandramouli&nbsp;Bala - Horoscope</title>
  <link rel="icon" type="image/x-icon" href="img/favicon.ico">

  <link media="Screen" rel="stylesheet" href="css/foundation.css" >
  <link media="handheld, only screen and (max-width: 480px), only screen and (max-device-width: 480px)" href="css/mobile.css" type="text/css" rel="stylesheet" />
  <style>.div-table {
  padding-left: 10px;
  display: table;         
  width: 100%;         
  -background-color: green;         
  border: 1px solid #fff;         
  border-spacing: 5px; /* cellspacing:poor IE support for  this */
}


.float-container {
    padding-left: 5px;
    padding-bottom: 1px;
    padding-top: 5px;
    display: table;
}

.float-child {
    width: auto;
    height: 100%;
    display: table-cell;
    padding-right: 55px;
    vertical-align: top;
    -margin: 10 auto;
}

.div-table-row {
  display: table-row;
  width: 100%;
  -border: 1px solid #000000;
  border-spacing: 15px;
  clear: both;
}
.div-table-col {
  float: left; /* fix for  buggy browsers */
  display: table-column;         
  width: 85px;         
  -border: 1px solid #000000;
  border-spacing: 5px;
  -background-color: #ccc;  
}




.house-box{
	width:70px;
	height:70px;
	padding: 5px;
	background: #fff;
	word-wrap: break-word;
}

.dasha-box{
	width:50px;
	-height:100px;
	padding: 0px;
	border: 3px solid #fff;
	background: #fff;
/* 	word-wrap: break-word; */
}


.trsubdasha-box{
	width:100px;
	height:10px;
	padding: 0px;
	background: #fff;
	float: left;
	border: 3px solid #fff;
 	word-wrap: break-word;
/* 	word-break: break-all;
    white-space: normal;
    -overflow-wrap: anywhere; */
}

.subdasha-box{
	width:25px;
	height:10px;
/* 	padding: 55px; */
	background: #fff;
/* 	word-wrap: break-word; */
/* 	word-break: break-all;
    white-space: normal;
    -overflow-wrap: anywhere; */
}

h2 {
  font-weight: bold;
  color: #50d861;
  text-align: center;
}

.float-containertime {
    padding-left: 125px;
    border: 2px solid #ff9f9f;
}

.float-childtime {
    -width: 50px;
    height: 25px;
/*     float: left; */
    -padding: 5px;
    border: 1px solid lightgreen;
}

 table {
    table-layout: fixed;
    overflow-wrap: break-word;
    word-wrap: break-word; IE
}

 stable {
    table-layout: fixed;
    overflow-wrap: break-word;
    word-wrap: break-word;
    height:5px;
	width: 35px;
}

std {
	height:5px;
	width: 35px;
}
</style>
<!--   <style> @media print {@page {size: A4 landscape; page-orientation: upright; margin-left: .35in;} no-print { display: none; }} </style> -->
  <style>
  @media print {
      @page {
	  	size: A4 landscape;
      }
      @page rotated {
	  	page-orientation: upright;
      }
      body {
	  	margin: 0.35in;
	  	font: 3em;
      }
      no-print {
      	display: none;
      }
  }

.table {display:block; }
.row { display:block;}
.cell {display:inline-block;}

</style>       
  <script src="js/vendor/custom.modernizr.js"></script>

</head>
<body>


<div class="div-table">
	<div class="div-table-row" style="width:2000px;">
		<div class="div-table-col" style="width: 2000px; align: right"><b>Chandramouli Bala's Birth Horoscope (Vedic)</b>&nbsp;&nbsp;&nbsp;&nbsp;<b style='color:red; font-weight: 1200'><a href="javascript:if(window.print)window.print()">Save as PDF.</a></b></div>
		<div class="div-table-col" style="width: 2000px; align: right">Predictions by <b>Steve Hora, Vedic Astrology Expert, India</b>,&nbsp;<a href="mailto:vedicastrology123@gmail.com"><u>vedicastrology123@gmail.com</u></a>,&nbsp;<a href="https://stevehora.com"><u>www.stevehora.com</u>.</a></div>
	</div>
	<div class="div-table-row">
		<div class="div-table-col" style="width: 2000px;  align: left"><b>Born on :&nbsp;</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4-May-2025, <b>&nbsp;&nbsp;Time : </b>3:40:0 .</div>

		<div class="div-table-col" style="width: 2000px;  align: left"><b>&nbsp;City : </b>Chennai, <b>State : </b>Tamil Nadu,<b> Country : </b>India, ,<b>&nbsp;&nbsp; Latitude : </b> 13&deg;05'16" (N)<b> Longitude : </b> 80&deg;16'42" (E),<b> GMT (with DST) : </b>5.5 .</div>
	</div>
	<div class="div-table-row">
		<div class="div-table-col" style="width:2000px; align: left"><b>Nakshatra : </b> Pushya<b> Pada&nbsp;</b> 3, <b>Yoga :</b> Ganda yoga, <b>Karana :</b> Vanija, <b>Vedic Weekday : </b>Sunday,<b>&nbsp;&nbsp;Sunrise : </b>05:50,<b>&nbsp;&nbsp;Ayanamsa : </b> 24&deg;12'01".</div>
	</div>
    <div class="div-table-row">
        <div class="div-table-col" style="width:2000px;"><b>Tithi : </b>Shukla paksha Saptami.</div><br>
   </div>


		<!-- Rashi chart -->
		<div class="float-container" id="chart">
			<div class="float-child">
				<table border='1' style="border: 1px solid black; border-collapse:collapse;">
					<tr>
						<td class="house-box">  Lagna  Budha  Shukra  Shani  Rahu</td>
						<td class="house-box">  Surya</td>
						<td class="house-box">  Guru</td>
						<td class="house-box"></td>
					</tr>
					<tr>
						<td class="house-box"></td>
						<td class="house-box" colspan="2" rowspan="2">
						<h2>Rashi chart</h2></td>
						
						<td class="house-box">  Chandra  Kuja</td>
					</tr>
					<tr>
						<td class="house-box"></td>
									
						<td class="house-box"></td>
					</tr>
					<tr>
						<td class="house-box"></td>
						<td class="house-box"></td>
						<td class="house-box"></td>
						<td class="house-box">  Ketu</td>
					</tr>						
				</table>
			</div>
<!-- 			Navamsa chart -->
			<div class="float-child">
				<table border='1' style="border: 1px solid black; border-collapse:collapse;">
					<tr>
						<td class="house-box"></td>
						<td class="house-box"></td>
						<td class="house-box"></td>
						<td class="house-box"></td>
					</tr>
					<tr>
						<td class="house-box">  Budha</td>
						<td class="house-box" colspan="2" rowspan="2">
						<h2>Navamsa</h2></td>
						
						<td class="house-box">  Rahu</td>
					</tr>
					<tr>
						<td class="house-box">  Ketu</td>
									
						<td class="house-box">  Shani</td>
					</tr>
					<tr>
						<td class="house-box"></td>
						<td class="house-box"></td>
						<td class="house-box">  Lagna  Chandra  Kuja</td>
						<td class="house-box">  Surya  Guru  Shukra</td>
					</tr>						
				</table>			
			</div>
			<div class="float-child">
				<table style="border: none;">
	 				<tr>
						<td><b>Graha</b></td>
						<td><b>Longitude</b></td>
						<td><b>Direction</b></td>
						<td><b>Nakshatra</b></td>
						<td><b>Pada</b></td>
						<td><b>Rashi</b></td>
						<td><b>Navamsa</b></td>
					</tr>						

					<tr>
						<td>Lagna</td>
						<td>341&deg;39'31"</td>
						
							<td><b>D</b></td>
						
						<td>Uttara Bhadrapada</td>
						<td>3</td>
						<td>Meena</td>
						<td>Thula</td>
					</tr>						

					<tr>
						<td>Surya</td>
						<td> 19&deg;30'57"</td>
						
							<td><b>D</b></td>
						
						<td>Bharani</td>
						<td>2</td>
						<td>Mesha</td>
						<td>Kanya</td>
					</tr>						

					<tr>
						<td>Chandra</td>
						<td>101&deg;40'27"</td>
						
							<td><b>D</b></td>
						
						<td>Pushya</td>
						<td>3</td>
						<td>Karka</td>
						<td>Thula</td>
					</tr>						

					<tr>
						<td>Kuja</td>
						<td>102&deg;44'48"</td>
						
							<td><b>D</b></td>
						
						<td>Pushya</td>
						<td>3</td>
						<td>Karka</td>
						<td>Thula</td>
					</tr>						

					<tr>
						<td>Budha</td>
						<td>355&deg;26'29"</td>
						
							<td><b>D</b></td>
						
						<td>Revati</td>
						<td>3</td>
						<td>Meena</td>
						<td>Kumbha</td>
					</tr>						

					<tr>
						<td>Guru</td>
						<td> 57&deg;45'35"</td>
						
							<td><b>D</b></td>
						
						<td>Mrigshira</td>
						<td>2</td>
						<td>Vrishabha</td>
						<td>Kanya</td>
					</tr>						

					<tr>
						<td>Shukra</td>
						<td>337&deg;41'07"</td>
						
							<td><b>D</b></td>
						
						<td>Uttara Bhadrapada</td>
						<td>2</td>
						<td>Meena</td>
						<td>Kanya</td>
					</tr>						

					<tr>
						<td>Shani</td>
						<td>333&deg;56'25"</td>
						
							<td><b>D</b></td>
						
						<td>Uttara Bhadrapada</td>
						<td>1</td>
						<td>Meena</td>
						<td>Simha</td>
					</tr>						

					<tr>
						<td>Rahu</td>
						<td>330&deg;47'15"</td>
						
							<td><b>R</b></td>
						
						<td>Purva Bhadrapada</td>
						<td>4</td>
						<td>Meena</td>
						<td>Karka</td>
					</tr>						

					<tr>
						<td>Ketu</td>
						<td>150&deg;47'15"</td>
						
							<td><b>R</b></td>
						
						<td>Uttara Phalguni</td>
						<td>2</td>
						<td>Kanya</td>
						<td>Makara</td>
					</tr>						

				</table>			
			</div>

		</div>

			<div class="table">
          <div class="row">
            <div class="cell">Shani    as</div>
					  <div class="cell">18-Jun-2016,</div>
          </div>
      </div>
      
		<div class="div-table">
             <div class="div-table-row">
                <div class="div-table-col" style="width: 150px;  align: left"><b>Vimshottari Dasha </b>(Antara<i style="color:red"> ending dates)</i></div>
             </div>   
           <div class="div-table-row">		


				<div class="div-table-col" style="width: 150px; color: #50d861; align: left"></div>
			</div>
			<div><b>Shani</b><i> Dasha starts...</i></div>

      <div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Budha</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">27-Feb-2019<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Ketu</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">05-Apr-2020<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Shukra</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">04-Jun-2023<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Surya</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">16-May-2024<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Chandra</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">17-Dec-2025<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Kuja</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">26-Jan-2027<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Rahu</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">02-Dec-2029<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Guru</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">14-Jun-2032<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

				<div class="div-table-col" style="width: 150px; color: #50d861; align: left"></div>
			</div>
			<div><b>Budha</b><i> Dasha starts...</i></div>
			<div class="div-table-row" style="width: 50px  align: left">
			

                	<div class="div-table-col" style="width: 57px; align: right">Budha</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">11-Nov-2034<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Ketu</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">07-Nov-2035<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Shukra</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">07-Sep-2038<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Surya</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">13-Jul-2039<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Chandra</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">13-Dec-2040<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Kuja</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">11-Dec-2041<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Rahu</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">29-Jun-2044<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Guru</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">05-Oct-2046<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Shani</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">14-Jun-2049<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

				<div class="div-table-col" style="width: 150px; color: #50d861; align: left"></div>
			</div>
			<div><b>Ketu</b><i> Dasha starts...</i></div>
			<div class="div-table-row" style="width: 50px  align: left">
			

                	<div class="div-table-col" style="width: 57px; align: right">Ketu</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">10-Nov-2049<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Shukra</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">10-Jan-2051<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Surya</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">16-May-2051<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Chandra</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">16-Dec-2051<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Kuja</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">14-May-2052<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Rahu</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">01-Jun-2053<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Guru</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">07-May-2054<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Shani</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">16-Jun-2055<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Budha</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">13-Jun-2056<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

				<div class="div-table-col" style="width: 150px; color: #50d861; align: left"></div>
			</div>
			<div><b>Shukra</b><i> Dasha starts...</i></div>
			<div class="div-table-row" style="width: 50px  align: left">
			

                	<div class="div-table-col" style="width: 57px; align: right">Shukra</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">13-Oct-2059<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Surya</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">13-Oct-2060<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Chandra</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">13-Jun-2062<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Kuja</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">13-Aug-2063<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Rahu</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">13-Aug-2066<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Guru</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">12-Apr-2069<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Shani</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">12-Jun-2072<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Budha</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">12-Apr-2075<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Ketu</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">12-Jun-2076<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

				<div class="div-table-col" style="width: 150px; color: #50d861; align: left"></div>
			</div>
			<div><b>Surya</b><i> Dasha starts...</i></div>
			<div class="div-table-row" style="width: 50px  align: left">
			

                	<div class="div-table-col" style="width: 57px; align: right">Surya</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">30-Sep-2076<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Chandra</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">30-Mar-2077<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Kuja</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">05-Aug-2077<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Rahu</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">29-Jun-2078<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Guru</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">17-Apr-2079<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Shani</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">29-Mar-2080<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Budha</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">04-Feb-2081<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Ketu</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">10-Jun-2081<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Shukra</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">10-Jun-2082<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

				<div class="div-table-col" style="width: 150px; color: #50d861; align: left"></div>
			</div>
			<div><b>Chandra</b><i> Dasha starts...</i></div>
			<div class="div-table-row" style="width: 50px  align: left">
			

                	<div class="div-table-col" style="width: 57px; align: right">Chandra</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">10-Apr-2083<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Kuja</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">10-Nov-2083<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Rahu</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">10-May-2085<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Guru</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">09-Sep-2086<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Shani</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">09-Apr-2088<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Budha</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">09-Sep-2089<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Ketu</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">09-Apr-2090<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Shukra</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">09-Dec-2091<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Surya</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">09-Jun-2092<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

				<div class="div-table-col" style="width: 150px; color: #50d861; align: left"></div>
			</div>
			<div><b>Kuja</b><i> Dasha starts...</i></div>
			<div class="div-table-row" style="width: 50px  align: left">
			

                	<div class="div-table-col" style="width: 57px; align: right">Kuja</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">05-Nov-2092<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Rahu</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">23-Nov-2093<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Guru</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">30-Oct-2094<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Shani</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">09-Dec-2095<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Budha</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">06-Dec-2096<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Ketu</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">03-May-2097<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Shukra</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">03-Jul-2098<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Surya</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">10-Nov-2098<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Chandra</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">10-Jun-2099<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

				<div class="div-table-col" style="width: 150px; color: #50d861; align: left"></div>
			</div>
			<div><b>Rahu</b><i> Dasha starts...</i></div>
			<div class="div-table-row" style="width: 50px  align: left">
			

                	<div class="div-table-col" style="width: 57px; align: right">Rahu</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">22-Feb-2102<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Guru</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">16-Jul-2104<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Shani</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">22-May-2107<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Budha</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">10-Dec-2109<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Ketu</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">29-Dec-2110<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Shukra</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">29-Dec-2113<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Surya</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">22-Nov-2114<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Chandra</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">22-May-2116<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Kuja</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">09-Jun-2117<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

				<div class="div-table-col" style="width: 150px; color: #50d861; align: left"></div>
			</div>
			<div><b>Guru</b><i> Dasha starts...</i></div>
			<div class="div-table-row" style="width: 50px  align: left">
			

                	<div class="div-table-col" style="width: 57px; align: right">Guru</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">28-Jul-2119<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Shani</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">09-Feb-2122<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Budha</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">15-May-2124<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Ketu</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">21-Apr-2125<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Shukra</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">21-Dec-2127<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Surya</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">10-Oct-2128<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Chandra</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">09-Feb-2130<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Kuja</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">15-Jan-2131<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

                	<div class="div-table-col" style="width: 57px; align: right">Rahu</div>
					<div class="div-table-col" style="width: 87px; color: red; align: left; margin-right: 8px;">08-Jun-2133<b><font style=" color: black;">, </font></b></div>
<!--  					<div class="div-table-col" style="color: black; align: left;"></div> -->

           </div>
</div>

  <script src='js/vendor/jquery.js'></script>
  <script src="js/foundation/foundation.js"></script>
  <script>
    $(document).foundation();
  </script>

</body>
</html>
`;

const cleanText = (htmlInfo) => {
  return htmlInfo.replace(/&nbsp;/g, ' ');
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

const intro0 = "It is made according to";
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
        setHtmlContent(html);
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
    //console.log('WhatsApp chat with file, Opened successfully ' + myWhatsAppNumber + "file " + newFileName);
    //PDFScreen(newFileName);
    //openWhatsApp(myWhatsAppNumber);
  };

  const { width } = useWindowDimensions();
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
          <Text style={styles.titleText}>{'\n'}{intro0}
          <Text style={{fontWeight: "bold", textAlign: 'left'}}>{intro1}</Text>
          <Text style={styles.titleText}> (Chitra Paksha), 
          <Text style={{fontWeight: "bold", textAlign: 'left'}}>{intro2}</Text>
            of Sun traversing 360 degrees,
          <Text style={{fontWeight: "bold", textAlign: 'left'}}>{intro3}</Text>
            and Timing using 
          <Text style={{fontWeight: "bold", textAlign: 'left'}}>{intro4}{'\n'}</Text></Text></Text>

            <Text style={styles.titleText}>For <Text style={{fontWeight: "bold", textAlign: 'left'}}>Horoscope Predictions</Text>, contact on WhatsApp (918610386346).</Text>
            <Text style={styles.text}>{'\n'}Steve Hora, Vedic Astrology Expert, India.</Text>

            <Text style={styles.textU}><Link href="https://stevehora.com">www.stevehora.com</Link></Text>
            <Text style={styles.textU}><Link href="mailto:vedicastrology123@gmail.com">vedicastrology123@gmail.com</Link></Text>
{/*             <WebView source={{html: '<iframe width="100%" height="50%" src="https://www.youtube.com/embed/cqyziA30whE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'}}
                                style={{ flex: 1, marginTop: 20 }} /> */}
        </View>
      </ScrollView>
        {/* <HTMLView value={htmlContent} stylesheet={styles} /> */}
        <View>
          <HTMLView 
            source={{ html: cleanText(htmlInfo) }}
            contentWidth={width}
            tagsStyles={contentHtmlStyles}
          />
        </View>
    </SafeAreaView>
  );
};

const contentHtmlStyles = StyleSheet.create({
/*   container: {
    width: 300, // Adjust as needed
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
  }, */
  body: {
    margin: 50,
  },
  table: {
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: '#black',
    borderStyle: 'solid',
    marginBottom: 7
 },
 tr: {
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: '#black',
    borderStyle: 'solid',
 },
 td: {
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor:'#black',
    borderStyle: 'solid',
 },
});

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
  titleText: {
    fontSize: 16,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
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