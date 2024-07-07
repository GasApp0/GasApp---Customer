import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import PrimaryButton from '@/components/PrimaryButton';
import BackButton from '@/components/BackButton';
import { useNavigation } from '@react-navigation/native';

export default function GeneralDetails() {

  const navigation = useNavigation()

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  {/*
  const handleNext = () => {
    // Perform validation
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
      return;
    }
    // Perform other validation or necessary operations before navigating
    navigation.navigate('SelectHostel');
  };*/}

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <BackButton onPress={() => navigation.goBack()} />
        <Text style={styles.headerTitle}>General Details</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your first name"
            value={firstName}
            onChangeText={setFirstName}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your last name"
            value={lastName}
            onChangeText={setLastName}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm your password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </View>
        <PrimaryButton 
          title="Next"
          onPress={() => navigation.navigate('SelectHostel')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    gap : 16,
    paddingHorizontal : 16,
    paddingTop :12
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
    gap: '80%',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  inputContainer: {
    flex: 1,
    width: '100%',
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
  },
});
