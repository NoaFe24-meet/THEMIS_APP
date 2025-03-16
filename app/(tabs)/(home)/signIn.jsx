import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, ScrollView } from "react-native";
import * as Font from "expo-font";
import { Link } from 'expo-router';
const EmployeePage = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'PlayfairDisplay-SemiBold': require("../../../assets/fonts/PlayfairDisplay-SemiBold.ttf"),
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

  const handleSubmit = () => {
    setError(""); // Clear previous errors
    if (!name || !username || !email || !password) {
      setError("All fields are required.");
      return;
    }
    console.log("Signing up with", { name, username, email, password });
    
  };

  return (

    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.card}>
        <Text style={styles.title}>Sign In</Text>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <Text style={styles.label}>Name</Text>
        <TextInput 
          style={styles.input} 
          value={name} 
          onChangeText={setName} 
          autoCapitalize="words"
          placeholder="Enter your name"
          placeholderTextColor="#B0B0B0"
        />

        <Text style={styles.label}>Username</Text>
        <TextInput 
          style={styles.input} 
          value={username} 
          onChangeText={setUsername} 
          autoCapitalize="none"
          placeholder="Enter your username"
          placeholderTextColor="#B0B0B0"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput 
          style={styles.input} 
          value={email} 
          onChangeText={setEmail} 
          keyboardType="email-address" 
          autoCapitalize="none"
          placeholder="Enter your email"
          placeholderTextColor="#B0B0B0"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput 
          style={styles.input} 
          value={password} 
          onChangeText={setPassword} 
          secureTextEntry
          placeholder="Enter your password"
          placeholderTextColor="#B0B0B0"
        />
        <Link href="/Themis" asChild>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        </Link>

        <Link href="/Themis" asChild>
        <TouchableOpacity style={styles.button} >
          <Text style={[styles.buttonText, styles.homeButtonText]}>Go Back to Home</Text>
        </TouchableOpacity>
        </Link>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0B1F3B",
    padding: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    width: "100%",
    maxWidth: 350,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#F67E7D",
    marginBottom: 15,
    fontFamily: 'PlayfairDisplay-SemiBold',
  },
  errorText: {
    color: "#F67E7D",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    color: "#041e42ff",
    marginBottom: 5,
    fontWeight: "600",
  },
  input: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#B0B0B0",
    borderRadius: 5,
    backgroundColor: "#ffffff",
    color: "#041e42ff",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#FF6685",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  homeButton: {
    backgroundColor: "#EAEBFF",
  },
  homeButtonText: {
    color: "#041e42ff",
  },
});

export default EmployeePage;
