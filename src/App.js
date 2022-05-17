import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Text style={styles.text}>Hello React</Text>
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
