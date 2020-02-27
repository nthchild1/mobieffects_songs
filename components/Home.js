import React, {useState, useEffect} from 'react';
import {
  View,
  Button,
  TextInput,
  Alert,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useDataApi} from '../hooks/useDataApi';
import Screens from '../styles/Screens';
import Forms from '../styles/Forms';
import Buttons from '../styles/Buttons';
import Typo from '../styles/Typo';
import Colors from '../styles/Colors';

/**
 *
 * Main component mounted on app startup. Handles user input and fire requests to the API accordingly.
 * @return {*}
 * @author @TKY2048
 */
const Home = props => {
  const {navigation} = props;

  const [artist, setArtist] = useState('Artista');
  const [title, setTitle] = useState('Título');
  const [{data, isLoading, isError}, setURL] = useDataApi(undefined, undefined);

  useEffect(() => {
    if (isError) {
      Alert.alert('Error', `No se encontró la canción ${title} de ${artist}`, [
        {text: 'OK'},
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError]);

  useEffect(() => {
    if (data) {
      navigation.navigate('Letra', {
        lyrics: data.lyrics,
        artist: artist,
        title: title,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleSearch = () => {
    //TODO: see if lyrics are already stored.
    if (artist !== '' && title !== '') {
      const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
      setURL(url);
    }
  };

  return (
    <View style={[Screens.default, Screens.HomeScreen]}>
      <TextInput
        value={artist}
        style={Forms.textInput}
        onChangeText={text => setArtist(text)}
      />
      <TextInput
        value={title}
        style={Forms.textInput}
        onChangeText={text => setTitle(text)}
      />
      <View style={(Buttons.regular, Buttons.search)}>
        <TouchableOpacity onPress={() => handleSearch()}>
          <Text
            style={[Typo.altBold, Typo.medium, Typo.centerP, {color: 'white'}]}>
            Buscar
          </Text>
        </TouchableOpacity>
      </View>

      <View style={(Buttons.regular, Buttons.myLyrics)}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Mis Letras')}>
          <Text
            style={[Typo.altBold, Typo.medium, Typo.centerP, {color: 'white'}]}>
            Mis Letras
          </Text>
        </TouchableOpacity>
      </View>
      {isLoading && (
        <ActivityIndicator
          style={{margin: 20}}
          size="large"
          color={Colors.pale}
        />
      )}
    </View>
  );
};

export default Home;
