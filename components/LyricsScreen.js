import React from 'react';
import {Text, ScrollView, Button} from 'react-native';
import {saveToAsyncStorage} from '../utils/asyncStorageTools';

const LyricsScreen = props => {
  const {lyrics, artist, title} = props.route.params;

  return (
    <>
      <ScrollView>
        <Text> {lyrics} </Text>
      </ScrollView>
      <Button
        title={'Añadir a Mis letras'}
        onPress={() => {
          saveToAsyncStorage({
            title,
            artist,
            lyrics,
          });
        }}
      />
    </>
  );
};

export default LyricsScreen;
