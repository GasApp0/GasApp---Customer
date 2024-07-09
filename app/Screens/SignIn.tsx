import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { auth } from './../../firebaseConfig';
import PrimaryButton from '@/components/PrimaryButton';
import BackButton from '@/components/BackButton';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in!');
      navigation.navigate('Home'); // Navigate to your main app screen after signing in
    } catch (error) {
      console.error('Error signing in: ', error);
    }
  };
  

  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <BackButton onPress={() => navigation.goBack()} />
        <Text style={styles.headerTitle}>General Details</Text>
      </View>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {/*<Button title="Sign In" onPress={handleSignIn} />*/}
      <PrimaryButton title=' Sign In' onPress={handleSignIn}  />
      <View style={styles.text}>
                <Text style={{
                    fontSize : 16,
                    color : '#828282'
                }}>Are you new here?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('GeneralDetails')}>
                <Text style={{
                    fontSize : 16,
                }}>Sign Up</Text>
                </TouchableOpacity>
            </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor : 'white'
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
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
  input: {
    height: 50,
    borderColor: 'rgba(0, 0, 0, 0.20)',
    borderWidth: 1,
    padding: 8,
    borderRadius: 12,
    backgroundColor: '#FAFAFA',
    marginBottom : 16
  },
  text : {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'center',
    gap : 4,
    marginTop :12
  }

});

export default SignIn;
