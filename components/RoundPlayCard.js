import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import ProfileImage from './ProfileImage';

function RoundPlaycard({name, info}) {
//   console.log(name);
  return (
    <View style={styles.rootContainer}>
      <View style={styles.card}>
        <View style={styles.cardItem}>
          <ProfileImage
            imageUrl={'../assets/images/kendrick.png'}
            imgStyles={styles.imgStyles}
          />
        </View>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  );
}

export default RoundPlaycard;
const styles = StyleSheet.create({
  rootContainer: {
    width: 118,
    height: 140,
    alignItems: 'center',
    marginRight: 11,
    // backgroundColor: 'pink',

  },
  card: {
    width: 118,
    height: 118,
    // backgroundColor: 'lightyellow',
  },
  cardItem: {
    width: 118,
    height: 118,
 
    width: '100%',
    height: '100%',
    // height: 118,
    justifyContent: 'center',
    alignItems: 'center',

  },
  imgStyles: {
    width: 118,
    height: 118,
    borderRadius: 59,
  },

  nameContainer: {
    marginTop: 7,
    // backgroundColor: 'green',
    justifyContent: 'flex-end',
  },
  name: {
    color: 'white',
    fontSize: 10,
    letterSpacing: 1.4,
    textTransform: 'uppercase',
    letterSpacing: 2.4,

  },
});
