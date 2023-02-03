import React from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const CARD_WIDTH = sizes.width - 100;
const CARD_HEIGHT = 200;

const TopPlacesCarousel = ({ list }) => {
  return (
    <FlatList
      data={list}
      horizontal
      keyExtractor={(i) => i.id}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity style={{ marginLeft: spacing.l }}>
            <View style={styles.card}>
              <View style={styles.imageBox}>
                <Image source={item.image} style={styles.image} />
                <Text>{item.title}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
  },
  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: sizes.radius,
  },
});

export default TopPlacesCarousel;
