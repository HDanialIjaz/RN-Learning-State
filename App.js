import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [Count, setCount] = useState(0);

  const increment = () => {
    setCount(Count + 1);
  };
  const decrement = () => {
    setCount(Count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <View style={style.container}>
      <View style={style.counterBox}>
        <View style={style.counter}>
          <Text style={style.text}>{Count}</Text>
        </View>
        <View style={style.buttonContainer}>
          <View style={style.Incbutton}>
            <TouchableOpacity onPress={increment}>
              <Text style={style.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={style.button}>
            <TouchableOpacity style={style.decresbutton} onPress={decrement}>
              <Text style={style.decbuttontext}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.resetbutton} onPress={reset}>
              <Text style={style.resetbuttonText}>Reset</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  resetbuttonText: {
    fontSize: 25,
    // alignContent: "center",
    textAlign: "center",
    // justifyContent: "center",
    marginVertical: 7,
  },
  resetbutton: {
    borderRadius: 50,
    borderWidth: 1,
    width: 130,
    height: 50,
    backgroundColor: "green",
  },
  button: {
    flexDirection: "row",
    margin: 10,
    gap: 20,
    // justifyContent: "space-between",
  },
  decresbutton: {
    borderRadius: 50,
    borderWidth: 1,
    width: 130,
    // padding: 50,
    height: 50,
    backgroundColor: "green",
    marginHorizontal: 8,
  },
  decbuttontext: {
    fontSize: 70,
    textAlign: "center",
    // marginin: 15,
    marginVertical: -25,
  },
  buttonText: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    fontSize: 150,
    fontWeight: "bold",
    paddinginBottom: 10,
    textAlign: "center",
    marginTop: 200,
  },
  counter: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
    paddingInlineStart: 50,
  },
  buttonContainer: {
    padding: 50,
    backgroundColor: "lightblue",
    marginTop: 200,
  },
  Incbutton: {
    borderRadius: 50,
    borderWidth: 1,
    margin: 10,
    padding: 10,
    width: 300,
    backgroundColor: "green",
  },
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  countText: {
    fontSize: 50,
    fontWeight: "bold",
  },
});
