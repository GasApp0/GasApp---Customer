import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import SplashScreen from '../Screens/SplashScreen';
import Onboarding from '../Screens/Onboarding';
import GeneralDetails from '../Screens/GeneralDetails';

export default function HomeScreen() {
  return (
    <View style={styles.main}>
      <GeneralDetails/>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
   flex : 1,
   paddingHorizontal: 16,
   backgroundColor : 'white',
   paddingTop : 24
  }
});
