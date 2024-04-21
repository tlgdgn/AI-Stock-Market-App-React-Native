import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        {/* You can add your search bar component here */}
        {/* For now, let's just display some placeholder text */}
        <Text style={styles.searchText}>Search Bar</Text>
      </View>

      {/* Available Stocks */}
      <View style={styles.availableStocks}>
        <Text style={styles.availableStocksText}>Available Stocks</Text>
      </View>

      {/* Bottom Menu */}
      <View style={styles.bottomMenu}>
        {/* Home Page */}
        <View style={styles.menuItem}>
          <Text style={styles.menuIcon}>🏠</Text>
          <Text style={styles.menuText}>Home</Text>
        </View>

        {/* Watchlist Page */}
        <View style={styles.menuItem}>
          <Text style={styles.menuIcon}>⭐</Text>
          <Text style={styles.menuText}>Watchlist</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 16,
  },
  searchBar: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  searchText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  availableStocks: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  availableStocksText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'black',
    paddingVertical: 12,
  },
  menuItem: {
    flex: 1,
    alignItems: 'center',
  },
  menuText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
