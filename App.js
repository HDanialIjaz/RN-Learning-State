import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { CheckBox } from "react-native-btr";

export default function App() {
  let color = [
    "green",
    "blue",
    "yellow",
    "pink",
    "black",
    "purple",
    "orange",
    "brown",
    "grey",
  ];

  function prevIndex(index) {
    return (index + 1) % color.length;
  }
  const [bgcolor, setBgcolor] = useState("white");
  const [index, setIndex] = useState(0);
  const changecolor = () => {
    setBgcolor(color[index]);
    setIndex(prevIndex(index));
  };
  const [check, setChecked] = useState(false);

  function func() {
    const newColor = !check;
    setChecked(newColor);
    if (newColor) {
      for (let i = 0; i < color.length; i++) {
        setTimeout(() => {
          setBgcolor(color[i]);
        }, 1000 * i);
      }
    }
  }

  return (
    <View style={[styles.container, { backgroundColor: bgcolor }]}>
      <TouchableOpacity onPress={changecolor}>
        <Text style={styles.text}>Change Color</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row", marginTop: 20, gap: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
          Auto change
        </Text>
        <CheckBox
          borderWidth={2}
          checked={check}
          borderRadius={6}
          onPress={func}
        />
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
  text: {
    color: "white",
    backgroundColor: "black",
    padding: 10,
    borderRadius: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
});
