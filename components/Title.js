import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Title = ({children, exceptText}) => {
  return <Text style={[styles.text, exceptText]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: '#FFFFFF',
    textAlign: 'left',
    fontSize: 15,
    fontFamily: 'Poppins',
    letterSpacing: 0.7,
    opacity: 1,
    marginVertical: 10,
  },
});

export default Title;
