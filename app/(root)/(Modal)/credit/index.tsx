import { StatusBar } from 'expo-status-bar';
  import { Link } from 'expo-router';
  import { Text, View, Platform, StyleSheet } from 'react-native';
  
  export default function Screen() {
    return (
      <View style={styles.container}>
        <Text>index</Text>

        <Text>Sibling Links</Text>
        <Link href="/(root)/(Modal)/credit/add">(Modal)/credit/add</Link>,<Link href="/(root)/(Modal)/credit/scan">(Modal)/credit/scan</Link>,<Link href="/(root)/(Modal)/credit/">(Modal)/credit/</Link>

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
  