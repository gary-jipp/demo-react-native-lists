import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, StatusBar, StyleSheet, Text, View} from 'react-native';
import friendData from './data';

const App = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    // setFriends(friendData);
  }, []);


  // Type = ListRenderItem
  const renderItem = ({item}) => {
    return (
      <View style={styles.listItem}>
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
    );
  };

  // Component used as list separator
  const ItemSeparator = () => {
    return <View style={styles.separator} />;
  };

  const EmptyListComponent = () => {
    return (
      <View style={styles.listItem}>
        <Text style={styles.itemText}>No data found</Text>
      </View>
    );
  };

  const ListHeaderComponent = () => {
    return <Text style={styles.header}>List of Friends</Text>;
  };

  const ListFooterComponent = () => {
    return <Text style={styles.footer}>That's all Folks</Text>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Text style={styles.text}>Hello React</Text>
      <FlatList
        data={friends}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={ItemSeparator}
        ListEmptyComponent={EmptyListComponent}
        ListFooterComponent={ListFooterComponent}
        ListHeaderComponent={ListHeaderComponent}
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  text: {fontSize: 24, fontWeight: '600', color: '#555'},
  listItem: {
    padding: 18,
    backgroundColor: '#888'
  },
  separator: {
    height: 2,
    backgroundColor: '#EEE',
  },
  itemText: {fontSize: 24, fontWeight: '500', color: '#EEE'},
  header: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  },
  footer: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
});

export default App;
