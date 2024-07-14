import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH } from './../../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      onAuthStateChanged(FIREBASE_AUTH, (user) => {
        if (user) {
          navigation.navigate('Insidelayout');
        } else {
          navigation.navigate('Onboarding');
        }
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gas</Text>
      <Text style={[styles.text, { color: 'rgba(0, 0, 0, 0.50)' }]}>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontWeight: '700',
    fontSize: 40,
  },
});
