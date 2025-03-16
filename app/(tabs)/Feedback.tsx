import React, { useState, useEffect } from 'react';
import { Image, Text, StyleSheet, View, TouchableOpacity, ScrollView, TextInput, Animated, ActivityIndicator } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Link } from 'expo-router';
import * as Font from 'expo-font';
import { ThemedView } from '@/components/ThemedView';

export default function FeedbackScreen() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [animation] = useState(new Animated.Value(1));
  const [submitted, setSubmitted] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'PlayfairDisplay-SemiBold': require('../../assets/fonts/PlayfairDisplay-SemiBold.ttf'),
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

  const handleRating = (ratingValue: number) => {
    setRating(ratingValue);
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 1.2,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

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


    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.content}>
        
        {/* Logo Section */}
        <Image
          source={require('@/assets/images/logo.jpeg')}
          style={styles.logo}
        />
        {/* Feedback Form */}
        <View style={styles.feedbackCard}>
          <Text style={styles.feedbackText}>Share your feedback</Text>
          <Text style={styles.promptText}>Let us know how your experience went</Text>

          {/* Star Rating */}
          <View style={styles.starContainer}>
            {[1, 2, 3, 4, 5].map((ratingValue) => (
              <TouchableOpacity key={ratingValue} onPress={() => handleRating(ratingValue)}>
                <Animated.View style={{ transform: [{ scale: ratingValue === rating ? animation : 1 }] }}>
                  <FontAwesome5
                    name="star"
                    size={30}
                    color={ratingValue <= rating ? "#FFD700" : "#808080"}
                  />
                </Animated.View>
              </TouchableOpacity>
            ))}
          </View>

          {/* Text Input */}
          <TextInput
            style={styles.input}
            placeholder="Write your feedback here..."
            placeholderTextColor="#555"
            value={feedback}
            onChangeText={setFeedback}
            multiline
          />

          {/* Submit Button */}
          <TouchableOpacity
            style={[styles.submitButton, (rating === 0 || feedback.trim() === '') && styles.disabledButton]}
            disabled={rating === 0 || feedback.trim() === ''}
            onPress={() => setSubmitted(true)}
          >
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#041e42ff' },
  content: {
    flex: 1,
    backgroundColor: "#0B1F3B", 
    justifyContent: "center", 
    alignItems: "center",
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

  iconButton: {
    padding: 10,
  },

  logo: {
    width: 400,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },

  feedbackCard: {
    backgroundColor: "#FF6685",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 50,
    width: "80%",
  },

  feedbackText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    fontFamily: 'PlayfairDisplay-SemiBold',
  },

  promptText: {
    fontSize: 16,
    marginBottom: 10,
    color: 'black',
    textAlign: 'center',
  },

  starContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },

  input: {
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    textAlignVertical: 'top',
  },

  submitButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },

  submitText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  disabledButton: {
    backgroundColor: '#555',
  },

  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 30,
  },
});
