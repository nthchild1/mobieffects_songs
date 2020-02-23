import React from 'react';
import {Text, ScrollView, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const LyricsScreen = props => {
  const {lyrics} = props.route.params;

  const useAsyncStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('@myLyrics');
      if (value) {
        return value;
      } else {
        return [];
      }
    } catch (e) {
      console.log(e);
      return [];
      // error reading value
    }
  };

  const myLyrics = useAsyncStorage();

  const storeData = async lyricsObj => {
        // The lyric fetched is already stored.
    if (
      !(await myLyrics).filter(
        myLyric =>
          myLyric.title === lyricsObj.title &&
          myLyric.artist === lyricsObj.artist,
      )
    ) {
      try {
        const lyricsCollection = [...myLyrics, lyricsObj];
        await AsyncStorage.setItem(
          '@myLyrics',
          `${JSON.stringify(lyricsCollection)}`,
        );
      } catch (e) {
        // saving error
      }
    } else {
    }
  };

  return (
    <>
      <ScrollView>
        <Text> {lyrics} </Text>
      </ScrollView>
      <Button title={'Añadir a Mis letras'} onPress={() => {
      
      }} />
    </>
  );
};

export default LyricsScreen;
