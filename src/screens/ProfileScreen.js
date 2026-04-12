import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return ( 
    <View style={styles.container}>
      <Image source={require("../../assets/profile.jpg")} style={styles.image} />

      <Text style={styles.name}>AromaLux</Text>
      <Text style={styles.email}>aroma@lux.com</Text>
      <Text style={styles.phone}>Número de Contacto: 
        6676676677</Text>
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
  image: { width: 120, height: 120, borderRadius: 60 },
  name: { color: "#D4AF37", fontSize: 20, marginTop: 10 },
  phone: { color: "#fff", marginTop: 5 },
  email: { color: "#fff", marginTop: 5 },

});