
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors } from '../constants/theme';
import SearchInput from '../components/Search/SearchInput';
import Tabs from '../components/shared/Tabs';
import SearchMasonry from '../components/Search/SearchMasonry';
import { SEARCH_ALL, SEARCH_HOTELS, SEARCH_PLACES } from '../data';
import MainHeader from '../components/MainHeader';

const tabs = [
  {
    title: 'All',
    content: () => <SearchMasonry key='all' list={SEARCH_ALL} />,
  },
  {
    title: 'Places',
    content: () => <SearchMasonry key='places' list={SEARCH_PLACES} />,
  },
  {
    title: 'Hotels',
    content: () => <SearchMasonry key='hotels' list={SEARCH_HOTELS} />,
  },
];

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader/>
      <SearchInput />
      <Tabs items={tabs} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
});

export default SearchScreen;
