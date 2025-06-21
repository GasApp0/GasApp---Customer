import React, { useState, useContext } from 'react';
import { Image, StyleSheet, View, Text, ScrollView, TextInput } from 'react-native';
import PrimaryButton from '@/components/PrimaryButton';
import BackButton from '@/components/BackButton';
import SecondaryButton from '@/components/SecondaryButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import Svg, { Path } from 'react-native-svg';
import { HostelContext } from './HostelContext';
import MapView, { Marker } from 'react-native-maps';


export default function SelectLocation() {
  const [selectedSmall, setSelectedSmall] = useState(false); // Track selected state for Small Size
  const [selectedMedium, setSelectedMedium] = useState(false); // Track selected state for Medium Size
  
  const { selectedHostel } = useContext(HostelContext);



  const navigation = useNavigation();
  const route = useRoute();
  const { offerName, offerPrice, totalCost, price  } = route.params;

  return (
    <View style={styles.main}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          marginBottom: 2,
          marginHorizontal: 16,
        }}
      >
        <View style={{ position: 'absolute', left: 0 }}>
          <BackButton />
        </View>
        <Text style={{ fontSize: 18, fontWeight: '700', textAlign: 'center' }}>
          Select Picker Up Point
        </Text>
      </View>


        <View style={{       
        height : 820
      }}>
        <MapView
        style={styles.map}
        initialRegion={{
          latitude: 6.67618 , longitude: -1.56236,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* <Marker
          coordinate={{latitude: selectedHostel.latitude, longitude: selectedHostel.longitude, }}
          title="Marker Title"
          description="Marker Description"
        /> */}
        
      </MapView>
      </View>

     <View style={styles.footer}>

         <View style={styles.input}>

          <Svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <Path d="M17.031 17.7901C17.491 18.2501 18.201 17.5401 17.741 17.0901L13.991 13.3301C15.3064 11.8746 16.0335 9.98189 16.031 8.02006C16.031 3.63006 12.461 0.0600586 8.07096 0.0600586C3.68096 0.0600586 0.110962 3.63006 0.110962 8.02006C0.110962 12.4101 3.68096 15.9801 8.07096 15.9801C10.051 15.9801 11.881 15.2501 13.281 14.0401L17.031 17.7901ZM1.10996 8.02006C1.10996 4.18006 4.23996 1.06006 8.06996 1.06006C11.91 1.06006 15.03 4.18006 15.03 8.02006C15.03 11.8601 11.91 14.9801 8.06996 14.9801C4.23996 14.9801 1.10996 11.8601 1.10996 8.02006Z" fill="black" fill-opacity="0.6"/>
          </Svg>

              <TextInput
             
                placeholder="Select Your Pick Up Point"
                // value={searchTerm}
                // onChangeText={setSearchTerm}
                returnKeyType="done"
                placeholderTextColor={'rgba(0,0,0,.5)'}
              />
          </View>

          <View style={{
            display : 'flex',
            gap : 12,
            alignItems : 'center',
            flexDirection : 'row',
            padding : 12,
            borderWidth: 1,
            borderColor : 'rgba(0,0,0,0.1)',
            borderRadius : 16
          }}>
              <View style={{
                height : 40,
                width : 40,
                borderRadius : 40,
                backgroundColor : '#f4f4f4',
                display : "flex",
                alignItems : 'center',
                justifyContent : 'center'
              }}>
                <Svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <Path d="M16 15.375V6.875C16 6.71975 15.9639 6.56664 15.8944 6.42779C15.825 6.28893 15.7242 6.16815 15.6 6.075L8.6 0.825C8.4269 0.695178 8.21637 0.625 8 0.625C7.78363 0.625 7.5731 0.695178 7.4 0.825L0.4 6.075C0.275804 6.16815 0.175 6.28893 0.105573 6.42779C0.036145 6.56664 0 6.71975 0 6.875V15.375C0 15.6402 0.105357 15.8946 0.292893 16.0821C0.48043 16.2696 0.734784 16.375 1 16.375H5C5.26522 16.375 5.51957 16.2696 5.70711 16.0821C5.89464 15.8946 6 15.6402 6 15.375V12.375C6 12.1098 6.10536 11.8554 6.29289 11.6679C6.48043 11.4804 6.73478 11.375 7 11.375H9C9.26522 11.375 9.51957 11.4804 9.70711 11.6679C9.89464 11.8554 10 12.1098 10 12.375V15.375C10 15.6402 10.1054 15.8946 10.2929 16.0821C10.4804 16.2696 10.7348 16.375 11 16.375H15C15.2652 16.375 15.5196 16.2696 15.7071 16.0821C15.8946 15.8946 16 15.6402 16 15.375Z" fill="#00000060" />
                </Svg>
              </View>

              <View style={{
                display : 'flex',
              }}>
                <Text style={{ fontSize: 14 }}>Use this as your current location for the pick up</Text>
                <Text style={{ color: 'rgba(0,0,0,0.5)', fontSize: 12 }}>
                  Save time by selecting your current location 
                </Text>
              </View>

          </View>

          <View style={{
            display : 'flex',
            gap : 12,
            alignItems : 'center',
            flexDirection : 'row',
            padding : 12,
            borderWidth: 1,
            borderColor : 'rgba(0,0,0,0.1)',
            borderRadius : 16
          }}>
              <View style={{
                height : 40,
                width : 40,
                borderRadius : 40,
                backgroundColor : '#f4f4f4',
                display : "flex",
                alignItems : 'center',
                justifyContent : 'center'
              }}>
                <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <Path d="M13.7777 3.55554H10.2222V4.44443H13.7777V13.7778H10.2222V14.6667H14.6666V4.44443C14.6666 4.20868 14.573 3.98259 14.4063 3.81589C14.2396 3.64919 14.0135 3.55554 13.7777 3.55554Z" fill="black" fillOpacity="0.6"/>
                  <Path d="M8.83561 1.33337H2.72005C2.47016 1.33337 2.2305 1.43264 2.0538 1.60934C1.8771 1.78605 1.77783 2.0257 1.77783 2.2756V14.6667H9.77783V2.2756C9.77783 2.0257 9.67856 1.78605 9.50186 1.60934C9.32516 1.43264 9.0855 1.33337 8.83561 1.33337ZM8.88894 13.7778H7.55561V12.4445H4.00005V13.7778H2.66672V2.2756C2.66672 2.26859 2.6681 2.26166 2.67078 2.25519C2.67346 2.24872 2.67739 2.24284 2.68234 2.23788C2.68729 2.23293 2.69317 2.229 2.69964 2.22632C2.70612 2.22364 2.71305 2.22226 2.72005 2.22226H8.83561C8.84261 2.22226 8.84955 2.22364 8.85602 2.22632C8.86249 2.229 8.86837 2.23293 8.87332 2.23788C8.87827 2.24284 8.8822 2.24872 8.88488 2.25519C8.88756 2.26166 8.88894 2.26859 8.88894 2.2756V13.7778Z" fill="black" fillOpacity="0.6"/>
                  <Path d="M3.55554 3.55554H4.44443V4.44443H3.55554V3.55554Z" fill="black" fillOpacity="0.6"/>
                  <Path d="M5.33337 3.55554H6.22226V4.44443H5.33337V3.55554Z" fill="black" fillOpacity="0.6"/>
                  <Path d="M7.11108 3.55554H7.99997V4.44443H7.11108V3.55554Z" fill="black" fillOpacity="0.6"/>
                  <Path d="M3.55554 5.77783H4.44443V6.66672H3.55554V5.77783Z" fill="black" fillOpacity="0.6"/>
                  <Path d="M5.33337 5.77783H6.22226V6.66672H5.33337V5.77783Z" fill="black" fillOpacity="0.6"/>
                  <Path d="M7.11108 5.77783H7.99997V6.66672H7.11108V5.77783Z" fill="black" fillOpacity="0.6"/>
                  <Path d="M3.55554 8H4.44443V8.88889H3.55554V8Z" fill="black" fillOpacity="0.6"/>
                  <Path d="M5.33337 8H6.22226V8.88889H5.33337V8Z" fill="black" fillOpacity="0.6"/>
                  <Path d="M7.11108 8H7.99997V8.88889H7.11108V8Z" fill="black" fillOpacity="0.6"/>
                  <Path d="M3.55554 10.2222H4.44443V11.1111H3.55554V10.2222Z" fill="black" fillOpacity="0.6"/>
                  <Path d="M5.33337 10.2222H6.22226V11.1111H5.33337V10.2222Z" fill="black" fillOpacity="0.6"/>
                  <Path d="M7.11108 10.2222H7.99997V11.1111H7.11108V10.2222Z" fill="black" fillOpacity="0.6"/>
                  <Path d="M10.2222 5.77783H11.1111V6.66672H10.2222V5.77783Z" fill="black" fillOpacity="0.6"/>
                  <Path d="M12 5.77783H12.8889V6.66672H12V5.77783Z" fill="black" fillOpacity="0.6"/>
                  <Path d="M10.2222 8H11.1111V8.88889H10.2222V8Z" fill="black" fillOpacity="0.6"/>
                  <Path d="M12 8H12.8889V8.88889H12V8Z" fill="black" fillOpacity="0.6"/>
                  <Path d="M10.2222 10.2222H11.1111V11.1111H10.2222V10.2222Z" fill="black" fillOpacity="0.6"/>
                  <Path d="M12 10.2222H12.8889V11.1111H12V10.2222Z" fill="black" fillOpacity="0.6"/>
                </Svg>
              </View>

              <View style={{
                display : 'flex',
              }}>
                <Text style={{fontSize: 14}}>Pizzaman Chickenman</Text>
                <Text style={{ color: 'rgba(0,0,0,0.6)',fontSize: 12 }}>
                  Mango Road,Kumasi
                </Text>
              </View>

          </View>

             <View style={{
            display : 'flex',
            gap : 12,
            alignItems : 'center',
            flexDirection : 'row',
            padding : 12,
            borderWidth: 1,
            borderColor : 'rgba(0,0,0,0.1)',
            borderRadius : 16
          }}>
              <View style={{
                height : 40,
                width : 40,
                borderRadius : 40,
                backgroundColor : '#f4f4f4',
                display : "flex",
                alignItems : 'center',
                justifyContent : 'center'
              }}>
                <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <Path d="M13.7777 3.55554H10.2222V4.44443H13.7777V13.7778H10.2222V14.6667H14.6666V4.44443C14.6666 4.20868 14.573 3.98259 14.4063 3.81589C14.2396 3.64919 14.0135 3.55554 13.7777 3.55554Z" fill="black" fillOpacity="0.6"/>
                  <Path d="M8.83561 1.33337H2.72005C2.47016 1.33337 2.2305 1.43264 2.0538 1.60934C1.8771 1.78605 1.77783 2.0257 1.77783 2.2756V14.6667H9.77783V2.2756C9.77783 2.0257 9.67856 1.78605 9.50186 1.60934C9.32516 1.43264 9.0855 1.33337 8.83561 1.33337ZM8.88894 13.7778H7.55561V12.4445H4.00005V13.7778H2.66672V2.2756C2.66672 2.26859 2.6681 2.26166 2.67078 2.25519C2.67346 2.24872 2.67739 2.24284 2.68234 2.23788C2.68729 2.23293 2.69317 2.229 2.69964 2.22632C2.70612 2.22364 2.71305 2.22226 2.72005 2.22226H8.83561C8.84261 2.22226 8.84955 2.22364 8.85602 2.22632C8.86249 2.229 8.86837 2.23293 8.87332 2.23788C8.87827 2.24284 8.8822 2.24872 8.88488 2.25519C8.88756 2.26166 8.88894 2.26859 8.88894 2.2756V13.7778Z" fill="black" fillOpacity="0.6"/>
                  <Path d="M3.55554 3.55554H4.44443V4.44443H3.55554V3.55554Z" fill="black" fillOpacity="0.6"/>
                  <Path d="M5.33337 3.55554H6.22226V4.44443H5.33337V3.55554Z" fill="black" fillOpacity="0.6"/>
                  <Path d="M7.11108 3.55554H7.99997V4.44443H7.11108V3.55554Z" fill="black" fillOpacity="0.6"/>
                  <Path d="M3.55554 5.77783H4.44443V6.66672H3.55554V5.77783Z" fill="black" fillOpacity="0.6"/>
                  <Path d="M5.33337 5.77783H6.22226V6.66672H5.33337V5.77783Z" fill="black" fillOpacity="0.6"/>
                  <Path d="M7.11108 5.77783H7.99997V6.66672H7.11108V5.77783Z" fill="black" fillOpacity="0.6"/>
                  <Path d="M3.55554 8H4.44443V8.88889H3.55554V8Z" fill="black" fillOpacity="0.6"/>
                  <Path d="M5.33337 8H6.22226V8.88889H5.33337V8Z" fill="black" fillOpacity="0.6"/>
                  <Path d="M7.11108 8H7.99997V8.88889H7.11108V8Z" fill="black" fillOpacity="0.6"/>
                  <Path d="M3.55554 10.2222H4.44443V11.1111H3.55554V10.2222Z" fill="black" fillOpacity="0.6"/>
                  <Path d="M5.33337 10.2222H6.22226V11.1111H5.33337V10.2222Z" fill="black" fillOpacity="0.6"/>
                  <Path d="M7.11108 10.2222H7.99997V11.1111H7.11108V10.2222Z" fill="black" fillOpacity="0.6"/>
                  <Path d="M10.2222 5.77783H11.1111V6.66672H10.2222V5.77783Z" fill="black" fillOpacity="0.6"/>
                  <Path d="M12 5.77783H12.8889V6.66672H12V5.77783Z" fill="black" fillOpacity="0.6"/>
                  <Path d="M10.2222 8H11.1111V8.88889H10.2222V8Z" fill="black" fillOpacity="0.6"/>
                  <Path d="M12 8H12.8889V8.88889H12V8Z" fill="black" fillOpacity="0.6"/>
                  <Path d="M10.2222 10.2222H11.1111V11.1111H10.2222V10.2222Z" fill="black" fillOpacity="0.6"/>
                  <Path d="M12 10.2222H12.8889V11.1111H12V10.2222Z" fill="black" fillOpacity="0.6"/>
                </Svg>
              </View>

              <View style={{
                display : 'flex',
              }}>
                <Text style={{fontSize: 14}}>New Brunei</Text>
                <Text style={{ color: 'rgba(0,0,0,0.6)',fontSize: 12 }}>
                  KNUST,Kumasi
                </Text>
              </View>

          </View>

        
       
        {/* <PrimaryButton
          title={'Continue'}
          onPress={() => navigation.navigate('SelectLocation')}
          // disabled={}
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    gap: 20,
    flex: 1,
    backgroundColor: 'white',
    // paddingHorizontal: 16,
    paddingTop: 30,
  },
  scrollContainer: {
    maxHeight: '55%',
    overflow: 'hidden',
  },
  MainContainer: {
    flexDirection: 'column',
    alignSelf: 'stretch',
    gap: 12,
    marginBottom: 12,
  },
  cylinderContainer: {
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.10)',
    padding: 12,
    gap: 8,
    overflow: 'hidden',
  },
  imgContainer: {
    alignSelf: 'stretch',
    height: 198,
    borderRadius: 12,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 200,
  },
  footer: {
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.10)',
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    position: 'absolute',
    bottom: -60,
    width: '100%',
    gap: 8,
    marginBottom: 44,
    paddingHorizontal: 16,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceText: {
    color: 'rgba(0, 0, 0, 0.60)',
  },
  selectedBackground: {
    backgroundColor: '#F6F6F6', // Replace with your desired color
    borderWidth: 1,
    borderColor : 'rgba(0, 0, 0, 0.50)'
  },
  inputWrapper: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.80)',
    marginBottom: 8,
  },
  input: {
    // height: 50,
    borderColor: 'rgba(0, 0, 0, 0.20)',
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 24,
    backgroundColor: '#FAFAFA',
    display : 'flex',
    flexDirection : 'row',
    alignItems : 'center',
    gap : 12,
  },
   map: {
    width: '100%',
    height: '100%'
  },
});
