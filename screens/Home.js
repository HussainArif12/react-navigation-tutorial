import { StyleSheet, View, Text, Button } from "react-native";
import React from "react";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome Home!</Text>
      <Button
        title="Go to About page"
        onPress={() => navigation.navigate("About")}
      />
      <Button
        title="Go to list"
        onPress={() => navigation.navigate("CoffeeList")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0c62eb",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
