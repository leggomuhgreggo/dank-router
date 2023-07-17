import { StatusBar } from 'expo-status-bar';
  import { Link } from 'expo-router';
  import { Text, View, Platform, StyleSheet } from 'react-native';
  
  export default function Screen() {
    return (
      <View style={styles.container}>
        <Text>[paymentMethodId]</Text>

        <Text>Sibling Links</Text>
        <Link href="/(Modal)/sweetpass/payment/add">(Modal)/sweetpass/payment/add</Link>

        <Text>Child Links</Text>
        
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
  