import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Stocks = ({ company, bidPrice, dailyChange, dailyChangeColor}) => (
  <View style={styles.stockItem}>
    <Text style={styles.stockSymbol}>{company}</Text>
    <Text style={styles.stockPrice}>{bidPrice}</Text>
    <Text style={{ color: dailyChangeColor }}>{dailyChange}</Text>
  </View>
);

const styles = StyleSheet.create({
  stockItem: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingVertical: 8,
  },
  stockSymbol: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  stockPrice: {
    fontSize: 16,
    color: 'white',
  },
  dailyChangeColor: {
    fontSize: 16,
    color: 'white',
  },
});


export default Stocks;
