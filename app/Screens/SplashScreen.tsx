// App.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default function SplashScreen() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        // Load any resources or data that you need prior to rendering the app
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);



  return (
    <View style={styles.container}>
      <Text style={{
        fontWeight : '700',
        fontSize : 40
      }}>Gas</Text>
        <Text style={{
        fontWeight : '700',
        fontSize : 40,
        color : 'rgba(0, 0, 0, 0.50)'
      }}>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection : 'row'
  },
});
