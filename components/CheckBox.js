import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CheckBox from 'react-native-check-box';

const ChcBox = ({}) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <CheckBox value={isChecked} onValueChange={setChecked} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ChcBox;
