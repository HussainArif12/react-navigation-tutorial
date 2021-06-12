import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CoffeeInfo({ route }) {
  const [data, setData] = useState();
  const { id } = route.params;

  const fetchData = async () => {
    const resp = await fetch(`https://api.sampleapis.com/coffee/hot/${id}`);
    const data = await resp.json();
    console.log(resp.title);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      {data ? (
        <View>
          <Text style={styles.heading}> {data.title}</Text>
          <Text style={styles.description}>{data.description}</Text>
        </View>
      ) : (
        <Text>Loading..</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
  },
  heading: {
    fontSize: 40,
  },
});
