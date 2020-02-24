import React, {useState, useEffect} from 'react';
import {View, Button, TextInput, Alert, ActivityIndicator} from 'react-native';
import {useDataApi} from '../hooks/useDataApi';

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
    <View>
      <TextInput
        value={artist}
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => setArtist(text)}
      />
      <TextInput
        value={title}
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => setTitle(text)}
      />
      <Button title={'Buscar'} onPress={() => handleSearch()} />
      <Button
        title={'Mis Letras'}
        onPress={() => props.navigation.navigate('Mis Letras')}
      />
      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
    </View>
  );
};

export default Home;
