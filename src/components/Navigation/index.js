import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeTab from "../../pages/Home";
import ProductTab from "../../pages/Product";
import AccountTab from "../../pages/Account";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  function MyStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={MyTabs} />
      </Stack.Navigator>
    );
  }
  function MyTabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#e91e63",
        }}
      >
        <Tab.Screen
          name="HomeTab"
          component={HomeTab}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="AccountTab"
          component={AccountTab}
          options={{
            tabBarLabel: "Account",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-circle"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ProductTab"
          component={ProductTab}
          options={{
            tabBarLabel: "Product",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cart" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <MyStack></MyStack>
    </NavigationContainer>
  );
}
