import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import About from "./screens/About";
import CoffeeList from "./screens/CoffeeList";
import CoffeeInfo from "./screens/CoffeeInfo";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="CoffeeList" component={CoffeeList} />
        <Stack.Screen name="CoffeeInfo" component={CoffeeInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
