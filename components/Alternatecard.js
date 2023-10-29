import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function AlternateCard({newSong, isEven, imageUrl}) {
  const cardStyle = isEven ? styles.squareContainer : styles.circleContainer;
  // console.log(dynamicAssetPath);
  return (
    <View style={cardStyle}>
      <View style={styles.card}>
        <Image
          style={styles.cardItem}
          resizeMode="cover"
          source={{uri: imageUrl}}
          // source={{uri:"https://cdns-images.dzcdn.net/images/cover/948200588c813c1afd10f29b56e0ce50/264x264.jpg"}}
        />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{newSong}</Text>
      </View>
    </View>
  );
}

export default AlternateCard;

const styles = StyleSheet.create({
  squareContainer: {
    width: 127,
    height: 127,
    marginRight: 24,
    borderRadius: 17,
    overflow: 'hidden',
  },
  circleContainer: {
    width: 127,
    height: 127,
    borderRadius: 63.5,
    backgroundColor: 'red',
    marginRight: 24,
    overflow: 'hidden',
  },
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 17,
  },
  cardItem: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  song: {
    fontSize: 14,
    color: 'white',
    letterSpacing: 1.4,
    fontWeight: '500',
  },
  year: {
    fontSize: 10,
    color: 'white',
  },
  nameContainer: {
    marginTop: 7,
  },
  name: {
    color: 'white',
    fontSize: 10,
    letterSpacing: 1.4,
    textTransform: 'uppercase',
    letterSpacing: 2.4,
  },
});
