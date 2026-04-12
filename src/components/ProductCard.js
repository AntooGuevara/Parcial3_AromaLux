import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function ProductCard({ name, price, image, description, navigation }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => 
        navigation.navigate("ProductDetail", { 
          name, 
          price, 
          image, 
          description 
        })
      }
    >
      <Image source={image} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4
  },
  image: { width: "100%", height: 150 },
  info: { padding: 10 },
  name: { fontSize: 18, fontWeight: "bold" },
  price: { fontSize: 16, color: "#888", marginTop: 5 }
});