import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "@/hooks/useColorScheme";
import * as Font from "expo-font";

export default function IntroScreen() {
  const colorScheme = useColorScheme();
  const [fontsLoaded, setFontsLoaded] = useState(false);
  
    useEffect(() => {
      async function loadFonts() {
        await Font.loadAsync({
          'PlayfairDisplay-SemiBold': require('../../../assets/fonts/PlayfairDisplay-SemiBold.ttf'),
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

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.description}>
        <Text style={styles.we}>
            "We are Themis, and we offer multiple services to help you negotiate your salary."
          </Text>
        </View>
        <View style={styles.infoBox}>
          
            <Text style={styles.sectionTitle}>Why?</Text>
            <Text style={styles.text}>
              Wage inequality harms women financially and mentally. Lack of transparency keeps the issue hidden. Women deserve equal pay for equal work.
            </Text>

            <Text style={styles.sectionTitle}>How?</Text>
            <Text style={styles.text}>
              By providing real-time wage transparency. Offering negotiation training and career guidance. Ranking companies based on fair pay practices.
            </Text>

            <Text style={styles.sectionTitle}>When will you need this?</Text>
            <Text style={styles.text}>
              When applying for jobs. During salary negotiations. When choosing a workplace that values equality.
            </Text>

            <Text style={styles.sectionTitle}>Important to focus on:</Text>
            <Text style={styles.text}>
              Empowering women with knowledge and confidence. Encouraging companies to commit to fairness. Creating lasting change in workplace equality.
            </Text>
            </View>

          {/* "LET'S GO" BUTTON */}
          <Link href="/ServeIntro" asChild>
            <TouchableOpacity style={styles.letsGoButton}>
              <Text style={styles.buttonText}>Let's Go</Text>
            </TouchableOpacity>
          </Link>
        
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

// ==============================
// STYLES
// ==============================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B1F3B",
  },
  settingsHeader: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 10,
  },
  profileHeader: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 10,
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
    marginHorizontal: 10,
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    color: "#eaebff",
    marginBottom: 20,
    backgroundColor: "#F67E7D",
    padding: 20,
    borderRadius: 15,
    width: "80%",
    
  },
  infoBox: {
    backgroundColor: "#FF6685",
    fontSize: 20,
    textAlign: "center",
    color: "#eaebff",
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    width: "80%",
    alignSelf: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0B1F3B",
    marginTop: 10,
    fontFamily: 'PlayfairDisplay-SemiBold',
  },
  text: {
    fontSize: 16,
    color: "#eaebff",
    textAlign: "center",
    
  },
  we: {
    fontFamily: 'PlayfairDisplay-SemiBold',
    fontSize: 16,
    color: "#0B1F3B",
    textAlign: "center",
  },
  letsGoButton: {
    backgroundColor: "#F67E7D",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    alignSelf: "center",
    width: "60%",
    
  },
  buttonText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    fontFamily: 'PlayfairDisplay-SemiBold',
  },
});
