import React from 'react';
import { View, Image, StyleSheet, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = () => {
  return (
    <LinearGradient
      colors={[ '#FF9800','#9250A6']}
      style={styles.container}
    >
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.image}
          resizeMode='contain'
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;
