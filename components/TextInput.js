import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const CustomTextInput = ({placeholder, secureTextEntry, icon, type, icon2}) => {
  console.log(icon2);
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {type === 'ionicons' ? (
          <Ionicons name={icon} size={20} color="#FFFFFF" style={styles.icon} />
        ) : type === 'fontisto' ? (
          <Fontisto name={icon} size={20} color="#FFFFFF" style={styles.icon} />
        ) : type === 'evilicon' ? (
          <EvilIcons
            name={icon}
            size={24}
            color="#FFFFFF"
            style={styles.icon}
          />
        ) : (
          <Feather name={icon} size={20} color="#FFFFFF" style={styles.icon} />
        )}
      </View>
      <TextInput
        style={{color:"white", fontSize:16}}
        placeholder={placeholder}
        placeholderTextColor="#FFFFFF"
        secureTextEntry={secureTextEntry}
      
      />

      <View style={[styles.iconContainer, {alignItems: 'flex-end', flex:1, marginRight:16}]}>
        {icon2 ? (
          <Feather name={icon2} size={18} color="gray" style={styles.icon} />
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#50575C',
    borderRadius: 5,
    opacity: 1,
    flexDirection: 'row',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
  },

  input: {
    flex: 1,
    color: '#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
});

export default CustomTextInput;
