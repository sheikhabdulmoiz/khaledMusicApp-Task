import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RoundedTextInput = ({icon1, icon2}) => {
  return (
    <View style={styles.container}>
      <Icon
        name={icon1 ? icon1 : 'search'}
        size={18}
        color="gray"
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        placeholder="Search your favorite song.."
        placeholderTextColor="white"
      />
      <Icon
        name={icon2 ? icon2 : 'microphone'}
        size={18}
        color="gray"
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    borderRadius: 50,
    paddingHorizontal: 10,
    backgroundColor: '#50575C',
    height: 35,
  },
  input: {
    flex: 1,
    fontSize: 12,
    color: 'white',
    fontFamily: 'Poppins',
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default RoundedTextInput;
