import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import PrimaryButton from '@/components/PrimaryButton';
import BackButton from '@/components/BackButton';


export default function GeneralDetails() {
  return (
    <View style={styles.main}>
        <View style={styles.header}>
            <BackButton/>
            <Text style={{
                fontSize : 20,
                fontWeight : 700
            }}>General Details</Text>
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    justifyContent : 'center',
  },
  header : {
    marginVertical : 16
  }
 
});
