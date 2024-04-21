import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import SearchBar from './SearchBar';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <SearchBar />
        <Text style={styles.header}>Available Stocks</Text>

      <ScrollView contentContainerStyle={styles.stockList}>
        {/* Sample temporary stock items */}
        <StockItem symbol="AKBNK" name="Akbank T.A.Ş." price="₺62.50" />
        <StockItem symbol="ALARK" name="Alarko Holding A.Ş." price="₺119.20" />
        <StockItem symbol="ASELS" name="Aselsan Elektronik Sanayi ve Ticaret A.Ş." price="₺58.70" />
        <StockItem symbol="ASTOR" name="Astor Enerji A.Ş." price="₺95.00" />
        <StockItem symbol="BIMAS" name="BİM Birleşik Mağazalar A.Ş." price="₺371.50" />
        <StockItem symbol="BRSAN" name="Borusan Mannesmann Boru Sanayi ve Ticaret A.S" price="₺598.50" />
        <StockItem symbol="EKGYO" name="Emlak Konut Gayrimenkul Yatırım Ortaklığı A.Ş." price="₺8.96" />
        <StockItem symbol="ENKAI" name="Enka İnşaat ve Sanayi A.Ş." price="₺35.60" />
        <StockItem symbol="EREGL" name="Ereğli Demir Çelik Fabrikaları T.A.Ş." price="₺41.22" />
        <StockItem symbol="FROTO" name="Ford Otomotiv Sanayi A.Ş." price="₺1120.00" />
        <StockItem symbol="GARAN" name="Türkiye Garanti Bankası A.Ş." price="₺78.70" />
        <StockItem symbol="GUBRF" name="Gübre Fabrikaları T.A.Ş." price="₺154.20" />
        <StockItem symbol="HEKTS" name="Hektaş Ticaret T.A.Ş." price="₺15.37" />
        <StockItem symbol="ISCTR" name="Türkiye İş Bankası A.Ş. (C)" price="₺12.86" />
      </ScrollView>
    </View>
  );
};

const StockItem = ({ symbol, name, price }) => (
  <View style={styles.stockItem}>
    <Text style={styles.stockSymbol}>{symbol}</Text>
    <Text style={styles.stockName}>{name}</Text>
    <Text style={styles.stockPrice}>{price}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
  },
  stockList: {
    paddingBottom: 16,
  },
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
  stockName: {
    fontSize: 16,
    color: 'white',
  },
  stockPrice: {
    fontSize: 16,
    color: 'white',
  },
});

export default HomeScreen;
