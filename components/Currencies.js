import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Currencies = ({ company, bidPrice, dailyChange, dailyChangeColor}) => (
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
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stockSymbol: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  stockPrice: {
    fontSize: 30,
    color: 'white',
  },
  dailyChangeColor: {
    fontSize: 16,
    color: 'white',
  },
});


export default Currencies;