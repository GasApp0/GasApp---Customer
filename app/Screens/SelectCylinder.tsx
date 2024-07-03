import { Image, StyleSheet, Platform, View, Text, TextInput,FlatList, ScrollView } from 'react-native';
import React, { useState } from 'react';
import PrimaryButton from '@/components/PrimaryButton';
import BackButton from '@/components/BackButton';
{/*import SecondaryButton from '@/components/SecondaryButton'*/}
import Svg, { Path } from 'react-native-svg';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function SelectCylinder() {

  const [selected, setSelected] = useState(false);
  const [price, setPrice] = useState('n/a');

  const handlePress = () => {
    setSelected(!selected);
    if (!selected) {
      setPrice('GHC 3.00');  
    } else {
      setPrice('n/a');
    }
  };

  const handlePress2 = () => {
    setSelected(!selected);
    if (!selected) {
      setPrice('GHC 6.00');  
    } else {
      setPrice('n/a');
    }
  };

  const navigation = useNavigation();
  const route = useRoute();
  

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <BackButton/>     
          <Text style ={{
              fontSize : 18,
              fontWeight : '700'
          }}>Select LPG Cylinder Size</Text>
      </View>
      <ScrollView style={styles.scrollContainer} decelerationRate="fast">
        <View style={styles.MainContainer}>
          <View style={styles.cylinderContainer}>
            <View style={styles.imgContainer}>
              {/*<Image source={require('./../assets/images/smallSize.png')} style={styles.image} />*/}
            </View>
            <View style={styles.textContainer}>
              <Text>Small Size</Text>
              <Text style={styles.priceText}>GHC 3.00</Text>
            </View>
      
          </View>
        </View>
        <View style={styles.MainContainer}>
          <View style={styles.cylinderContainer}>
            <View style={styles.imgContainer}>
              {/*<Image source={require('./../assets/images/mediumSize.png')} style={styles.image} />*/}
            </View>
            <View style={styles.textContainer}>
              <Text>Medium Size</Text>
              <Text style={styles.priceText}>GHC 6.00</Text>
            </View>
            {/*<SecondaryButton 
          onPress={handlePress2} 
          title={selected ? 'Deselect' : 'Select'} 
          selected={selected} 
        />*/}
          </View>
        </View>
      </ScrollView>
        <View style={styles.footer}>
          <Text style={{
            fontWeight : '700',
            fontSize : '18'
          }}>Cost Summary</Text>
          <View style={{
                flexDirection : 'row',
                justifyContent : 'space-between',
                
              }}>
            <Text style={{
              color : 'rgba(0, 0, 0, 0.60)'
            }}>hEYY</Text>
            <Text style={styles.price}>GHC.00</Text>
          </View>
          <View style={{
                flexDirection : 'row',
                justifyContent : 'space-between',
                
              }}>
            <Text style={{
              color : 'rgba(0, 0, 0, 0.60)'
            }}>Cylinder Size</Text>
            <Text>{price}</Text>
          </View>
          <View style={{
                flexDirection : 'row',
                justifyContent : 'space-between',
                
              }}>
            <Text style={{
              color : 'rgba(0, 0, 0, 0.60)'
            }}>Amount You Want To Buy</Text>
            <Text>n/a</Text>
          </View>
          <View style={{
            width : 'auto',
            height : 1,
            borderWidth : 1,
            borderColor: 'rgba(0, 0, 0, 0.10)',
          }}></View>
            <View style={{
                flexDirection : 'row',
                justifyContent : 'space-between',
                
              }}>
            <Text style={{
              color : 'rgba(0, 0, 0, 0.60)'
            }}>Total Cost</Text>
            <Text>GH12.00</Text>
          </View>
          <PrimaryButton Title={"Continue"} route="ConfirmLocation"/>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'column',
    gap : 24,
    flex : 1,
    backgroundColor : 'white',
    paddingHorizontal : 8
  },
  header : {
    flexDirection : 'row',
    alignItems : 'center',
    gap : 46,
    borderBottomWidth : 1,
    borderColor: 'rgba(0, 0, 0, 0.20)',
    position : 'static',
    paddingBottom : 8,
    alignSelf : 'stretch',
  },
  MainContainer : {
    flexDirection : 'column',
    alignSelf : 'stretch',
    gap : 12,
    marginBottom : 12

   
  },
  cylinderContainer: {
    borderRadius : 16,
    borderWidth : 1,
    borderColor: 'rgba(0, 0, 0, 0.10)',
    padding : 12,
    gap : 8
  },
  imgContainer : {
    alignSelf : 'stretch',
    height : 198,
    borderRadius : 12,
    backgroundColor : '#FAFAFA',
    alignItems : 'center',
    justifyContent : 'center'
  },
  footer: {
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.10)',
    backgroundColor: '#FAFAFA',
    alignSelf: 'stretch',
    position: 'absolute',
    bottom: -20,
    width: '109%',
    left : -10,
    gap: 16
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceText: {
    color: 'rgba(0, 0, 0, 0.60)',
  }
  ,
  scrollContainer: {
    flex: 1,
    gap : 12,
    flexDirection : 'column',
    height: 100
  }
});
