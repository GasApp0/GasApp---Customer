import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, View, Text, ScrollView, TextInput, Keyboard } from 'react-native';
import PrimaryButton from '@/components/PrimaryButton';
import BackButton from '@/components/BackButton';
import SecondaryButton from '@/components/SecondaryButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import Svg, { Path } from 'react-native-svg';

export default function Amount() {
  const [amount, setAmount] = useState(''); 
  const [totalCost, setTotalCost] = useState(0); 

  const navigation = useNavigation();
  const route = useRoute();
  const { offerName, offerPrice, price } = route.params;


  {/*useEffect(() => {
    // Convert offerPrice, price, and amount to numbers and calculate total cost
    const numericOfferPrice = parseFloat(offerPrice);
    const numericPrice = parseFloat(price);
    const numericAmount = parseFloat(amount) || 0; // Default to 0 if amount is not a number

    // Calculate total cost
    const calculatedTotalCost = numericOfferPrice + numericPrice + numericAmount;
    setTotalCost(calculatedTotalCost);
  }, [amount, offerPrice, price]);*/}

  useEffect(() => {
    // Convert offerPrice, price, and amount to numbers and calculate total cost
    const numericOfferPrice = parseFloat(offerPrice) || 0;
    const numericPrice = parseFloat(price) || 0;
    const numericAmount = parseFloat(amount) || 0; // Default to 0 if amount is not a number

    // Calculate total cost
    const calculatedTotalCost = numericOfferPrice + numericPrice + numericAmount;
    setTotalCost(calculatedTotalCost);
  }, [amount, offerPrice, price]);



  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <BackButton />
        <Text style={{ fontSize: 18, fontWeight: '700' }}>Amount</Text>
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Enter Amount You Want To Buy</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Amount"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
          onSubmitEditing={Keyboard.dismiss}
          returnKeyType="done"
        />
      </View>
    
      <View style={styles.footer}>
        <Text style={{ fontWeight: '700', fontSize: 18 }}>Cost Summary</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: 'rgba(0, 0, 0, 0.60)' }}>{offerName}</Text>
          <Text style={styles.price}>GHC {offerPrice}.00</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: 'rgba(0, 0, 0, 0.60)' }}>Cylinder Size</Text>
          <Text>{price}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: 'rgba(0, 0, 0, 0.60)' }}>Amount You Want To Buy</Text>
          <Text>{amount ? `GHC ${amount}.00` : 'n/a'}</Text>
        </View>
        <View style={{ width: 'auto', height: 1, borderWidth: 1, borderColor: 'rgba(0, 0, 0, 0.10)' }}></View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: 'rgba(0, 0, 0, 0.60)' }}>Total Cost</Text>
          <Text>GHC {totalCost}.00</Text>
        </View>
        <PrimaryButton title={'Continue'} 
        onPress={() => navigation.navigate('Payment', { offerName, offerPrice, totalCost, price, totalCost, amount })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    gap: 20,
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingTop: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: "100%",
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.20)',
    paddingBottom: 8,
    alignSelf: 'stretch',
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
    backgroundColor: '#F5F5F5',
    alignSelf: 'stretch',
    position: 'absolute',
    bottom: -40,
    width: '109%',
    gap: 16,
    paddingBottom: 44,
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
    borderColor: 'rgba(0, 0, 0, 0.50)'
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
    height: 50,
    borderColor: 'rgba(0, 0, 0, 0.20)',
    borderWidth: 1,
    padding: 8,
    borderRadius: 12,
    backgroundColor: '#FAFAFA',
  }
});
