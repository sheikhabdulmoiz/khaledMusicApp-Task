import React, {useState} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import Title from './Title';
import CustomTextInput from './TextInput';

function TitleInputSet({title, secureTextEntry, placeholder, icon, type, icon2}) {
  return (
    <View>
      <Title>{title}</Title>
      <CustomTextInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        icon={icon}
        type={type}
        icon2={icon2}
      />
    </View>
  );
}
export default TitleInputSet;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  imageBackground: {
    width: '100%',
    height: 232,
  },
});
