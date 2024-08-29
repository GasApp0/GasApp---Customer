import { Image, StyleSheet, Platform, View, Text, TextInput,FlatList, TouchableOpacity ,ScrollView  } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ProgressBar } from 'react-native-paper';
import MapView, { Marker } from 'react-native-maps';
import { HostelContext } from './HostelContext';


export default function Tracker() {
  const [progress, setProgress] = useState(0.5);
  const { selectedHostel } = useContext(HostelContext);

  return (
    <View style={styles.main}>

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
            }}>Let’s fill your LPG for you in less that 5 minutes </Text>
        </View>

        <View style={styles.tracker}>
            <View style={{
              flexDirection : 'row',
              gap : 12,
              alignItems : 'flex-start',
              alignSelf : 'stretch',
              width : 'auto',
              
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
              gap : 4,
              width : '70%',
              
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
              top : 50,
             
            }}> 
             <View style={{
              padding : 16,
              borderWidth : 1,
              borderStyle :'dashed',
              borderRadius : 50,
              borderColor : 'rgba(0, 0, 0, 0.10)',
              alignSelf : 'stretch',
              width : 'auto',
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
              gap : 4,
               alignSelf : 'stretch',
               width : '70%'
             }}>
              <Text>Refill Completion </Text>
              <Text style={{
                color : 'rgba(0, 0, 0, 0.50)'
              }}>Arriving in 5 minutes</Text>
              <ProgressBar progress={progress} color={'#52B922'} style={styles.progressBar} />
             </View>
             </View>
        </View>

        <View style={{
         borderRadius : 24,
         marginTop : 70,
       
        height : 420
      }}>
        <MapView
        style={styles.map}
        initialRegion={{
          latitude: 6.67618, longitude: -1.56236,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{latitude: selectedHostel.latitude, longitude: selectedHostel.longitude, }}
          title="Marker Title"
          description="Marker Description"
        />
        
      </MapView>
      </View>
        
      </View>

    </View>
  );
}
///     latitude: hostelDetails?.location?.latitude || 0,
///     longitude: hostelDetails?.location?.longitude || 0,

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
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    alignSelf : 'stretch',
    
    
  },
  map: {
    width: '100%',
    height: '100%',
    borderRadius : 24
  },
});
