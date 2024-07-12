import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Image,
  Modal,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = ({ navigation }) => {
  const [cart, setCart] = useState([]);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Load cart from AsyncStorage
    const loadCart = async () => {
      const storedCart = await AsyncStorage.getItem("cart");
      if (storedCart) setCart(JSON.parse(storedCart));
    };
    loadCart();

    // Fetch products from API
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/category/womens-dresses"
        );
        const data = await response.json();
        if (data && data.products) {
          const transformedData = data.products.map((item) => ({
            id: item.id.toString(),
            name: item.title,
            description: item.description,
            price: item.price,
            icon: { uri: item.thumbnail },
          }));
          setProducts(transformedData);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  const addToCart = async (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    await AsyncStorage.setItem("cart", JSON.stringify(newCart));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductPreview", { product: item })}
      style={styles.product}
    >
      <View style={styles.imagePlaceholder}>
        <Image source={item.icon} style={{ width: "100%", height: "100%" }} />
        <TouchableOpacity
          onPress={() => addToCart(item)}
          style={styles.addButton}
        >
          <Image
            source={require("./assets/circle.png")}
            style={{ height: "100%", width: "100%" }}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setDrawerOpen(true)}>
          <Image source={require("./assets/menu.png")} />
        </TouchableOpacity>
        <Image source={require("./assets/logo.png")} />
        <View style={styles.icons}>
          <TouchableOpacity>
            <Image source={require("./assets/search.png")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            <Image source={require("./assets/bag.png")} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.storyHeader}>
        <Text style={styles.storyTitle}>OUR STORY</Text>
        <View style={styles.storyIcons}>
          <TouchableOpacity>
            <View style={styles.rounddIcon}>
              <Image source={require("./assets/wiew.png")} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.roundIcon}>
              <Image source={require("./assets/fil.png")} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={isDrawerOpen}
        onRequestClose={() => setDrawerOpen(false)}
      >
        <View style={styles.drawerOverlay}>
          <View style={styles.drawer}>
            <TouchableOpacity
              onPress={() => setDrawerOpen(false)}
              style={styles.closeButton}
            >
              <Image source={require("./assets/close.png")} />
            </TouchableOpacity>
            <Text style={styles.drawerTitle}>OPHELIA</Text>
            <View style={styles.redLine} />
            <TouchableOpacity style={styles.drawerItem}>
              <Text>Store</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawerItem}>
              <Text>Locations</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawerItem}>
              <Text>Blog</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawerItem}>
              <Text>Jewelry</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawerItem}>
              <Text>Electronic</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawerItem}>
              <Text>Clothing</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  icons: {
    flexDirection: "row",
    width: 60,
    justifyContent: "space-between",
  },
  storyHeader: {
    flexDirection: "row",
    justifyContent: "",
    alignItems: "center",
    paddingHorizontal: 25,
    height: 60,
  },
  storyTitle: {
    fontSize: 18,
    fontFamily: "Bodoni",
  },
  storyIcons: {
    flexDirection: "row",
    width: 60,
    justifyContent: "space-between",
  },
  rounddIcon: {
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 200,
  },
  roundIcon: {
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  listContainer: {
    paddingHorizontal: 15,
  },
  product: {
    flex: 1,
    margin: 5,
  },
  imagePlaceholder: {
    width: "100%",
    height: 300,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
  price: {
    fontSize: 16,
    color: "orange",
    marginBottom: 10,
  },
  addButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "transparent",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  drawerOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },
  drawer: {
    width: 250,
    height: "100%",
    backgroundColor: "#fff",
    padding: 16,
    justifyContent: "flex-start",
  },
  drawerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 70,
    marginBottom: 8,
  },
  redLine: {
    width: "60%",
    height: 2,
    backgroundColor: "red",
    marginBottom: 16,
  },
  drawerItem: {
    paddingVertical: 12,
  },
  closeButton: {
    position: "",
    top: 30,
    right: 10,
    width: 30,
    height: 30,
  },
});

export default HomeScreen;
