import { Image, StyleSheet, View, TouchableOpacity, ActivityIndicator } from 'react-native';
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

      {/* Logo and Description Section */}
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

        {/* Sign In Button */}
        <Link href="/signIn" asChild>
          <TouchableOpacity style={styles.signInButton}>
            <ThemedText style={styles.signInButtonText}>Sign In</ThemedText>
          </TouchableOpacity>
        </Link>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#041e42ff' },

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

  content: { 
    flex: 1, 
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
    alignItems: "center" ,
  },
  descriptionText: { 
    color: "black", 
    textAlign: "center",
    fontFamily: 'PlayfairDisplay-SemiBold',
    fontSize: 20,
    lineHeight: 35,
  },
  
  /* Sign In Button */
  signInButton: {
    marginTop: 20,
    backgroundColor: "#FF6685",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  signInButtonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: 'PlayfairDisplay-SemiBold',
  },
});
