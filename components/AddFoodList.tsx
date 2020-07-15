import * as WebBrowser from "expo-web-browser";
import React, { Component, useState } from "react";
import { StyleSheet, FlatList, SafeAreaView, Text, View } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";

import Colors from "../constants/Colors";
import { MonoText } from "./StyledText";

const Food = ({ item }: { item: any }) => (
  <View>
    {/*add swipe to delete item*/}
    <Text>{item.title}</Text>
  </View>
);

class AddFoodList extends Component {
  constructor(props: any) {
    super(props);

    this.state = {
      search: "",

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
      <>
        <View>
          <SearchBar placeholder="Search Foods" />
        </View>
        <View>
          <FlatList data={this.state.TEMPLIST} renderItem={({ item }) => <Food item={item} />} />
        </View>
      </>
    );
  }
}

export default AddFoodList;
