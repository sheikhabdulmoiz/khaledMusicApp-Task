import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function SimpleButton({ children, onPress, icon }) {
  const buttonText = children.text || '';
  const iconType = children.iconType || 'ios-arrow-forward';

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: '#b0acac' }}
      >
        <Ionicons name={icon} size={24} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default SimpleButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 16,
    margin: 4,
    marginVertical: 18,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: '#1E272E',
    elevation: 82,
    paddingHorizontal: 18,
    paddingVertical: 16,
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8, 
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.25,
  },
});
