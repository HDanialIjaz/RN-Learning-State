// App.js
import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { MaterialIcons, Ionicons, FontAwesome } from "@expo/vector-icons"; // Icons library

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("#003f8a"); // Initial background color
  const [isMobilePressed, setIsMobilePressed] = useState(false); // Track if mobile button is pressed
  const [hideIcons, setHideIcons] = useState(false); // Control visibility of icons except Power Button

  const handleMobilePress = () => {
    setIsMobilePressed(true); // Set mobile button as pressed
  };

  const handlePowerPress = () => {
    if (isMobilePressed) {
      // If the mobile icon was pressed first, change background to white and hide other icons
      setBackgroundColor("white");
      setHideIcons(true);
      setIsMobilePressed(false); // Reset mobile press state
    } else {
      // If the mobile icon was not pressed, reset background to blue and show other icons
      setBackgroundColor("#003f8a");
      setHideIcons(false);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {/* Power Button is always visible */}
      <View style={styles.middleSection}>
        <TouchableOpacity style={styles.powerButton} onPress={handlePowerPress}>
          <MaterialIcons name="power-settings-new" size={50} color="white" />
        </TouchableOpacity>
      </View>

      {/* Other buttons (flashlight and mobile-phone) are conditionally hidden */}
      {!hideIcons && (
        <View style={styles.bottomSection}>
          <TouchableOpacity>
            <Ionicons name="flashlight" size={40} color="yellow" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleMobilePress}>
            <FontAwesome name="mobile-phone" size={40} color="yellow" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  middleSection: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  powerButton: {
    width: 80,
    height: 80,
    backgroundColor: "#005fb8",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    // shadowColor: "yellow",
    // shadowOffset: { width: 10, height: 40 },
    // shadowOpacity: 0.3,
    // shadowRadius: 4,
    // elevation: 35,
  },
  bottomSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
  },
});
