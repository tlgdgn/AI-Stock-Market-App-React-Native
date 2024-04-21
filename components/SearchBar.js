// SearchBar.js

import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ placeholder, onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginVertical: 10,
  },
  input: {
    height: 40,
  },
});

export default SearchBar;
