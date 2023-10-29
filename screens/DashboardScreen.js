import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import HeadTitle from '../components/HeadTitle';
import Playlist from '../components/PlayLists';
import GradientButton from '../components/GradientButton';
import RoundedTextInput from '../components/RoundedTextInput';
import DetailCard from '../components/DetailCard';
import Featured from '../components/Featured';

function DashboardScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.head}>
            <View style={styles.greetContainer}>
              <Text style={styles.greetText}>
                Good Morning <Text style={styles.userName}>rabecca!</Text>
              </Text>
            </View>
            <View style={styles.smImagesContainer}>
              <View style={styles.searchContainer}>
                <Image
                  style={styles.searchImage}
                  source={require('../assets/images/search.png')}
                />
              </View>
              <View style={styles.hamburgerContainer}>
                <Image
                  style={styles.hamburgerImage}
                  source={require('../assets/images/hamburger.png')}
                />
              </View>
            </View>
          </View>
          <View>
            <HeadTitle>My Playlists</HeadTitle>
            <Playlist />
            <View style={styles.btnContainer}>
              <View style={{flex: 1, marginRight: 10}}>
                <GradientButton styleExcel={styles.exploreBtn}>
                  Explore
                </GradientButton>
              </View>
              <View style={{flex: 1.5}}>
                <RoundedTextInput />
              </View>
            </View>
            <HeadTitle>Recently Palyed</HeadTitle>
            <Playlist lisType={'rounded'} />
            <HeadTitle caseChnage={styles.case}>2021 wrapped</HeadTitle>
          </View>

          <DetailCard />
          <HeadTitle>Popular</HeadTitle>
          <Playlist lisType={'profilelist'} />
          <HeadTitle>Featured</HeadTitle>
          <Featured />
          <HeadTitle>New Releases</HeadTitle>
          <Playlist lisType={'alternatecard'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E272E',
    paddingHorizontal: 12,
    paddingBottom: 18,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  greetContainer: {
    // backgroundColor: 'red',
    flex: 1,
  },
  greetText: {
    textTransform: 'uppercase',
    color: 'white',
    fontSize: 16,
    letterSpacing: 1.8,

    fontWeight: '600',
  },
  userName: {
    textTransform: 'capitalize',
  },
  smImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'red',
    padding: 4,
    // backgroundColor:"lightyellow"
  },
  searchContainer: {
    width: 33,
    height: 33,
    borderRadius: 15,
    marginRight: 10,
  },
  searchImage: {
    width: '100%',
    height: '100%',
  },

  hamburgerContainer: {
    width: 33,
    height: 33,
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 5,
    marginLeft: 10,
  },
  hamburgerImage: {
    width: '100%',
    height: '100%',
  },
  exploreBtn: {
    borderRadius: 200,
    textTransform: 'uppercase',
    height: 35,
    fontSize: 12,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:"green",
    marginTop: 10,
  },
  case: {
    textTransform: 'lowercase',
  },
  bgImgContainer: {flex: 1},
  imageBackground: {
    width: '100%',
    height: 157,
  },
});
