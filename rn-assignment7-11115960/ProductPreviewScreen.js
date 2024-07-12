import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from "react-native";

const ProductPreviewScreen = ({ route, navigation }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setDrawerOpen(true)}>
            <Image
              source={require("./assets/menu.png")}
              style={styles.headerIcon}
            />
          </TouchableOpacity>
          <Image
            source={require("./assets/logo.png")}
            style={styles.headerIcon}
          />
          <View style={styles.icons}>
            <TouchableOpacity>
              <Image
                source={require("./assets/search.png")}
                style={styles.headerIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
              <Image
                source={require("./assets/bag.png")}
                style={styles.headerIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image source={product.icon} style={styles.image} />
        </View>
        <View style={styles.details}>
          <View style={styles.brandRow}>
            <Text style={styles.brand}>{product.name}</Text>
            <Image
              source={require("./assets/export.png")}
              style={styles.brandIcon}
            />
          </View>
          <Text style={styles.name}>
            {product.description}
          </Text>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.materials}>MATERIALS</Text>
          <Text style={styles.description}>
            We work with monitoring programmes to ensure compliance with safety,
            health and quality standards for our products.
          </Text>
          <View style={styles.instructionRow}>
            <Image
              source={require("./assets/bleach.png")}
              style={styles.instructionIcon}
            />
            <Text style={styles.instruction}>Do not use bleach</Text>
          </View>
          <View style={styles.instructionRow}>
            <Image
              source={require("./assets/dry.png")}
              style={styles.instructionIcon}
            />
            <Text style={styles.instruction}>Do not tumble dry</Text>
          </View>
          <View style={styles.instructionRow}>
            <Image
              source={require("./assets/wwash.png")}
              style={styles.instructionIcon}
            />
            <Text style={styles.instruction}>
              Dry clean with tetrachloroethylene
            </Text>
          </View>
          <View style={styles.instructionRow}>
            <Image
              source={require("./assets/door.png")}
              style={styles.instructionIcon}
            />
            <Text style={styles.instruction}>
              Iron at a maximum of 110°C/230°F
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.deliveryy}>
            <Image
              source={require("./assets/sshipping.png")}
              style={styles.deliveryIcon}
            />
            <View style={styles.delivery}>
              <Text style={styles.deliveryText}>Free Flat Rate Shipping</Text>
              <Text style={styles.deliveryEstimate}>
                Estimated to be delivered on
              </Text>
              <Text style={styles.deliveryEstimate}>
                09/11/2021 - 12/11/2021.
              </Text>
            </View>
            <Image
              source={require("./assets/up.png")}
              style={{ marginLeft: 90 }}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => navigation.navigate("Cart")}
            >
              <View style={styles.addButtonContent}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={require("./assets/pplus.png")}
                    style={styles.addButtonIcon}
                  />
                  <Text style={styles.addButtonText}>ADD TO BASKET</Text>
                </View>
                <Image
                  source={require("./assets/hheart.png")}
                  style={styles.addButtonIcon}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    paddingHorizontal: 25,
  },
  icons: {
    flexDirection: "row",
    width: 60,
    justifyContent: "space-between",
  },
  imageContainer: {
    width: "100%",
    paddingHorizontal: 10,
    height: 400,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "horizontal",
  },
  details: {
    padding: 20,
  },
  brandRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  brand: {
    fontSize: 16,
    color: "#000",
  },
  brandIcon: {
    width: 16,
    height: 16,
    marginLeft: 5,
  },
  name: {
    fontSize: 16,
    marginVertical: 10,
    color: "#888",
  },
  price: {
    fontSize: 20,
    color: "orange",
    marginBottom: 10,
  },
  materials: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  instructionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  instructionIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  instruction: {
    fontSize: 16,
    color: "#666",
  },
  divider: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginVertical: 20,
    width: 320,
  },
  delivery: {
    alignItems: "flex-start",
  },
  deliveryy: {
    flexDirection: "row",
  },
  deliveryIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  deliveryText: {
    fontSize: 16,
    marginBottom: 10,
  },
  deliveryEstimate: {
    marginBottom: 10,
    fontSize: 16,
    color: "#666",
  },
  buttonContainer: {
    marginHorizontal: -10,
    paddingHorizontal: 0,
  },
  addButton: {
    backgroundColor: "#000",
    height: 80,
    width: Dimensions.get("window").width + 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -30,
    marginRight: -10,
    borderRadius: 5,
    marginTop: 20,
  },
  addButtonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
  },
  addButtonIcon: {
    width: 16,
    height: 16,
    marginHorizontal: 10,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default ProductPreviewScreen;
