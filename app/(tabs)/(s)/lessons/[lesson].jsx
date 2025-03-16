import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";

export default function lessons() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'PlayfairDisplay-SemiBold': require('../../../../assets/fonts/PlayfairDisplay-SemiBold.ttf'),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#FF6685" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Profile and Settings Icons */}
      <View style={styles.headerIcons}>
        <Link href="/user/settings" asChild>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome5 name="cog" size={24} color="white" />
          </TouchableOpacity>
        </Link>
        <Link href="/user/profile" asChild>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome5 name="user-circle" size={24} color="white" />
          </TouchableOpacity>
        </Link>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Text style={styles.title}>Themis</Text>
          <Text style={styles.subtitle}>Improve your negotiation skills with Themis!</Text>

          <View style={styles.infoBox}>
            <Text style={styles.sectionTitle}>Barriers:</Text>
            <Text style={styles.text}>Women face many challenges in wage negotiation, including bias and lack of transparency.</Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.sectionTitle}>What We’re Offering:</Text>
            <Text style={styles.text}>Support, negotiation training, and real-time wage insights to help you secure fair pay.</Text>
          </View>

          <TouchableOpacity style={styles.letsGoButton}>
            <Text style={styles.buttonText}>LET'S GO!</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B1F3B",
    paddingTop: 40,
  },
  headerIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  iconButton: {
    padding: 10,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  card: {
    backgroundColor: "#FF6685",
    padding: 20,
    borderRadius: 15,
    width: "90%",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#0B1F3B",
    fontFamily: 'PlayfairDisplay-SemiBold',
  },
  subtitle: {
    fontSize: 18,
    color: "#0B1F3B",
    textAlign: "center",
    marginBottom: 15,
  },
  infoBox: {
    backgroundColor: "#F67E7D",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: "100%",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0B1F3B",
  },
  text: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
  letsGoButton: {
    backgroundColor: "#0B1F3B",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FF6685",
  },
});
