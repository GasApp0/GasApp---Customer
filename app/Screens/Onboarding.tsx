import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook from react-navigation
import PrimaryButton from '@/components/PrimaryButton';


export default function Onboarding() {

  const navigation = useNavigation(); // Initialize navigation hook


  return (
    <View style={styles.main}>
        <View style={styles.main}>
            <PrimaryButton title='Get Started' onPress={() => navigation.navigate('GeneralDetails')}/>
            <View style={styles.text}>
                <Text style={{
                    fontSize : 16,
                    color : '#828282'
                }}>Already have an Account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text style={{
                    fontSize : 16,
                }}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    position : 'static',
    top : '74%',
    justifyContent : 'center',
    gap : 12,
    paddingHorizontal : 12
  },
  text : {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'center',
    gap : 4
  }
});
