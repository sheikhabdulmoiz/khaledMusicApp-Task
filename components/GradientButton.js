import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
function GradientButton({children, styleExcel, onPress}) {
  // console.log(styleExcel);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, {height: styleExcel?.height}]}>
        <LinearGradient
          colors={['#F46D1F', '#9250A6']}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}} 
          style={[styles.gradient, {borderRadius: styleExcel?.borderRadius}]}>
          <View>
            <Text
              style={[
                styles.text,
                {
                  textTransform: styleExcel?.textTransform,
                  fontSize: styleExcel?.fontSize,
                },
              ]}>
              {children}
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // marginVertical: 20,/////this is doubtfull
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  button: {
    width: '100%',
    height: 56,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins',
    fontWeight: '700',
    letterSpacing: 1,
  },
});

export default GradientButton;
