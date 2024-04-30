import React from 'react';
import { View, Text, ScrollView, StyleSheet, RefreshControl } from 'react-native';
import SearchBar from './SearchBar';
import Currencies from './Currencies';

import axios from 'axios';
import { screensEnabled } from 'react-native-screens';

const cheerio = require('cheerio');
const axiosapi = require('axios');

const currencyTexts = ["", "USD/TRY", "EUR/TRY", "GBP/TRY", "CAD/TRY", "SEK/TRY", "RUB/TRY", "SAR/TRY", "JPY/TRY", "AUD/TRY", "NOK/TRY", "CNY/TRY", "CZK/TRY", "ARS/TRY", "THB/TRY", "AZN/TRY"];


async function scrapeWebsite() {
    const NewStockData = [];

    try {
        const response = await axios.get('https://www.getmidas.com/canli-doviz/');
        const html = response.data;
        const $ = cheerio.load(html);

      for (let i = 1; i <= 15; i++) {
        const scrapedTextName = currencyTexts[i]

        const selectorBid = `body > div.container-fluid.stock-based-page.doviz-based-page.altin-page > div > div > div > div.row.my-3.m-0.stock-table-container > table > tbody > tr:nth-child(${i}) > td:nth-child(2)`;
        const scrapedTextBid = $(selectorBid).text().trim()+"₺";

        const selectorChange = `body > div.container-fluid.stock-based-page.doviz-based-page.altin-page > div > div > div > div.row.my-3.m-0.stock-table-container > table > tbody > tr:nth-child(${i}) > td.val.dailyChangePercent`;
        const scrapedTextChange = $(selectorChange).text().trim();

        console.log(`Currency ${i}:`, scrapedTextName, 'Fiyat:', scrapedTextBid, 'Degisim:', scrapedTextChange);

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

const ForexScreen = () => {
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
    setSearchText(text.toLowerCase());
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
        <Text style={styles.header}>Currencies</Text>

        <ScrollView 
          contentContainerStyle={styles.stockList}
          refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={refreshData} />
        }>

        {filteredStockData.map((stockInfo, index) => (
          //<View style={styles.currencyBox}>
            <Currencies
              key={index}
              company={stockInfo.company} 
              bidPrice={stockInfo.bidPrice}
              dailyChange={stockInfo.dailyChange}
              dailyChangeColor={getColor(stockInfo.dailyChange)}
            />
          //</View>
))}

        </ScrollView>
      
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
  currencyBox: {
    backgroundColor: '#1f1f1f',
    borderRadius: 40,
    marginVertical:5,
    padding: 1,
  },
});

export default ForexScreen;
