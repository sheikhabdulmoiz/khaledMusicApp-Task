import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function ProfileImage({imgStyles}) {
  (imgStyles);
  return (
    <View style={[styles.imageContainer, imgStyles]}>
      <Image
        style={[styles.image]}
        resizeMode="contain"
        source={require('../assets/images/profile1.png')}
        // source={require('../assets/images/kendrick2x.png')}
      />
    </View>
  );
}
export default ProfileImage;

const styles = StyleSheet.create({
  imageContainer: {
    overflow: 'hidden',
    borderColor: 'green',
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
});

