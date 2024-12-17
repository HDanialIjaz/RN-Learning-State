import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import React, { useState } from 'react';


export default function App() {
  let color = [ 'green', 'blue', 'yellow', 'pink', 'black', 'purple', 'orange', 'brown', 'grey'];

  function prevIndex  (index) {

    return (index + 1) % color.length;
  
  };
  const [bgcolor, setBgcolor] = useState('red');
  const [index, setIndex] = useState(0);
  const changecolor = () => {
    setBgcolor(color[index])
    setIndex(prevIndex(index));
  };
  return (
    <View style={[styles.container, { backgroundColor: bgcolor }]}>
      <TouchableOpacity onPress={changecolor}>
        <Text style={styles.text}>Change Color</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({ 

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },

});


