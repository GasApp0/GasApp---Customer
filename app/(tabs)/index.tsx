import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainNav from './MainNav'; // Assuming MainNav contains your app's navigation logic and screens

export default function index() {
  return (
    <View style={styles.main}>
      <MainNav />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    
  },
});
