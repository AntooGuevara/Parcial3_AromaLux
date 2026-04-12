import React from "react";
import { ShopProvider } from "./context/ShopContext";
import Navigation from "./src/navigation/AppNavigator";

export default function App() {
  return (
    <ShopProvider>
      <Navigation />
    </ShopProvider>
  );
}