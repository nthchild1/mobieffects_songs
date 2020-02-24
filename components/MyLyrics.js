import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {readFromAsyncStorage} from '../utils/asyncStorageTools';

const MyLyrics = props => {
  const [myLyrics, setMyLyrics] = useState([]);

  useEffect(() => {
    const getMyLyrics = async () => setMyLyrics(await readFromAsyncStorage());

    getMyLyrics();
  }, []);

  function Item({title, artist, lyrics}) {
    return (
      <View style={styles.item}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate('Letra', {
              lyrics,
              artist,
              title,
            });
          }}>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <FlatList
      data={myLyrics}
      renderItem={({item}) => (
        <Item title={item.title} artist={item.artist} lyrics={item.lyrics} />
      )}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '20',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default MyLyrics;
