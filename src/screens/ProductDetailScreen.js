import React, { useContext } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ShopContext } from "../../context/ShopContext";

export default function ProductDetailScreen({ route, navigation }) {
  const { product } = route.params;
  const { addToCart, toggleFavorite, favorites } = useContext(ShopContext);

  const isFav = favorites.some((item) => item.id === product.id);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
        <Ionicons name="arrow-back" size={22} color="#D4AF37" />
        <Text style={styles.backText}>Productos</Text>
      </TouchableOpacity>

      <Image source={product.image} style={styles.image} />

      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.desc}>{product.description}</Text>

      <TouchableOpacity style={styles.button} onPress={() => addToCart(product)}>
        <Text style={styles.buttonText}>Agregar al carrito</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => toggleFavorite(product)}>
        <Text style={{ color: "#fff", textAlign: "center", marginTop: 10 }}>
          {isFav ? " Quitar favorito" : " Agregar a favoritos"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 20 },
  backBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 40,
    marginBottom: 14,
  },
  backText: {
    color: "#D4AF37",
    fontSize: 16,
  },
  image: { width: "100%", height: 250 },
  title: { color: "#D4AF37", fontSize: 22, marginTop: 10 },
  price: { color: "#fff", fontSize: 18 },
  desc: { color: "#aaa", marginVertical: 10 },
  button: {
    backgroundColor: "#D4AF37",
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: { textAlign: "center", fontWeight: "bold" },
});