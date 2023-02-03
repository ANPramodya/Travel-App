import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors } from '../constants/theme';
import SearchInput from '../components/Search/SearchInput';
import Tabs from '../components/shared/Tabs';

const tabs = [
  {
    title: 'All',
    // content: () => <SearchMasonry key='all' list={SEARCH_ALL} />,
    content: () => (
      <View>
        <Text>All</Text>
      </View>
    ),
  },
  {
    title: 'Places',
    // content: () => <SearchMasonry key='places' list={SEARCH_PLACES} />,
    content: () => (
      <View>
        <Text>Places</Text>
      </View>
    ),
  },
  {
    title: 'Hotels',
    // content: () => <SearchMasonry key='hotels' list={SEARCH_HOTELS} />,
    content: () => (
      <View>
        <Text>Hotels</Text>
      </View>
    ),
  },
];

const SearchScreen = () => {
  return (
    <View style={styles.container}>
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
