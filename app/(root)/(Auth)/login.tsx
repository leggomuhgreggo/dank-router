import { StatusBar } from 'expo-status-bar';
  import { Link } from 'expo-router';
  import { Text, View, Platform, StyleSheet } from 'react-native';
  
  export default function Screen() {
    return (
      <View style={styles.container}>
        <Text>login</Text>

        <Text>Sibling Links</Text>
        <Link href="/(root)/(Auth)/join">(Auth)/join</Link>,<Link href="/(root)/(Auth)/forgot-password">(Auth)/forgot-password</Link>

        <Text>Child Links</Text>
        <Link href="/(root)/(Auth)/login">(Auth)/login</Link>
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
  