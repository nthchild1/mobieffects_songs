import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';

export const readFromAsyncStorage = async () => {
  try {
    const value = await AsyncStorage.getItem('@myLyrics');
    if (value) {
      return await JSON.parse(value);
    } else {
      return [];
    }
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const saveToAsyncStorage = async lyricsObj => {
  const asyncStorageLyrics = await readFromAsyncStorage();
  // The lyric fetched are already stored.

  if (
    !asyncStorageLyrics.some(
      myLyric =>
        myLyric.title === lyricsObj.title &&
        myLyric.artist === lyricsObj.artist,
    )
  ) {
    console.log('Saving lyrics');
    try {
      const lyricsCollection = [...asyncStorageLyrics, lyricsObj];
      await AsyncStorage.setItem(
        '@myLyrics',
        `${JSON.stringify(lyricsCollection)}`,
      );
      Alert.alert('Guardado', 'Se ha guardado la letra en Mis Letras', [
        {
          text: 'OK',
          style: 'cancel',
        },
      ]);
    } catch (e) {
      Alert.alert(
        'Error al guardar',
        'No se pudo guardar esta canción en Tus letras. Inténtalo de nuevo más tarde.',
        [
          {
            text: 'OK',
            style: 'cancel',
          },
        ],
      );
    }
  } else {
    console.log('Lyrics already saved');
    Alert.alert('', 'La letra ya está guardada', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  }
};
