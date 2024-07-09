import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import PrimaryButton from '@/components/PrimaryButton';
import BackButton from '@/components/BackButton';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const hostels = [
  { id: '1', name: 'Evandy - Annex' },
  { id: '2', name: 'Evandy - New Site' },
  { id: '3', name: 'Evandy - Bomso' },
  { id: '4', name: 'Victory Towers' },
  { id: '5', name: 'Suncity Hostel' },
  { id: '6', name: 'Adombi Hostel' },
  { id: '7', name: 'Georgia Hostel' },
];

export default function SelectHostel() {
  const navigation = useNavigation();
  const [selectedHostel, setSelectedHostel] = useState('');

  // Function to handle hostel selection
  const handleSelectHostel = (hostelId) => {
    setSelectedHostel(hostelId === selectedHostel ? '' : hostelId);
  };

  // Function to handle pressing Continue button
  const handleContinue = () => {
    navigation.navigate('Home');
  };

  // Enable Continue button only if a hostel is selected
  const isButtonDisabled = !selectedHostel;

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <BackButton onPress={() => navigation.goBack()} />
        <Text style={styles.headerTitle}>Select Hostel</Text>
      </View>
      <View style={styles.hostelWrapper}>
        {hostels.map((hostel) => (
          <TouchableOpacity
            key={hostel.id}
            style={[
              styles.hostelContainer,
              selectedHostel === hostel.id && styles.selectedHostelContainer,
            ]}
            onPress={() => handleSelectHostel(hostel.id)}
          >
            <Text style={[styles.hostelName, selectedHostel === hostel.id && styles.selectedHostelName]}>
              {hostel.name}
            </Text>
            {selectedHostel === hostel.id && (
              <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style={styles.selectedIcon}>
                <Path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="black"/>
              </Svg>
            )}
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.footer}>
        <PrimaryButton title="Continue" onPress={handleContinue} disabled={isButtonDisabled} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 16,
  },
  hostelWrapper: {
    marginTop: 16,
  },
  hostelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: 'rgba(0, 0, 0, 0.10)',
    marginBottom: 8,
  },
  selectedHostelContainer: {
    borderColor: '#000', // Change to the color you want for selected hostels
  },
  selectedHostelName: {
    color: '#000', // Change to the text color you want for selected hostels
  },
  selectedIcon: {
    width: 24,
    height: 24,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.20)',
  },
  hostelName: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.60)',
  },
});
