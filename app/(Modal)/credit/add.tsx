import { StatusBar } from 'expo-status-bar';
  import { Link } from 'expo-router';
  import { Text, View, Platform, StyleSheet } from 'react-native';
  
  export default function Screen() {
    return (
      <View style={styles.container}>
        <Text>add</Text>

        <Text>Sibling Links</Text>
        <Link href="/(Modal)/credit/scan">(Modal)/credit/scan</Link>,<Link href="/(Modal)/credit/">(Modal)/credit/</Link>

        <Text>Child Links</Text>
        <Link href="/(Modal)/credit/add">(Modal)/credit/add</Link>
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
  