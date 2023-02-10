import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import { Animated, StatusBar } from "react-native";
import TripDetailsScreen from "../screens/TripDetailsScreen";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

const Stack = createSharedElementStackNavigator();


import { StatusBar } from "react-native";

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden />

      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={TabNavigator}
          options={{
            headerShown: false,
            useNativeDriver: true,
          }}
        />
        <Stack.Screen
          name="TipDetails"
          component={TripDetailsScreen}
          options={{
            headerShown: false,
            useNativeDriver: true,
            cardStyleInterpolator: {
              current: { progress: Animated.AnimatedInterpolation },
            }({
              cardStyle: {
                opacity: progress,
              },
            }),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
