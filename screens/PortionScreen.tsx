import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import PortionInput from "../components/PortionInput";

export default function PortionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu Portion Calculator</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View>
        <Text lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)">
          Meal Portion Calculator
        </Text>
      </View>
      <View>
        <Text lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)">
          Recipes
        </Text>
        <PortionInput path="/screens/PortionScreen.tsx" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
