import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import friendData from './data';

const App = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    setFriends(friendData);
  }, []);

  const list = friends.map(friend => {
    return (
      <View key={friend.id} style={styles.listItem}>
        <Text style={styles.itemText}>{friend.name}</Text>
        <View style={styles.separator}></View>
      </View>
    );
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Text style={styles.text}>Hello React</Text>
      <ScrollView>
        {list}
      </ScrollView>
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
