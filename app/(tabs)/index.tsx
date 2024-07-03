import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import SplashScreen from '../Screens/SplashScreen';
import Onboarding from '../Screens/Onboarding';
import GeneralDetails from '../Screens/GeneralDetails';
import SelectHostel from '../Screens/SelectHostel';
import Home from '../Screens/Home';
import SelectCylinder from '../Screens/SelectCylinder';

export default function HomeScreen() {
  return (
    <View style={styles.main}>
      <SelectCylinder />
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
