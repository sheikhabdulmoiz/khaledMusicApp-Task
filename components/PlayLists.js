import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import PlayCard from './PlayCard';
import RoundPlaycard from './RoundPlayCard';
import ProfileCard from './ProfileCard';
const {default: AlternateCard} = require('./Alternatecard');
const playlist = [
  {
    id: 1,
    title: 'Dark',
    info: 'created Dec 2019',
    imageUrl: '../assets/images/cdim1.png',
  },
  {id: 2, title: 'My Mix', info: 'created Dec 2020'},
  {id: 3, title: 'Lamar', info: 'created Dec 2021'},
  {id: 4, title: 'New Time', info: 'created Dec 2022'},
];

const Recentlist = [
  {id: 2, name: 'The weekend'},
  {id: 3, name: 'Kendrick lamar'},
  {id: 4, name: 'Eminim'},
  {id: 9, name: 'Kendrick lamar'},
  {id: 54, name: 'Eminim'},
];
function Playlist({lisType}) {
  let dataToRender = playlist;

  if (lisType === 'rounded') {
    dataToRender = Recentlist;
  } else if (lisType === 'profilelist') {
    dataToRender = [
      {id: 2, song: 'FOLKLORE', year: '2020', imageUrl: 'new.jpg'},
      {id: 3, song: 'ROCKSTAR', year: '2020', imageUrl: 'new.jpg'},
      {id: 9, song: 'AFTER HOURS', year: '2020', imageUrl: 'new.jpg'},
      {id: 54, song: 'Let me down', year: '2020', imageUrl: 'new.jpg'},
    ];
  } else if (lisType === 'alternatecard') {
    dataToRender = [
      {
        id: 1,
        newSong: 'Music to be..',
        imageUrl:
          'https://cdns-images.dzcdn.net/images/cover/948200588c813c1afd10f29b56e0ce50/264x264.jpg',
      },
      {
        id: 5,
        newSong: 'mccartney',
        imageUrl:
          'https://i.aaj.tv/english/wp-content/uploads/2017/08/Find-out-these-unknown-facts-about-famous-singer-Shakira-here.png',
      },
      {
        id: 4,
        newSong: 'Evermore',
        imageUrl:
          'https://img.freepik.com/free-photo/passionate-black-male-singer-performing-against-red_1258-26348.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698364800&semt=ais',
      },
      {
        id: 2,
        newSong: 'Evermore',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXeRMlL_4FP-KM73M3SxQwrJFjN1_B96ThknIbRSL-&s',
      },
      {
        id: 3,
        newSong: 'mccartney',
        imageUrl:
          'https://cdns-images.dzcdn.net/images/cover/948200588c813c1afd10f29b56e0ce50/264x264.jpg',
      },
    ];
  }

  return (
    <View style={styles.list}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={dataToRender}
        renderItem={itemData => {
          if (lisType === 'rounded') {
            return (
              <RoundPlaycard
                name={itemData.item.name}
                imageUrl={itemData.item.imageUrl}
              />
            );
          } else if (lisType === 'profilelist') {
            return (
              <ProfileCard
                song={itemData.item.song}
                year={itemData.item.year}
                imageUrl={itemData.item.imageUrl}
                isEven={itemData.index % 2 === 0}
              />
            );
          } else if (lisType === 'alternatecard') {
            return (
              <AlternateCard
                newSong={itemData.item.newSong}
                imageUrl={itemData.item.imageUrl}
                isEven={itemData.index % 2 === 0}
              />
            );
          } else {
            return (
              <PlayCard
                title={itemData.item.title}
                info={itemData.item.info}
                imageUrl={itemData.item.imageUrl}
              />
            );
          }
        }}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}
export default Playlist;

const styles = StyleSheet.create({
  list: {},
});
