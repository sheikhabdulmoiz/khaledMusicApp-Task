import {ImageBackground, View, Text, StyleSheet, Image} from 'react-native';
function Featured() {
  return (
    <View style={styles.bgImgContainer}>
      <Image
        source={require('../assets/images/landscape2.png')}
        // resizeMode="contain"
        // style={{flex: 1}}
        style={styles.imageBackground}></Image>
      <View style={styles.imgText}>
        <Text style={styles.text}>CHECK IT OUT</Text>
      </View>
    </View>
  );
}
export default Featured;
const styles = StyleSheet.create({
  bgImgContainer: {flex: 1},
  imageBackground: {
    width: '100%',
    height: 157,
    position: 'relative',
  },
  imgText: {
    borderRadius: 200,
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 6,
    bottom: 16,
    left: 24,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'normal',
  },
});


