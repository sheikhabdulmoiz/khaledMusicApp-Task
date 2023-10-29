import React, {Children, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HeadTitle = ({children,caseChnage}) => {
  console.log(caseChnage);
  return (
    <View style={styles.container}>
      <Text style={[styles.text, caseChnage]}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 21,
    fontFamily: 'poppins',
    letterSpacing: 3.6,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default HeadTitle;
