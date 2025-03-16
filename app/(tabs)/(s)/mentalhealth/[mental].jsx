import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function MentalSupport() {
  const [articleIndex, setArticleIndex] = useState(0);

  const articles = [
    "Asking for what you deserve isn’t just about money—it’s about recognizing your value. Every step you take toward fair pay is a step toward self-respect and empowerment. If the first try doesn’t work, try again. Growth comes from persistence, and you are capable of achieving more than you think. Keep pushing, keep learning, and never settle for less than you're worth.",
    "Your self-worth is not measured by your paycheck but by your confidence and determination. Stand firm, trust yourself, and demand the respect you deserve in every negotiation.",
    "Fear of rejection holds many back from negotiating, but remember: success comes to those who ask. The worst they can say is no, but every 'no' brings you closer to the 'yes' you deserve.",
    "Fair pay is not a privilege; it’s a right. When you negotiate, you are not just improving your own financial future but also paving the way for others who follow in your footsteps."
  ];

  const handleNextArticle = () => {
    setArticleIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };

  const handlePrevArticle = () => {
    setArticleIndex((prevIndex) => (prevIndex - 1 + articles.length) % articles.length);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.settingsHeader}>
        <Link href="/user/[setting]" asChild>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome5 name="cog" size={24} color="white" />
          </TouchableOpacity>
        </Link>
      </View>

      <View style={styles.profileHeader}>
        <Link href="/[userprofile]" asChild>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome5 name="user-circle" size={24} color="white" />
          </TouchableOpacity>
        </Link>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Image source={require('@/assets/images/logo.jpeg')} style={styles.logo} />
        
        <View style={styles.box}>
          <Text style={styles.subtitle}>Your Worth, Your Pay, Your Future</Text>
        </View>

        <View style={styles.articleBox}>
          <View style={styles.articleHeader}>
            <TouchableOpacity onPress={handlePrevArticle}>
              <FontAwesome5 name="chevron-left" size={18} color="#000" />
            </TouchableOpacity>
            <Text style={styles.articleTitle}>Article {articleIndex + 1}</Text>
            <TouchableOpacity onPress={handleNextArticle}>
              <FontAwesome5 name="chevron-right" size={18} color="#000" />
            </TouchableOpacity>
          </View>

          <Text style={styles.articleText}>{articles[articleIndex]}</Text>
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
  content: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 400,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  box: {
    backgroundColor: "#FF6685",
    padding: 20,
    borderRadius: 10,
    width: "100%",
    marginBottom: 20,
    alignItems: "center",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  articleBox: {
    backgroundColor: "#FF6685",
    padding: 20,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  articleHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    width: "100%",
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    flex: 1,
  },
  articleText: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
  },
});