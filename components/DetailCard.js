import { View, StyleSheet, Text, Image, DevSettings } from 'react-native';

function DetailCard({ imgSource, head, description }) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/group.png')} />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.headContainer}>
          <Text style={styles.head}>SEE WHO YOU LISTENED TO IN 2020</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>Your top artists and songs of the year and more..</Text>
        </View>
      </View>
    </View>
  );
}

export default DetailCard;

const styles = StyleSheet.create({
  cardContainer: {
    overflow: 'hidden',
    height: 146,
    borderRadius: 17,
    width: '100%',
    backgroundColor: '#414348',
    // marginBottom: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    marginRight: 7,
    marginLeft: 5,
  },
  detailsContainer: {
    flex: 1,
    marginVertical:6
  },
  head: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'poppins',
    fontWeight: 'bold',
  },
  description: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'poppins',
  },
  headContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

