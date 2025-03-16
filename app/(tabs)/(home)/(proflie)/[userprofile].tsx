import React from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";

const UserProfile = () => {

  return (
    <ThemedView style={styles.container}>
      {/* Header Bar with Profile Title & Settings Icon on Right */}
      <View style={styles.header}>
        <ThemedText type="title" style={styles.headerText}>Profile</ThemedText>
        <Link href="/user/setting" asChild>
          <TouchableOpacity>
            <FontAwesome5 name="cogs" size={24} color="white" />
          </TouchableOpacity>
        </Link>
      </View>

      {/* Profile Section */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.profileHeader}>
          <FontAwesome5 name="user-circle" size={100} color="#FF6685" />
          <ThemedText style={styles.username}>John Doe</ThemedText>
          <ThemedText style={styles.email}>johndoe@example.com</ThemedText>
        </View>

        {/* Account Details */}
        <ThemedView style={styles.detailsContainer}>
          <Link href="/user/account-info" asChild>
            <TouchableOpacity style={styles.item}>
              <ThemedText>Account Information</ThemedText>
            </TouchableOpacity>
          </Link>

          <Link href="/user/member-since" asChild>
            <TouchableOpacity style={styles.item}>
              <ThemedText>Member Since: January 2021</ThemedText>
            </TouchableOpacity>
          </Link>

          <Link href="/user/settings" asChild>
            <TouchableOpacity style={styles.item}>
              <ThemedText>Go to Settings</ThemedText>
            </TouchableOpacity>
          </Link>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#041e42ff', paddingTop: 40 },
  
  /* Header Bar - Settings Icon on Right */
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#F67E7D",
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  
  profileHeader: {
    alignItems: "center",
    marginTop: 40,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0B1F3B",
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    color: "#0B1F3B",
    marginTop: 5,
  },
  
  detailsContainer: {
    marginTop: 40,
    width: "100%",
    padding: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  
  item: { 
    paddingVertical: 10, 
    backgroundColor: "#F67E7D", 
    padding: 15, 
    borderRadius: 10, 
    marginBottom: 10,
  },
});

export default UserProfile;
