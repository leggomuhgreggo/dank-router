import { StatusBar } from 'expo-status-bar';
  import { Link } from 'expo-router';
  import { Text, View, Platform, StyleSheet } from 'react-native';
  
  export default function Screen() {
    return (
      <View style={styles.container}>
        <Text>scan-in-store</Text>

        <Text>Sibling Links</Text>
        <Link href="/(Modal)/ca-data-requests">(Modal)/ca-data-requests</Link>,<Link href="/(Modal)/checkout">(Modal)/checkout</Link>,<Link href="/(Modal)/scan-to-pay">(Modal)/scan-to-pay</Link>,<Link href="/(Modal)/dietary-restrictions">(Modal)/dietary-restrictions</Link>

        <Text>Child Links</Text>
        <Link href="/(Modal)/scan-in-store">(Modal)/scan-in-store</Link>
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
  