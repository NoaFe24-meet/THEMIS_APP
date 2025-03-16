import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Link } from "expo-router";

export default function Services() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>

      {/* Settings Icon (Top Left) */}
      <View style={styles.settingsHeader}>
        <Link href="/user/[setting]" asChild>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome5 name="cog" size={24} color="white" />
          </TouchableOpacity>
        </Link>
      </View>

      {/* Profile Icon (Top Right) */}
      <View style={styles.profileHeader}>
        <Link href="/[userprofile]" asChild>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome5 name="user-circle" size={24} color="white" />
          </TouchableOpacity>
        </Link>
      </View>
        {/* ============================== */}
        {/* Services Section */}
        {/* ============================== */}
        <View style={styles.servicesContainer}>
          <Text style={styles.question}>What kind of service do you need?</Text>

          <Link href="/mentalhealth/[mental]" asChild>
            <TouchableOpacity style={styles.serviceButton}>
              <Text style={styles.serviceText}>Mental Support</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/lessons/[lessons]" asChild>
            <TouchableOpacity style={styles.serviceButton}>
              <Text style={styles.serviceText}>Lessons</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/ai/[AiSimulator]" asChild>
            <TouchableOpacity style={styles.serviceButton}>
              <Text style={styles.serviceText}>AI Simulator</Text>
            </TouchableOpacity>
          </Link>

        </View>
      </View>

      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

// ==============================
// Styles
// ==============================

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B1F3B",
    paddingBottom: 50, 
  },

  /* Settings Icon (Top Left) */
  settingsHeader: { 
    position: "absolute", 
    top: 40, 
    left: 20, 
    zIndex: 10 
  },

  /* Profile Icon (Top Right) */
  profileHeader: { 
    position: "absolute", 
    top: 40, 
    right: 20, 
    zIndex: 10 
  },

  /* Icon Button */
  iconButton: {
    padding: 10,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0B1F3B",
    fontFamily: "serif",
  },
  iconButton: {
    padding: 5,
  },

  // ==============================
  // Services Section
  // ==============================
  servicesContainer: {
    backgroundColor: "#FF6685",
    margin: 20,
    padding: 20,
    borderRadius: 10,
    marginTop: 80, 
    alignItems: "center",
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0B1F3B",
    marginBottom: 20,
  },
  serviceButton: {
    backgroundColor: "#F5A9A9",
    padding: 15,
    width: "90%",
    borderRadius: 10,
    marginVertical: 8,
    alignItems: "center",
  },
  serviceText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0B1F3B",
  },

});

