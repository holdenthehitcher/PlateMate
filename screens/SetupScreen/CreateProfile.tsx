import * as WebBrowser from "expo-web-browser";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Button, Text, View, TextInput } from "react-native";

import SexInput from "./SexInput";
import PhysicalActivityInput from "./PhysicalActivityInput";
import ImageInput from "./ImageInput";

import Colors from "../../constants/Colors";
import { MonoText } from "../../components/StyledText";

export default function CreateProfile({ path }: { path: string }) {
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [weight, setWeight] = useState("");

  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text></Text>
      </View>
      <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
        <Text>Enter Your Beginning Body Stats:</Text>
        <Text>Age</Text>
        <SexInput />
        <Text>Weight</Text>
        <PhysicalActivityInput />
      </View>
      <View>
        <Text style={styles.getStartedText}>Enter Goal Weight</Text>
      </View>
      <View style={styles.helpContainer}>
        <TouchableOpacity style={styles.helpLink}>
          <Button title="Create Profile" onPress={() => {}}></Button>
        </TouchableOpacity>
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
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
});
