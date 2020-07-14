import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import { StyleSheet, FlatList, SafeAreaView } from "react-native";
import { ListItem } from "react-native-elements";

import Colors from "../constants/Colors";
import { MonoText } from "./StyledText";
import { Text, View } from "./Themed";

const Food = ({ item }: { item: any }) => (
  <View>
    <Text>{item.title}</Text>
  </View>
);

class ChosenFoods extends Component {
  constructor(props: any) {
    super(props);

    this.state = {
      TEMPLIST: [
        {
          id: "0",
          title: "Salmon",
          image: "",
          type: "Main",
        },
        {
          id: "1",
          title: "Green Beans",
          image: "",
          type: "Side",
        },
        {
          id: "2",
          title: "Ketchup",
          image: "",
          type: "Sauce",
        },
        {
          id: "3",
          title: "Root Beer",
          image: "",
          type: "Drink",
        },
      ],
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList data={this.state.TEMPLIST} renderItem={({ item }) => <Food item={item} />} />
      </View>
    );
  }
}

/* const Item = ({ item }: { item: any }) => (
  <View>
    <ListItem title={item.title} subtitle={item.type} bottomDivider />
  </View>
);

const ItemList = () => {
  const renderItem = ({ item }: { item: any }) => <Item item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={TEMPLIST} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
    </SafeAreaView>
  );
};

export default function ChosenFoods({ path }: { path: string }) {
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text style={styles.getStartedText} lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)">
          {"Weight goal"}
        </Text>
        <Text style={styles.getStartedText} lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)">
          {"Positive affirmation"}
        </Text>
      </View>
      <View
        style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
        darkColor="rgba(255,255,255,0.05)"
        lightColor="rgba(0,0,0,0.05)"
      >
        <Text>Did you exercise yet, today?</Text>
        <Text>Which meal are you having?</Text>
        <Text>How are you feeling right now?</Text>
      </View>
      <View>
        <Text style={styles.getStartedText} lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)">
          What's for {"meal"}
        </Text>
      </View>
      <View style={styles.getStartedContainer}>
        <ItemList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  developmentModeText: {
    marginBottom: 20,
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center",
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
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
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
});
*/

export default ChosenFoods;
