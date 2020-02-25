import React from 'react';
import {Text, ScrollView, View, Button, TouchableOpacity} from 'react-native';
import {saveToAsyncStorage} from '../utils/asyncStorageTools';
import Screens from '../styles/Screens';
import Typo from '../styles/Typo';
import Colors from '../styles/Colors';
import Buttons from '../styles/Buttons';

const LyricsScreen = props => {
  const {lyrics, artist, title} = props.route.params;

  return (
    <View style={[Screens.default, Screens.LyricsScreen]}>
      <ScrollView>
        <Text style={[Typo.altBold, Typo.medium]}>{lyrics}</Text>
      </ScrollView>
      <View style={(Buttons.regular, Buttons.myLyrics)}>
        <TouchableOpacity
          onPress={() => {
            saveToAsyncStorage({
              title,
              artist,
              lyrics,
            });
          }}>
          <Text
            style={[
              Typo.altBold,
              Typo.small,
              Typo.centerP,
              {color: 'white'},
            ]}>
            Añadir a Mis Letras
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LyricsScreen;
