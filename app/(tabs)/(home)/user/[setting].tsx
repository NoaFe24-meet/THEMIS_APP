import React, { useState } from "react";
import { View, StyleSheet, Switch, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Collapsible } from "@/components/Collapsible";
import { Link } from "expo-router";

const Settings = () => {
  const navigation = useNavigation();
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemedView style={styles.container}>
      {/* Header Bar with Settings Title & Profile Icon on Right */}
      <View style={styles.header}>
        <ThemedText type="title" style={styles.headerText}>SETTINGS</ThemedText>
        <Link href="/[userprofile]" asChild>
          <TouchableOpacity>
            <FontAwesome5 name="user-circle" size={24} color="white" />
          </TouchableOpacity>
        </Link>
      </View>

      {/* Settings Content */}
      <ThemedView style={styles.settingsContainer}>
        <Collapsible title="Account Settings">
          <TouchableOpacity style={styles.item}>
            <ThemedText>Edit Profile</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <ThemedText>Change Password</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <ThemedText>Change Type of User</ThemedText>
          </TouchableOpacity>
        </Collapsible>

        <Collapsible title="Preferences">
          <View style={styles.toggleContainer}>
            <ThemedText>Dark Mode</ThemedText>
            <Switch value={darkMode} onValueChange={setDarkMode} />
          </View>
        </Collapsible>

        <Collapsible title="More">
          <Link href="/Themis" asChild>
            <TouchableOpacity style={styles.item}>
              <ThemedText>About Us</ThemedText>
            </TouchableOpacity>
          </Link>

          <TouchableOpacity style={styles.item}>
            <ThemedText>Privacy Policy</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <ThemedText>Terms and Conditions</ThemedText>
          </TouchableOpacity>
        </Collapsible>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#041e42ff', paddingTop: 40 },
  
  /* Header Bar - Profile Icon on Right */
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
  
  settingsContainer: { padding: 20 },
  item: { 
    paddingVertical: 10, 
    backgroundColor: "#F67E7D", 
    padding: 15, 
    borderRadius: 10, 
    marginBottom: 10,
  },
  
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#F67E7D", 
    padding: 15, 
    borderRadius: 10, 
  },
});

export default Settings;
