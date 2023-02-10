import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import TabNavigator from "./TabNavigator";
import { Animated, StatusBar } from "react-native";
import TripDetailsScreen from "../screens/TripDetailsScreen";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
const Stack = createSharedElementStackNavigator();

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
          name="TripDetails"
          component={TripDetailsScreen}
          options={{
            headerShown: false,
            useNativeDriver: true,
            cardStyleInterpolator: ({ current: { progress } }) => ({
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

// cardStyleInterpolator:({current : {progress : Animated.AnimatedInterpolation}}) => ({
//   cardStyle: {
//     opacity: progress
//   }
// })
// cardStyleInterpolator: ({
//   current: { progress: Animated.AnimatedInterpolation },
// })  ({
//   cardStyle: {
//     opacity: progress,
//   },
// }),
