import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ShopContext } from "../../context/ShopContext";

export default function FavoritesScreen() {
  const { favorites, toggleFavorite } = useContext(ShopContext);

  return (
    <View style={styles.container}>
      {favorites.length === 0 ? (
        <View style={styles.empty}>
          <Ionicons name="heart-outline" size={60} color="#333" />
          <Text style={styles.emptyText}>No tienes favoritos aún</Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={item.image} style={styles.image} />

              <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>${item.price}</Text>
              </View>

              <TouchableOpacity
                style={styles.deleteBtn}
                onPress={() => toggleFavorite(item)}
              >
                <Ionicons name="trash-outline" size={22} color="#ff4444" />
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 10,
  },
  empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    color: "#333",
    fontSize: 16,
    marginTop: 10,
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
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  info: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    color: "#D4AF37",
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    color: "#fff",
  },
  deleteBtn: {
    padding: 6,
  },
});