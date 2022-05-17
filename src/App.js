import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, StatusBar, StyleSheet, Text, View} from 'react-native';
import friendData from './data';

const App = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    setFriends(friendData);
  }, []);


  // Type = ListRenderItem
  const renderItem = ({item}) => {
    return (
      <View style={styles.listItem}>
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Text style={styles.text}>Hello React</Text>
      <FlatList
        data={friends}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  listItem: {
    padding: 18,
    backgroundColor: '#888'
  },
  separator: {
    height: 2,
    backgroundColor: '#EEE',
  },
  text: {fontSize: 24, fontWeight: '600', color: '#555'},
  itemText: {fontSize: 24, fontWeight: '500', color: '#EEE'},
});

export default App;
