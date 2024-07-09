import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from './../../firebaseConfig'; // Import your Firebase auth instance

export default function SplashScreen() {
  const [isReady, setIsReady] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const checkAuthentication = async () => {
      // Check if there's a currently authenticated user
      const currentUser = auth.currentUser;
      setIsReady(true); // Set isReady to true regardless of authentication status
      
      if (currentUser) {
        // If user is authenticated, navigate to Home screen
        navigation.navigate('Home');
      } else {
        // If user is not authenticated, navigate to Onboarding screen after 2 seconds
        setTimeout(() => {
          navigation.navigate('Onboarding');
        }, 2000); // Wait for 2 seconds before navigating
      }
    };

    checkAuthentication();

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
