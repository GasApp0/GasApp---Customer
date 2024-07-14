import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import SplashScreen from '../Screens/SplashScreen';
import Onboarding from '../Screens/Onboarding';
import GeneralDetails from '../Screens/GeneralDetails';
import SelectHostel from '../Screens/SelectHostel';
import Home from '../Screens/Home';
import SelectCylinder from '../Screens/SelectCylinder';
import ConfirmLocation from '../Screens/ConfirmLocation';
import Amount from '../Screens/Amount';
import Payment from '../Screens/Payment';
import SignIn from '../Screens/SignIn';
import Tracker from '../Screens/Tracker';
import { FIREBASE_AUTH } from './../../firebaseConfig'; // Import auth from Firebase config
import { onAuthStateChanged } from 'firebase/auth';

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function Insidelayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <InsideStack.Screen name="SelectCylinder" component={SelectCylinder} options={{ headerShown: false }} />
      <InsideStack.Screen name="ConfirmLocation" component={ConfirmLocation} options={{ headerShown: false }} />
      <InsideStack.Screen name="Amount" component={Amount} options={{ headerShown: false }} />
      <InsideStack.Screen name="Payment" component={Payment} options={{ headerShown: false }} />
      <InsideStack.Screen name="Tracker" component={Tracker} options={{ headerShown: false }} />
    </InsideStack.Navigator>
  );
}

export default function MainNav() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (authUser) => {
      setUser(authUser);
    });
    return unsubscribe;
  }, []);

  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      {user ? (
        <Stack.Screen name="Insidelayout" component={Insidelayout} options={{ headerShown: false }} />
      ) : (
        <>
          <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
          <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
          <Stack.Screen name="GeneralDetails" component={GeneralDetails} options={{ headerShown: false }} />
          <Stack.Screen name="SelectHostel" component={SelectHostel} options={{ headerShown: false }} />
        </>
      )}
    </Stack.Navigator>
  );
}
