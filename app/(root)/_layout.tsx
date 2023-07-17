import { Stack } from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(MainTabs)',
};


export default function RootLayoutNav() {
  return (
      <Stack>
        <Stack.Screen name="(MainTabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(Modal)/checkout" options={{ presentation: 'modal' }} />
        <Stack.Screen name="(Auth)" options={{ presentation: 'modal' }} />
        <Stack.Screen name="(Error)" options={{ presentation: 'modal' }} />
      </Stack>
  );
}
