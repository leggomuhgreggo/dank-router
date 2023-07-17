import { StatusBar } from 'expo-status-bar';
  import { Link } from 'expo-router';
  import { Text, View, Platform, StyleSheet } from 'react-native';
  
  export default function Screen() {
    return (
      <View style={styles.container}>
        <Text>benefits</Text>

        <Text>Sibling Links</Text>
        <Link href="/(root)/(Modal)/sweetpass/upgrade">(Modal)/sweetpass/upgrade</Link>,<Link href="/(root)/(Modal)/sweetpass/checkout">(Modal)/sweetpass/checkout</Link>

        <Text>Child Links</Text>
        <Link href="/(root)/(Modal)/sweetpass/benefits">(Modal)/sweetpass/benefits</Link>
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
  