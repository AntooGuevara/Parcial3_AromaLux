import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import Home from "../screens/HomeScreen";
import ProductList from "../screens/ProductListScreen";
import ProductDetail from "../screens/ProductDetailScreen";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeMain" component={Home} />
    <Stack.Screen name="Products" component={ProductList} />
    <Stack.Screen name="Detail" component={ProductDetail} />
  </Stack.Navigator>
);

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: "#000" },
          tabBarActiveTintColor: "#D4AF37",
        }}
      >
        <Tab.Screen
          name="Inicio"
          component={HomeStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={22} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Favoritos"
          component={FavoritesScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="heart" size={22} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Carrito"
          component={CartScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="cart" size={22} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Perfil"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="person" size={22} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}