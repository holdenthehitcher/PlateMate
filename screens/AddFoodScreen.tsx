import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";

import AddFoodList from '../components/AddFoodList';

export default function AddFoodScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Foods</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View>
        <Text lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)">
         
        </Text>
      </View>
      <View>
          <AddFoodList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
