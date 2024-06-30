import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import PrimaryButton from '@/components/PrimaryButton';


export default function Onboarding() {
  return (
    <View style={styles.main}>
        <View style={styles.main}>
            <PrimaryButton title='Get Started'/>
            <View style={styles.text}>
                <Text style={{
                    fontSize : 16,
                    color : '#828282'
                }}>Already have an Account?</Text>
                <Text style={{
                    fontSize : 16,
                }}>Sign In</Text>
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
    gap : 12
  },
  text : {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'center',
    gap : 4
  }
});
