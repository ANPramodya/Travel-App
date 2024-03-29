import React from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { colors, shadow, sizes, spacing } from "../constants/theme";

import { useNavigation } from "@react-navigation/native";
import { SharedElement } from "react-navigation-shared-element";
import FavoriteButton from "./shared/FavoriteButton";

const CARD_WIDTH = sizes.width - 100;
const CARD_HEIGHT = 200;
const CARD_WIDTH_SPACING = CARD_WIDTH + spacing.l;

const TopPlacesCarousel = ({ list }) => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={list}
      horizontal
      snapToInterval={CARD_WIDTH_SPACING}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      keyExtractor={(i) => i.id}
      renderItem={({ item, index: number }) => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("TripDetails", { trip: item });
            }}
            style={{
              marginLeft: spacing.l,
              //marginRight: index === list.length - 1 ? spacing.l : 0,
            }}
          >
            <View style={[styles.card, shadow.dark]}>
              <FavoriteButton style={styles.favourite} />
              <SharedElement id={`trip.${item.id}.image`}>
                <View style={styles.imageBox}>
                  <Image source={item.image} style={styles.image} />
                  <Text>{item.title}</Text>
                </View>
              </SharedElement>

              <FavoriteButton style={styles.favourite} />
              <SharedElement
                id={`trip.${item.id}.image`}
                style={StyleSheet.absoluteFillObject}
              >
                <View style={styles.imageBox}>
                  <Image source={item.image} style={styles.image} />
                  <Text>{item.title}</Text>
                </View>
              </SharedElement>

              <FavoriteButton style={styles.favourite} />
              <View style={styles.imageBox}>
                <Image source={item.image} style={styles.image} />
                <Text>{item.title}</Text>
              </View>
              <View style={styles.titleBox}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.location}>{item.location}</Text>
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
    marginVertical: 0,
    backgroundColor: colors.white,
    borderRadius: sizes.radius,
  },
  favourite: {
    position: "absolute",
    top: spacing.m,
    right: spacing.m,
    zIndex: 1,
  },
  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: sizes.radius,
    overflow: "hidden",
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    resizeMode: "cover",
  },
  titleBox: {
    position: "absolute",
    top: CARD_HEIGHT - 80,
    left: 16,
  },
  title: {
    fontSize: sizes.h2,
    fontWeight: "bold",
    color: colors.white,
  },
  location: {
    fontSize: sizes.h3,
    color: colors.white,
  },
});

export default TopPlacesCarousel;
