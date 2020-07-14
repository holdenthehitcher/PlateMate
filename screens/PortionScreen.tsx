import * as React from "react";
import { StyleSheet, TouchableOpacity, Button, ScrollView } from "react-native";
import { Text, View } from "../components/Themed";
import FoodItems from "../components/FoodItems";
import MealInput from "../components/MealInput";


export default function PortionScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Menu Portion Calculator</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View>
        <Text lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)">
          Meal Portion Calculator
        </Text>
          <MealInput />
        <Text lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)">
          Foods You're Having this Meal
        </Text>
        <FoodItems />
        <TouchableOpacity style={styles.helpLink}>
          <Button title="Add a Food" onPress={() => {}}></Button>
        </TouchableOpacity>
        <TouchableOpacity style={styles.helpLink}>
          <Button title="Portion Your Meal" onPress={() => {}}></Button>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
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
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)",
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
});
