import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WatchlistScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your Watchlist</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default WatchlistScreen;
