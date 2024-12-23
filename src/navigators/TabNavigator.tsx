import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "../theme/theme";
import { BlurView } from "@react-native-community/blur";
import CustomIcon from "../models/CustomIcon";
import HomeScreen from "../screens/Home/HomeScreen";
import FrequentlyBuyScreen from "../screens/History/FrequentlyBuyScreen";
import FavoritesScreen from "../screens/Favorite/FavoritesScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: () => (
          <BlurView
            overlayColor=""
            blurAmount={15}
            style={styles.BlurViewStyles}
          />
        ),
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <CustomIcon
              name="home"
              size={25}
              color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <CustomIcon
              name="like"
              size={25}
              color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
            />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={FrequentlyBuyScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <CustomIcon
              name="bell"
              size={25}
              color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  BlurViewStyles: {
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },
  tabBarStyle: {
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopColor: "transparent",
    borderTopWidth: 0,
    elevation: 0,
    height: 80,
    position: "absolute",
  },
});

export default TabNavigator;
