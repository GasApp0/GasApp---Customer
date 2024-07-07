import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SecondaryButton = ({ onPress, title, selected, width }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        selected && styles.selectedButton,
        { width } // Apply the width prop
      ]}
    >
      <Text style={[
        styles.buttonText,
        selected && styles.selectedButtonText
      ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.10)',
    backgroundColor: '#F4F4F4',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: '600',
    fontSize : 16
  },
  selectedButton: {
    borderColor: '#52B922',
    backgroundColor: '#E6F8E0',
  },
  selectedButtonText: {
    color: '#52B922',
  },
});

export default SecondaryButton;
