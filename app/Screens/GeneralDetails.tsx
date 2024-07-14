import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import PrimaryButton from '@/components/PrimaryButton';
import BackButton from '@/components/BackButton';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FIREBASE_AUTH } from './../../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function GeneralDetails() {
  const navigation = useNavigation();

  // State variables for input fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Refs for managing focus
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  // Function to handle navigation to the next input field
  const handleNext = (nextRef) => {
    nextRef.current.focus();
  };

  // Function to handle form submission
  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    // Sign up the user with Firebase
    try {
      const userCredential = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
      const user = userCredential.user;

      // Save user details to AsyncStorage
      const userDetails = {
        firstName,
        lastName,
        email,
        phoneNumber,
        userId: user.uid,
      };
      await AsyncStorage.setItem('userDetails', JSON.stringify(userDetails));
      await AsyncStorage.setItem('userId', user.uid);

      navigation.navigate('SelectHostel');
    } catch (error) {
      console.error('Error signing up:', error);
      Alert.alert('Error', 'An error occurred while signing up. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton onPress={() => navigation.goBack()} />
        <Text style={styles.headerTitle}>General Details</Text>
      </View>
      <Text style={styles.label}>First Name</Text>
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
        returnKeyType="next"
        onSubmitEditing={() => handleNext(lastNameRef)}
      />
      <Text style={styles.label}>Last Name</Text>
      <TextInput
        ref={lastNameRef}
        style={styles.input}
        value={lastName}
        onChangeText={setLastName}
        returnKeyType="next"
        onSubmitEditing={() => handleNext(emailRef)}
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        ref={emailRef}
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        returnKeyType="next"
        onSubmitEditing={() => handleNext(phoneNumberRef)}
      />
      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        ref={phoneNumberRef}
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
        returnKeyType="next"
        onSubmitEditing={() => handleNext(passwordRef)}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        ref={passwordRef}
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        ref={confirmPasswordRef}
        style={styles.input}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <PrimaryButton title="Next" onPress={handleSignUp} />
      <View style={styles.text}>
        <Text style={{ fontSize: 16, color: '#828282' }}>Are you new here?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={{ fontSize: 16 }}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    flex: 1,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 50,
    borderColor: 'rgba(0, 0, 0, 0.20)',
    borderWidth: 1,
    padding: 8,
    borderRadius: 12,
    backgroundColor: '#FAFAFA',
    marginBottom: 16,
  },
  text: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    marginTop: 12,
  },
});
