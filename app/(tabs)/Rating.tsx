import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

// Dummy Data for Companies
const companies = [
  { id: "1", name: "Company A", rating: 4, logo: "https://via.placeholder.com/50" },
  { id: "2", name: "Company B", rating: 5, logo: "https://via.placeholder.com/50" },
  { id: "3", name: "Company C", rating: 4, logo: "https://via.placeholder.com/50" },
  { id: "4", name: "Company D", rating: 3, logo: "https://via.placeholder.com/50" },
  { id: "5", name: "Company E", rating: 5, logo: "https://via.placeholder.com/50" },
];

export default function Ratings() {
  const [reviewText, setReviewText] = useState("");
  const [reviewsPerCompany, setReviewsPerCompany] = useState<{ [key: string]: string[] }>(
    companies.reduce((acc, company) => {
      acc[company.id] = [];
      return acc;
    }, {} as { [key: string]: string[] })
  );
  
  const [currentReviewIndex, setCurrentReviewIndex] = useState<number | null>(null);

  const handleSubmitReview = (companyId: string) => {
    if (reviewText.trim().length > 0) {
      // Add review to the specific company
      setReviewsPerCompany((prevReviews) => ({
        ...prevReviews,
        [companyId]: [...prevReviews[companyId], reviewText.trim()],
      }));
      setReviewText("");
      setCurrentReviewIndex(null); // Close review input after submission
    }
  };

  const toggleReviewInput = (index: number) => {
    
    if (currentReviewIndex === index) {
      setCurrentReviewIndex(null); 
    } else {
      setCurrentReviewIndex(index); 
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: true }} />

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
        {companies.map((company, index) => (
          <View key={company.id} style={styles.centerContainer}>
            <View style={styles.card}>
              <Text style={styles.companyName}>{company.name}</Text>
              <Text style={styles.stars}>{"★".repeat(company.rating)}</Text>

              {/* Write review button */}
              <TouchableOpacity onPress={() => toggleReviewInput(index)}>
                <Text style={styles.link}>Write review as employee</Text>
              </TouchableOpacity>

              {/* Review Input - Show only for the selected company */}
              {currentReviewIndex === index && (
                <View style={styles.reviewInputContainer}>
                  <TextInput
                    style={styles.reviewInput}
                    placeholder="Enter your review..."
                    placeholderTextColor="#555"
                    value={reviewText}
                    onChangeText={setReviewText}
                    multiline
                  />
                  <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => handleSubmitReview(company.id)}
                  >
                    <Text style={styles.submitButtonText}>Submit</Text>
                  </TouchableOpacity>
                </View>
              )}

              {/* Display Reviews */}
              {reviewsPerCompany[company.id].length > 0 && (
                <View style={styles.reviewsContainer}>
                  <Text style={styles.reviewsHeader}>Employee Reviews:</Text>
                  {reviewsPerCompany[company.id].map((rev, index) => (
                    <Text key={index} style={styles.reviewText}>
                      {rev}
                    </Text>
                  ))}
                </View>
              )}

              <Image source={{ uri: company.logo }} style={styles.logo} />
            </View>
          </View>
        ))}
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
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  centerContainer: {
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  card: {
    backgroundColor: "#FF6685",
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 10,
    width: 300,
    alignItems: "center",
  },
  companyName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  stars: {
    fontSize: 16,
    color: "#000",
    marginVertical: 5,
  },
  link: {
    color: "#000",
    textDecorationLine: "underline",
    marginVertical: 5,
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 10,
    backgroundColor: "#fff",
  },
  reviewInputContainer: {
    width: "100%",
    marginVertical: 10,
    alignItems: "center",
  },
  reviewInput: {
    width: "100%",
    height: 80,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    textAlignVertical: "top",
    marginBottom: 5,
  },
  submitButton: {
    backgroundColor: "#FFD1DC",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  reviewsContainer: {
    marginTop: 10,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
  },
  reviewsHeader: {
    fontWeight: "bold",
    marginBottom: 5,
    color: "#000",
  },
  reviewText: {
    fontSize: 14,
    color: "#000",
    marginBottom: 3,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
  },
});
