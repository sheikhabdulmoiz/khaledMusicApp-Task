import React, {Children, useState} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

function ImgBackground({children}) {
  return (
    <ImageBackground
      style={styles.rootScreen}
      source={require('../assets/images/pattern.png')}
      resizeMode="cover"
      imageStyle={styles.imageBackground}>
      {children}
    </ImageBackground>
  );
}
export default ImgBackground;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  imageBackground: {
    width: '100%',
    height: 232,
  },
});
