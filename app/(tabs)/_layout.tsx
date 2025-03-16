import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { FontAwesome5 } from '@expo/vector-icons'; 
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: true,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="(home)"
        options={{
          title: 'Home',
          
          headerTitle: 'Themis', // Custom title in the header
          headerStyle: {
            backgroundColor: '#FF6685', // Background color of the header
          },
          headerTitleStyle: {
            color: 'white', // Color of the title in the header
            fontSize: 20, // Font size of the title
          },
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />

<Tabs.Screen
        name="(s)"
        options={{
          title: 'Services',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="cogs" size={size} color={color} /> // "cogs" icon for services
          ),
          
          headerTitle: 'Services', // Custom title in the header
          headerStyle: {
            backgroundColor: '#FF6685', // Background color of the header
          },
          headerTitleStyle: {
            color: 'white', // Color of the title in the header
            fontSize: 20, // Font size of the title
          },
        }}
      />
      <Tabs.Screen
        name="Rating"
        options={{
          title: 'Rating', // Title for the header

          headerTitle: 'Rate & Review', // Custom title in the header
          headerStyle: {
            backgroundColor: '#FF6685', // Background color of the header
          },
          headerTitleStyle: {
            color: 'white', // Color of the title in the header
            fontSize: 20, // Font size of the title
          },
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="star" size={size} color={color} /> // "star" icon for ratings
          ),
          
        }}

      />
      <Tabs.Screen
        name="Feedback"
        options={{
          title: 'Feedback', // Title for the header
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
          headerTitle: 'FeedBack', // Custom title in the header
          headerStyle: {
            backgroundColor: '#FF6685', // Background color of the header
          },
          headerTitleStyle: {
            color: 'white', // Color of the title in the header
            fontSize: 20, // Font size of the title
          },
        }}
      />
    </Tabs>
  );
}
