import React, {useState} from 'react';
import {View, TextInput} from 'react-native';

const Home = props => {
  const [artist, setArtist] = useState('Artista');
  const [title, setTitle] = useState('Título');

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
        onChangeText={text => setArtist(text)}
      />
    </View>
  );
};

export default Home;
