import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import SearchBar from './SearchBar';
import Stocks from './Stocks';

import axios from 'axios';
import { screensEnabled } from 'react-native-screens';

const cheerio = require('cheerio');
const axiosapi = require('axios');

async function scrapeWebsite() {
    const NewStockData = [];

    try {
        const response = await axios.get('https://www.getmidas.com/canli-borsa/xu100-bist-100-hisseleri');
        const html = response.data;
        const $ = cheerio.load(html);

      for (let i = 1; i <= 30; i++) {
        const selectorName = `body > div.container-fluid.stocks-page.stock-based-page > div > div > div > div.row.my-3.m-0.stock-table-container > table > tbody > tr:nth-child(${i}) > td.val.first > a`;
        const scrapedTextName = $(selectorName).text().trim();

        const selectorBid = `body > div.container-fluid.stocks-page.stock-based-page > div > div > div > div.row.my-3.m-0.stock-table-container > table > tbody > tr:nth-child(${i}) > td:nth-child(2)`;
        const scrapedTextBid = $(selectorBid).text().trim();

        const selectorChange = `body > div.container-fluid.stocks-page.stock-based-page > div > div > div > div.row.my-3.m-0.stock-table-container > table > tbody > tr:nth-child(${i}) > td.val.dailyChangePercent`;
        const scrapedTextChange = $(selectorChange).text().trim();

        console.log(`Sirket ${i}:`, scrapedTextName, 'Fiyat:', '₺'+scrapedTextBid, 'Degisim:', scrapedTextChange);

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

const StockList = () => {
  const [stockData, setStockData] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      setStockData(await scrapeWebsite());
    }
    fetchData();
  }, []);

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
    <ScrollView contentContainerStyle={styles.stockList}>

        {stockData.map((stockInfo, index) => (
        <Stocks
          key={index}
          company={stockInfo.company}
          bidPrice={stockInfo.bidPrice}
          dailyChange={stockInfo.dailyChange}
          dailyChangeColor={getColor(stockInfo.dailyChange)}
          />
        ))}

      </ScrollView>
  );
}

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <SearchBar />
        <Text style={styles.header}>Available Stocks</Text>

      <StockList />
      
    </View>
  );
};

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
