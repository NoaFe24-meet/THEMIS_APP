import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="Themis" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        {/* <Stack.Screen name="Services" options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="user" options={{ headerShown: false }}/>
        <Stack.Screen name="profile" options={{ headerShown: false }}/>
        <Stack.Screen name="sign" options={{ headerShown: false }}/> */}
        {/* <Stack.Screen name="ServeIntro" options={{ headerShown: false }}/>
        <Stack.Screen name="lessons" options={{ headerShown: false }}/>
        <Stack.Screen name="ai" options={{ headerShown: false }}/> */}

       
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>

  );
}
