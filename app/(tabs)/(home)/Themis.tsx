import { Image, StyleSheet, View, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
import * as Font from "expo-font";
import { useColorScheme } from "@/hooks/useColorScheme";
import React, { useState, useEffect } from "react";

export default function HomeScreen() {
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
    <ThemedView style={styles.container}>
      
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

      {/* Content Section with ScrollView */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Image
            source={require('@/assets/images/logo.jpeg')}
            style={styles.logo}
          />
          <View style={styles.descriptionBox}>
            <ThemedText style={styles.descriptionText}>
              Empowering individuals and communities through inclusive financial access, 
              fostering economic independence and sustainable development.
            </ThemedText>
          </View>
        </View>

        {/* About Us Section */}
        <View style={styles.aboutUsBox}>
          <ThemedText style={styles.aboutUsTitle}>About Us</ThemedText>
          <ThemedText style={styles.aboutUsText}>
            Welcome to THEMIS, we are a social enterprise dedicated to empowering women by turning the hidden structures of wage inequality into transparency, fairness, and opportunity.
          </ThemedText>
          <ThemedText style={styles.aboutUsTitle}>Our Mission</ThemedText>
          <ThemedText style={styles.aboutUsText}>
            Our mission is simple yet powerful: to fight gender wage inequality by providing women with the tools they need to understand their worth, access fair-paying jobs, and confidently negotiate salaries.
          </ThemedText>
          <ThemedText style={styles.aboutUsTitle}>What We Do</ThemedText>
          <ThemedText style={styles.aboutUsText}>
            - Salary Transparency: Access a public database that ranks companies based on wage equality.
            {'\n'}- Negotiation Training: Interactive lessons and simulators to help women gain confidence and negotiate better pay.
            {'\n'}- Empowerment Resources: Tailored career strategies that focus on self-development and growth.
          </ThemedText>
          <ThemedText style={styles.aboutUsTitle}>Why It Matters</ThemedText>
          <ThemedText style={styles.aboutUsText}>
            The gender wage gap affects millions of women across industries. We aim to break these barriers, creating a world where women are empowered, financially independent, and free from the fear of being undervalued.
          </ThemedText>
          <ThemedText style={styles.aboutUsTitle}>Join Us</ThemedText>
          <ThemedText style={styles.aboutUsText}>
            We are committed to building a future of fairness, and we invite you to join us in this movement. Together, we can create a more just and empowering workplace for all.
          </ThemedText>
        </View>
      </ScrollView>

    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#041e42ff' },

  settingsHeader: { 
    position: "absolute", 
    top: 40, 
    left: 20, 
    zIndex: 10 
  },

  profileHeader: { 
    position: "absolute", 
    top: 40, 
    right: 20, 
    zIndex: 10 
  },

  iconButton: {
    padding: 10,
  },

  scrollContent: {
    alignItems: "center",
    paddingVertical: 20,
  },

  content: { 
    justifyContent: "center", 
    alignItems: "center", 
  },

  logo: { 
    width: 400, 
    height: 200, 
    resizeMode: "contain", 
    marginBottom: 20 
  },

  descriptionBox: { 
    backgroundColor: "#F67E7D", 
    padding: 15, 
    borderRadius: 10, 
    width: "80%", 
    alignItems: "center", 
    marginBottom: 20,
    
  },

  descriptionText: { 
    color: "black", 
    textAlign: "center" ,
    fontFamily: 'PlayfairDisplay-SemiBold',
  },

  aboutUsBox: {
    backgroundColor: "#F67E7D",
    padding: 20,
    borderRadius: 10,
    width: "85%",
    marginBottom: 30,
  },

  aboutUsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
    textAlign: "center",
    fontFamily: 'PlayfairDisplay-SemiBold',
  },

  aboutUsText: {
    fontSize: 16,
    color: "black",
    textAlign: "center",
    marginBottom: 10
  },
});
