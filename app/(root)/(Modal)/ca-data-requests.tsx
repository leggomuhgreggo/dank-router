import { StatusBar } from 'expo-status-bar';
  import { Link } from 'expo-router';
  import { Text, View, Platform, StyleSheet } from 'react-native';
  
  export default function Screen() {
    return (
      <View style={styles.container}>
        <Text>ca-data-requests</Text>

        <Text>Sibling Links</Text>
        <Link href="/(root)/(Modal)/checkout">(Modal)/checkout</Link>,<Link href="/(root)/(Modal)/scan-to-pay">(Modal)/scan-to-pay</Link>,<Link href="/(root)/(Modal)/scan-in-store">(Modal)/scan-in-store</Link>,<Link href="/(root)/(Modal)/dietary-restrictions">(Modal)/dietary-restrictions</Link>

        <Text>Child Links</Text>
        <Link href="/(root)/(Modal)/ca-data-requests">(Modal)/ca-data-requests</Link>
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
  