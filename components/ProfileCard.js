import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';

function ProfileCard({song, year}) {
  //   console.log(song);
  return (
    <View style={styles.rootContainer}>
      <View style={styles.card}>
        <Image
          style={styles.cardItem}
          resizeMode="contain"
          source={require('../assets/images/kendrick.png')}
        />
      </View>
      <View>
        <Text style={styles.song}>{song}</Text>
        <Text style={styles.year}>{year}</Text>
      </View>
    </View>
  );
}

export default ProfileCard;
const styles = StyleSheet.create({
  rootContainer: {
    width: 127,
    height: 127 + 34,
    marginRight: 11,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    overflow: 'hidden',
  },
  card: {
    width: 127,
    height: 127,
    backgroundColor: 'white',
    borderRadius: 17,
  },
  cardItem: {
    width: 118,
    height: 118,

    width: '100%',
    height: '100%',
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
    justifyContent: 'flex-end',
  },
  name: {
    color: 'white',
    fontSize: 10,
    letterSpacing: 1.4,
    textTransform: 'uppercase',
    letterSpacing: 2.4,
  },
  song: {
    fontSize: 14,
    color: 'white',
    letterSpacing:1.4,
    fontWeight:"500"
  },
  year: {
    fontSize: 10,
    color: 'white',
},
});
