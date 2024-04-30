import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Image } from 'react-native';

const SearchBar = ({ onChangeText }) => {
  return (
    <View style={styles.searchBar}>
      <Image
        source={require('./searchicon.png')}
        style={{ width: 24, height: 24 }}
        resizeMode="contain"
      />
      <TextInput
        placeholder="Search stocks..."
        placeholderTextColor="#ababab"
        style={styles.input}
        onChangeText={onChangeText}
        onSubmitEditing={() => {
          console.log('Search submitted');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 2,
    marginTop: 34,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10
  },
  input: {
    flex:1,
    fontSize: 16,
    color: '#ababab',
    marginLeft: 10,
  },
});

export default SearchBar;
