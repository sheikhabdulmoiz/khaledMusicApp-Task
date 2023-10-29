import {View, Text, StyleSheet, ImageBackground} from 'react-native';

function PlayCard({title, info}) {
  return (
    <View style={styles.cardItem}>
      <ImageBackground
        style={{flex: 1}}
        imageStyle={styles.image}
        resizeMode="cover"
        source={require('../assets/images/highSize.png')}>
        <View style={styles.infoContainer}>
          <View>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={{marginBottom:16}}>
            <Text style={styles.info}>{info}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

{
  /* <Text>{title}</Text>
<Text>{info}</Text> */
}
{
  /* <Image source={{uri:imageUrl}}/> */
}
export default PlayCard;
const styles = StyleSheet.create({
  cardItem: {
    width: 145,
    height: 162,
    // backgroundColor: 'red',
    borderRadius: 17,
    // marginRight: 16,
    overflow: 'hidden',
  },
  //   image: {
  //     width: '100%',
  //     height: '100%',
  //   },
 
  infoContainer: {
    flex: 1,
    // backgroundColor: 'green',
    borderRadius: 17,
    // opacity: 0.3,
    paddingHorizontal: 24,
    justifyContent: 'flex-end',
  },
  title: {
    color: 'white',
    fontSize:14,
    letterSpacing:1.4,
    textTransform:"uppercase"
  },
  info:{
    fontSize:12,
    color: 'white',
    

  }
});
