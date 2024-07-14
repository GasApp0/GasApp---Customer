import { Image, StyleSheet, Platform, View, Text, TextInput,FlatList, TouchableOpacity ,ScrollView  } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ProgressBar } from 'react-native-paper';




export default function Tracker() {
  const [progress, setProgress] = useState(0.5);

  return (
    <View style={styles.main}>
      <View style = {{
           flexDirection: 'row',
           alignItems: 'center',
           justifyContent: 'space-between',
           alignSelf : 'stretch',
          }}>
            <View style ={{
          flexDirection : 'row',
          alignItems : 'center',
          gap : 8
        }}>
          <View style={{
            width : 40,
            height : 40,
            borderRadius : 40,
            backgroundColor : '#f5f5f5f5'
          }}></View>
          <View style = {{
            flexDirection : 'column',
            gap : 4
          }}>
            <Text style ={{
              fontWeight : '600',
              fontSize : 16
             
            }}>Hello 👋</Text>

            <Text style ={{
              fontSize : 12,
              color : '#4F4F4F)'
            }}>Let’s fill your LPG for you in less that 5 minutes</Text>
          </View>
            </View>

            <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path d="M12.02 2.90997C8.71003 2.90997 6.02003 5.59997 6.02003 8.90997V11.8C6.02003 12.41 5.76003 13.34 5.45003 13.86L4.30003 15.77C3.59003 16.95 4.08003 18.26 5.38003 18.7C9.69003 20.14 14.34 20.14 18.65 18.7C19.86 18.3 20.39 16.87 19.73 15.77L18.58 13.86C18.28 13.34 18.02 12.41 18.02 11.8V8.90997C18.02 5.60997 15.32 2.90997 12.02 2.90997Z" stroke="#828282" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
        <Path d="M13.87 3.2C13.56 3.11 13.24 3.04 12.91 3C11.95 2.88 11.03 2.95 10.17 3.2C10.46 2.46 11.18 1.94 12.02 1.94C12.86 1.94 13.58 2.46 13.87 3.2Z" stroke="#828282" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M15.02 19.06C15.02 20.71 13.67 22.06 12.02 22.06C11.2 22.06 10.44 21.72 9.89999 21.18C9.35999 20.64 9.01999 19.88 9.01999 19.06" stroke="#828282" stroke-width="2" stroke-miterlimit="10"/>
      </Svg>

      </View>

      <View style ={{
        flexDirection : 'column',
        gap : 16,
        alignSelf : 'stretch',
      }}>

        <View style ={{
          flexDirection : 'column',
          gap : 4,
        
        }}>
            <Text style={{
              fontSize : 20,
              fontWeight : '700'
            }}>Track All Activities Here </Text>

            <Text style={{
              fontSize : 14,
              color : 'rgba(0, 0, 0, 0.60)'
            }}>Enjoy real time track system as your Gas cylinder get filled</Text>
        </View>

        <View style={styles.tracker}>
            <View style={{
              flexDirection : 'row',
              gap : 12,
              alignItems : 'flex-start'
            }}> 
             <View style={{
              padding : 16,
              borderWidth : 1,
              borderStyle :'dashed',
              borderRadius : 50,
              borderColor : 'rgba(0, 0, 0, 0.10)'
             }}>
                <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none">
                <Path d="M8.0933 5.08008H4.57997C3.33997 5.08008 3.05997 5.70009 2.90664 6.46676L2.33997 9.16675H10.34L9.77331 6.46676C9.60664 5.70009 9.3333 5.08008 8.0933 5.08008Z" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <Path d="M11.3267 13.5735C11.38 14.1602 10.9133 14.6668 10.3133 14.6668H9.37333C8.83333 14.6668 8.76 14.4335 8.66 14.1535L8.56 13.8535C8.42 13.4468 8.32667 13.1668 7.60667 13.1668H5.04667C4.32667 13.1668 4.22 13.4802 4.09333 13.8535L3.99334 14.1535C3.9 14.4402 3.82667 14.6668 3.28 14.6668H2.34C1.74 14.6668 1.26667 14.1602 1.32667 13.5735L1.60667 10.5268C1.68 9.77348 1.82 9.16016 3.13333 9.16016H9.51334C10.8267 9.16016 10.9667 9.77348 11.04 10.5268L11.3267 13.5735Z" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <Path d="M2.33331 7.66699H1.83331" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <Path d="M10.8333 7.66699H10.3333" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <Path d="M3.33331 11.167H4.83331" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <Path d="M7.83331 11.167H9.33331" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <Path d="M12.4733 5.82677C12.66 5.39344 12.5933 4.80678 12.2467 4.29345C11.9067 3.78012 11.3867 3.49345 10.9133 3.50011" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <Path d="M14.5467 6.48682C14.8267 5.48015 14.6267 4.24684 13.9133 3.18018C13.2 2.11351 12.1333 1.46016 11.0933 1.3335" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </Svg>
              </View>
             <View style ={{
              gap : 4
             }}>
              <Text>Rider will arrive at your location soon</Text>
              <Text style={{
                color : 'rgba(0, 0, 0, 0.50)'
              }}>Arriving in 5 minutes</Text>
              <ProgressBar progress={progress} color={'#52B922'} style={styles.progressBar} />
             </View>
             </View>
             <View style={{
              gap : 2,
              left : 23,
              top : 10,
              
             }}>
               <View style={{
              backgroundColor: 'rgba(0, 0, 0, 0.20)',
              width : 2,
              height: 4,
             }}>
            </View>
            <View style={{
              backgroundColor: 'rgba(0, 0, 0, 0.20)',
              width : 2,
              height: 4,
             }}>
            </View>
            <View style={{
              backgroundColor: 'rgba(0, 0, 0, 0.20)',
              width : 2,
              height: 4,
             }}>
            </View>
            <View style={{
              backgroundColor: 'rgba(0, 0, 0, 0.20)',
              width : 2,
              height: 4,
             }}>
            </View>
            <View style={{
              backgroundColor: 'rgba(0, 0, 0, 0.20)',
              width : 2,
              height: 4,
             }}>
            </View>
             </View>
             <View style={{
              flexDirection : 'row',
              gap : 12,
              alignItems : 'center',
              top : 24,
            }}> 
             <View style={{
              padding : 16,
              borderWidth : 1,
              borderStyle :'dashed',
              borderRadius : 50,
              borderColor : 'rgba(0, 0, 0, 0.10)',
              alignItems : 'center'
             }}>
           <Svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <Path d="M2.33331 14.6668V3.3335C2.33331 2.00016 3.22665 1.3335 4.33331 1.3335H9.66665C10.7733 1.3335 11.6666 2.00016 11.6666 3.3335V14.6668H2.33331Z" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <Path d="M1.33331 14.6665H12.6666" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <Path d="M5.59331 6.66666H8.41331C9.10665 6.66666 9.67331 6.33332 9.67331 5.40666V4.58666C9.67331 3.65999 9.10665 3.32666 8.41331 3.32666H5.59331C4.89998 3.32666 4.33331 3.65999 4.33331 4.58666V5.40666C4.33331 6.33332 4.89998 6.66666 5.59331 6.66666Z" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <Path d="M4.33331 8.6665H6.33331" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <Path d="M11.6667 10.6733L14.6667 10.6667V6.66667L13.3334 6" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </Svg>
              </View>
             <View style ={{
              gap : 4
             }}>
          
              <Text style={{
                color : 'rgba(0, 0, 0, 0.50)',
                alignItems : 'center'
              }}>Filling Process</Text>
             
             </View>
             </View>
             <View style={{
              gap : 2,
              left : 23,
              top : 40,
              
             }}>
               <View style={{
              backgroundColor: 'rgba(0, 0, 0, 0.20)',
              width : 2,
              height: 4,
             }}>
            </View>
            <View style={{
              backgroundColor: 'rgba(0, 0, 0, 0.20)',
              width : 2,
              height: 4,
             }}>
            </View>
            <View style={{
              backgroundColor: 'rgba(0, 0, 0, 0.20)',
              width : 2,
              height: 4,
             }}>
            </View>
            <View style={{
              backgroundColor: 'rgba(0, 0, 0, 0.20)',
              width : 2,
              height: 4,
             }}>
            </View>
            <View style={{
              backgroundColor: 'rgba(0, 0, 0, 0.20)',
              width : 2,
              height: 4,
             }}>
            </View>
             </View>
             <View style={{
              flexDirection : 'row',
              gap : 12,
              alignItems : 'flex-start',
              top : 50
            }}> 
             <View style={{
              padding : 16,
              borderWidth : 1,
              borderStyle :'dashed',
              borderRadius : 50,
              borderColor : 'rgba(0, 0, 0, 0.10)',
              alignSelf : 'stretch'
             }}>
                <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none">
                <Path d="M8.0933 5.08008H4.57997C3.33997 5.08008 3.05997 5.70009 2.90664 6.46676L2.33997 9.16675H10.34L9.77331 6.46676C9.60664 5.70009 9.3333 5.08008 8.0933 5.08008Z" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <Path d="M11.3267 13.5735C11.38 14.1602 10.9133 14.6668 10.3133 14.6668H9.37333C8.83333 14.6668 8.76 14.4335 8.66 14.1535L8.56 13.8535C8.42 13.4468 8.32667 13.1668 7.60667 13.1668H5.04667C4.32667 13.1668 4.22 13.4802 4.09333 13.8535L3.99334 14.1535C3.9 14.4402 3.82667 14.6668 3.28 14.6668H2.34C1.74 14.6668 1.26667 14.1602 1.32667 13.5735L1.60667 10.5268C1.68 9.77348 1.82 9.16016 3.13333 9.16016H9.51334C10.8267 9.16016 10.9667 9.77348 11.04 10.5268L11.3267 13.5735Z" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <Path d="M2.33331 7.66699H1.83331" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <Path d="M10.8333 7.66699H10.3333" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <Path d="M3.33331 11.167H4.83331" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <Path d="M7.83331 11.167H9.33331" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <Path d="M12.4733 5.82677C12.66 5.39344 12.5933 4.80678 12.2467 4.29345C11.9067 3.78012 11.3867 3.49345 10.9133 3.50011" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <Path d="M14.5467 6.48682C14.8267 5.48015 14.6267 4.24684 13.9133 3.18018C13.2 2.11351 12.1333 1.46016 11.0933 1.3335" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </Svg>
              </View>
             <View style ={{
              gap : 4
             }}>
              <Text>Refill Completion </Text>
              <Text style={{
                color : 'rgba(0, 0, 0, 0.50)'
              }}>Arriving in 5 minutes</Text>
              <ProgressBar progress={progress} color={'#52B922'} style={styles.progressBar} />
             </View>
             </View>
        </View>

      </View>
        
           

    </View>
  );
}


const styles = StyleSheet.create({
  main: {
    flexDirection: 'column',
    alignItems : 'flex-start',
    gap : 30,
    flex : 1,
    alignSelf : 'stretch',
    backgroundColor : 'white',
    paddingHorizontal : 16,
    paddingTop :30
  },
  container : {
    flexDirection : 'column',
    gap : 24,
    padding : 16,
    width : 'auto',
    alignSelf : 'stretch',
    backgroundColor : 'rgba(34, 49, 185, 0.03)',
    borderRadius : 16,
    borderColor : 'rgba(0, 0, 0, 0.05)',
    borderWidth : 1
  },
  col1 : {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  wrap : {
    gap : 16
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.1)'
  }
});
