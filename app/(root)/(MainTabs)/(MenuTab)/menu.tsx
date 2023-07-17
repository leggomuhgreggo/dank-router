import { StatusBar } from 'expo-status-bar';
  import { Link } from 'expo-router';
  import { Text, View, Platform, StyleSheet } from 'react-native';
  
  export default function Screen() {
    return (
      <View style={styles.container}>
        <Text>menu</Text>

        <Text>Sibling Links</Text>
        <Link href="/(root)/(MainTabs)/(MenuTab)/locations">(MainTabs)/(MenuTab)/locations</Link>

        <Text>Child Links</Text>
        <Link href="/(root)/(MainTabs)/(MenuTab)/menu">(MainTabs)/(MenuTab)/menu</Link>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  