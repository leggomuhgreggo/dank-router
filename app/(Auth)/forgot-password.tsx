import { StatusBar } from 'expo-status-bar';
  import { Link } from 'expo-router';
  import { Text, View, Platform, StyleSheet } from 'react-native';
  
  export default function Screen() {
    return (
      <View style={styles.container}>
        <Text>forgot-password</Text>

        <Text>Sibling Links</Text>
        <Link href="/(Auth)/login">(Auth)/login</Link>,<Link href="/(Auth)/join">(Auth)/join</Link>

        <Text>Child Links</Text>
        <Link href="/(Auth)/forgot-password">(Auth)/forgot-password</Link>
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
  