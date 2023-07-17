import { StatusBar } from 'expo-status-bar';
  import { Link } from 'expo-router';
  import { Text, View, Platform, StyleSheet } from 'react-native';
  
  export default function Screen() {
    return (
      <View style={styles.container}>
        <Text>checkout</Text>

        <Text>Sibling Links</Text>
        <Link href="/(Modal)/sweetpass/benefits">(Modal)/sweetpass/benefits</Link>,<Link href="/(Modal)/sweetpass/upgrade">(Modal)/sweetpass/upgrade</Link>

        <Text>Child Links</Text>
        <Link href="/(Modal)/sweetpass/checkout">(Modal)/sweetpass/checkout</Link>
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
  