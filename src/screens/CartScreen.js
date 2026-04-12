import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ShopContext } from "../../context/ShopContext";

export default function CartScreen() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeItem,
    clearCart,
  } = useContext(ShopContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,0
  );

  if (cart.length === 0) {
    return (
      <View style={[styles.container, styles.empty]}>
        <Ionicons name="cart-outline" size={60} color="#333" />
        <Text style={styles.emptyText}>Tu carrito está vacío</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />

            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>${item.price}</Text>

              <View style={styles.row}>
                <TouchableOpacity onPress={() => decreaseQty(item.id)}>
                  <Text style={styles.btn}>-</Text>
                </TouchableOpacity>

                <Text style={styles.qty}>{item.quantity}</Text>

                <TouchableOpacity onPress={() => increaseQty(item.id)}>
                  <Text style={styles.btn}>+</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity onPress={() => removeItem(item.id)}>
                <Text style={styles.delete}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <Text style={styles.total}>Total: ${total}</Text>

      <TouchableOpacity style={styles.clear} onPress={clearCart}>
        <Text style={{ fontWeight: "bold" }}>Vaciar carrito</Text>
      </TouchableOpacity>
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
    padding: 10,
    marginBottom: 10,
    borderRadius: 12,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  info: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    color: "#D4AF37", //es el mismo color de las letras del logo
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    color: "#fff",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    gap: 10,
  },
  btn: {
    color: "#D4AF37",
    fontSize: 20,
  },
  qty: {
    color: "#fff",
  },
  delete: {
    color: "red",
    marginTop: 5,
  },
  total: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
  },
  clear: {
    backgroundColor: "#D4AF37",
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
  },
});