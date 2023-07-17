import { StatusBar } from 'expo-status-bar';
  import { Link } from 'expo-router';
  import { Text, View, Platform, StyleSheet } from 'react-native';
  
  export default function Screen() {
    return (
      <View style={styles.container}>
        <Text>select</Text>

        <Text>Sibling Links</Text>
        <Link href="/(root)/(Modal)/payment/list">(Modal)/payment/list</Link>

        <Text>Child Links</Text>
        <Link href="/(root)/(Modal)/payment/select">(Modal)/payment/select</Link>
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
  