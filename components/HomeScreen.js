import React from 'react';
import { View, Text, Image, TextInput, ScrollView, StyleSheet, RefreshControl } from 'react-native';
import Stocks from './Stocks';

import axios from 'axios';
import { screensEnabled } from 'react-native-screens';

import SearchBar from './SearchBar';

const cheerio = require('cheerio');
const axiosapi = require('axios');

async function scrapeWebsite() {
    const NewStockData = [];

    try {
        const response = await axios.get('https://www.getmidas.com/canli-borsa/xu030-bist-30-hisseleri');
        const html = response.data;
        const $ = cheerio.load(html);

      for (let i = 1; i <= 30; i++) {
        const selectorName = `body > div.container-fluid.stocks-page.stock-based-page > div > div > div > div.row.my-3.m-0.stock-table-container > table > tbody > tr:nth-child(${i}) > td.val.first > a`;
        const scrapedTextName = $(selectorName).text().trim();

        const selectorBid = `body > div.container-fluid.stocks-page.stock-based-page > div > div > div > div.row.my-3.m-0.stock-table-container > table > tbody > tr:nth-child(${i}) > td:nth-child(2)`;
        const scrapedTextBid = $(selectorBid).text().trim()+"₺";

        const selectorChange = `body > div.container-fluid.stocks-page.stock-based-page > div > div > div > div.row.my-3.m-0.stock-table-container > table > tbody > tr:nth-child(${i}) > td.val.dailyChangePercent`;
        const scrapedTextChange = $(selectorChange).text().trim();

        console.log(`Sirket ${i}:`, scrapedTextName, 'Fiyat:', scrapedTextBid, 'Degisim:', scrapedTextChange);

        const stockInfo = {
          company: scrapedTextName,
          bidPrice: scrapedTextBid,
          dailyChange: scrapedTextChange,
        };
      
        NewStockData.push(stockInfo);
        }
        return NewStockData;
      //console.log('StockData:', stockData);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

const HomeScreen = () => {
  const [stockData, setStockData] = React.useState([]);
  const [searchText, setSearchText] = React.useState('');
  const [isRefreshing, setIsRefreshing] = React.useState(false);

  const refreshData = React.useCallback(() => {
    setIsRefreshing(true);
    setTimeout(async () => {
      await fetchData();
      setIsRefreshing(false);
    }, 2000);
  }, []);

  const fetchData = async () => {
    setStockData(await scrapeWebsite());
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  const handleSearchChange = (text) => {
    setSearchText(text.toLowerCase()); // Search should be case-insensitive
  };

  const filteredStockData = searchText ? stockData.filter(stock => stock.company.toLowerCase().startsWith(searchText)) : stockData;

  const getColor = (dailyChange) => {
    if (dailyChange.startsWith('-')) {
      return 'red';
    } else if (dailyChange === '0,00%') {
      return 'gray';
    } else {
      return 'green';
    }
  };

  return (
    <View style={styles.container}>
        <SearchBar onChangeText={handleSearchChange} />
        <Text style={styles.header}>Available Stocks</Text>

        <ScrollView 
          contentContainerStyle={styles.stockList}
          refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={refreshData} />
        }>

        {filteredStockData.map((stockInfo, index) => (
        <Stocks
          key={index}
          company={stockInfo.company}
          bidPrice={stockInfo.bidPrice}
          dailyChange={stockInfo.dailyChange}
          dailyChangeColor={getColor(stockInfo.dailyChange)}
        />
        ))}
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 24,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 16,
  },
  stockList: {
    paddingBottom: 16,
  },
  stockItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  stockSymbol: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  stockDetails: {
    flex: 1,
    marginLeft: 16,
  },
  stockName: {
    fontSize: 16,
    color: '#CCC',
  },
  stockPrice: {
    fontSize: 16,
    color: '#FFF',
  },
  dailyChange: {
    fontSize: 14,
  },
});

export default HomeScreen;
