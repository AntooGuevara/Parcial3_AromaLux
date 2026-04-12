import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProductListScreen({ navigation }) {

  const products = [
    {
      id: 1,
      name: "Creed Silver Mountain Water",
      price: 6500,
      image: require("../../assets/perfume1.png"),
      description:
        "Fragancia fresca y elegante con notas cítricas, té verde y almizcle. Perfecta para uso diario con un toque de lujo."
    },
    {
      id: 2,
      name: "Dior Sauvage Elixir",
      price: 6200,
      image: require("../../assets/perfume2.png"),
      description:
        "Aroma intenso y masculino con lavanda, especias y maderas. Muy duradero y perfecto para ocasiones especiales."
    },
    {
      id: 3,
      name: "Invictus Victory Elixir",
      price: 2500,
      image: require("../../assets/perfume3.png"),
      description:
        "Fragancia dulce y potente con vainilla, ámbar y notas especiadas. Ideal para la noche y climas fríos."
    },
    {
      id: 4,
      name: "JPG Scandal",
      price: 2200,
      image: require("../../assets/perfume4.png"),
      description:
        "Perfume dulce y elegante con notas de caramelo, haba tonka y vetiver. Perfecto para destacar y atraer atención."
    }
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("Detail", { product: item })}
    >
      <Image source={item.image} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeMain")} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={22} color="#D4AF37" />
          <Text style={styles.backText}>Inicio</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Productos</Text>
      </View>

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    marginTop: 40,
  },
  backBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  backText: {
    color: "#D4AF37",
    fontSize: 16,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: "auto",
    marginRight: "auto",
    transform: [{ translateX: -30 }],
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#111",
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  info: {
    marginLeft: 10,
  },
  name: {
    color: "#D4AF37",
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    color: "#4CAF50", 
    marginTop: 5,
    fontSize: 15,
  },
});