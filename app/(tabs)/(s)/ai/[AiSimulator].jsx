import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

// API call function using fetch to OpenAI
async function query(data) {
  const response = await fetch("https://api.openai.com/v1/completions", {
    headers: {
      Authorization: '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', // Replace with your actual OpenAI API key
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      model: "gpt-4o", // Specify the model you want to use
      prompt: data.inputs,
      max_tokens: 150, // Customize token count based on how long you want the response
      temperature: 0.7, // Controls randomness (0.7 is typical for general conversation)
    }),
  });
  const result = await response.json();
  return result;
}

export default function AIScreen() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([{ text: "Hello, how can we help?", sender: "AI" }]);

  const sendMessage = async () => {
    if (message.trim() === "") return;
    setChat([...chat, { text: message, sender: "User" }]);
    setMessage(""); // Clear input

    try {
      // Make API call using the query function
      const aiResponse = await query({ inputs: message });

      // Assuming the AI response is in aiResponse.choices[0].text
      const responseText = aiResponse.choices && aiResponse.choices[0] ? aiResponse.choices[0].text : "Sorry, I couldn't generate a response.";
      
      setChat((prevChat) => [
        ...prevChat,
        { text: message, sender: "User" },
        { text: responseText, sender: "AI" },
      ]);
    } catch (error) {
      console.error("Error fetching from OpenAI API", error);
      setChat((prevChat) => [
        ...prevChat,
        { text: message, sender: "User" },
        { text: "Sorry, something went wrong. Please try again later.", sender: "AI" },
      ]);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Stack.Screen options={{ headerShown: false }} />
          
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

          {/* SCROLLABLE CHAT AREA */}
          <ScrollView contentContainerStyle={styles.chatContainer} keyboardShouldPersistTaps="handled">
            {chat.map((msg, index) => (
              <View key={index} style={msg.sender === "AI" ? styles.aiMessage : styles.userMessage}>
                <Text style={styles.messageText}>{msg.text}</Text>
              </View>
            ))}
          </ScrollView>

          {/* USER INPUT */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Ask your question..."
              placeholderTextColor="#000"
              value={message}
              onChangeText={setMessage}
              onFocus={() => setMessage("")} // Clears the placeholder when focused
            />
            <TouchableOpacity style={styles.sendButton} onPress={sendMessage} disabled={!message.trim()}>
              <FontAwesome5 name="paper-plane" size={18} color="#000" />
            </TouchableOpacity>
          </View>

          <StatusBar style="auto" />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  chatContainer: {
    flexGrow: 1,
    padding: 20,
    alignItems: "center",
  },
  aiMessage: {
    backgroundColor: "#FF6685",
    padding: 10,
    borderRadius: 10,
    width: "80%",
    marginBottom: 10,
  },
  userMessage: {
    backgroundColor: "#FFD1DC",
    padding: 10,
    borderRadius: 10,
    width: "80%",
    alignSelf: "flex-end",
    marginBottom: 10,
  },
  messageText: {
    fontSize: 16,
    color: "#000",
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "#FF6685",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    margin: 10,
    marginBottom: 80, // Prevents input from being hidden by the tab bar
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: "#000",
  },
  sendButton: {
    padding: 10,
  },
});
