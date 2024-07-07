import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook from react-navigation

export default function SplashScreen() {
  const [isReady, setIsReady] = useState(false);
  const navigation = useNavigation(); // Initialize navigation hook

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
      navigation.navigate('Onboarding'); // Navigate to Onboarding screen after 2 seconds
    }, 2000); // Wait for 2 seconds

    return () => clearTimeout(timer); // Cleanup timer if component unmounts
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
