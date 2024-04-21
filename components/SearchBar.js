import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Image } from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <Image
        source={require('./searchicon.png')} // Replace with your actual icon
        style={{ width: 24, height: 24 }} // Adjust size as needed
        resizeMode="contain"
      />
      <TextInput
        placeholder="Search stocks..." // Corrected prop name
        placeholderTextColor="#ababab"
        style={styles.input}
        onChangeText={(text) => {
          // Handle text input changes here
          console.log('User typed:', text);
          // You can perform any other actions based on the input
        }}
        onSubmitEditing={() => {
          // Handle submission when the user presses Enter or submits the form
          console.log('Search submitted');
          // You can trigger a search or other relevant actions here
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row', // Arrange icon and input horizontally
    alignItems: 'center',
    backgroundColor: '#333', // Dark gray background color
    paddingVertical: 16, // Increase vertical padding for a thicker appearance
    paddingHorizontal: 16, // Add horizontal padding for spacing
    borderRadius: 2, // Rounded corners
    marginTop: 20,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10 // Adjust spacing between icon and input
  },
  input: {
    flex:1,
    fontSize: 16, // Adjust font size as needed
    color: '#ababab', // Text color (white)
    marginLeft: 10,
  },
});

export default SearchBar;
