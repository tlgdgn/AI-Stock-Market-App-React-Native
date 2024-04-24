import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ForexScreen = () => {
  const currencyData = [
    { name: 'USD/TRY', price: 32.49, change: -0.17 },
    { name: 'EUR/TRY', price: 34.75, change: -0.34 },
    { name: 'BTC/USD', price: 66415.26, change: +0.09 },
    { name: 'GOLD/TRY', price: 2421.56, change: -0.36 },
    { name: 'BIST100/TRY', price: 9681.81, change: +0.38 },

  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Currencies</Text>
      <View style={styles.currencyList}>
        {currencyData.map((currency, index) => (
          <View key={index} style={styles.currencyBox}>
            <Text style={styles.currencyName}>{currency.name}</Text>
            <Text style={styles.currencyPrice}>{currency.price.toFixed(4)}</Text>
            <Text style={styles.currencyChange(currency.change)}>
              {currency.change >= 0 ? '+' : ''}{currency.change.toFixed(4)}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:24,
    padding: 20,
  },
  currencyList: {
    flex: 1,
    paddingHorizontal: 10,
  },
  currencyBox: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  currencyName: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  currencyPrice: {
    fontSize: 16,
    color: 'white',
  },
  currencyChange: (change) => ({
    fontSize: 16,
    color: change >= 0 ? 'green' : 'red',
  }),
});

export default ForexScreen;
