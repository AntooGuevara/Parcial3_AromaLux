import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AromaLux</Text>

      <Image
        source={require("../../assets/logo.png")}
        style={styles.image}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Products")}
      >
        <Text style={styles.buttonText}>Ver productos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", 
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 34,
    color: "#D4AF37", 
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 40,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "#D4AF37", 
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "#000", 
    fontWeight: "bold",
    fontSize: 16,
  },
});