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
      <View key={friend.id}>
        <Text>{friend.name}</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {fontSize: 24, fontWeight: '500'},
});

export default App;
