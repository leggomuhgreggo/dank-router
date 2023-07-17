import { StatusBar } from 'expo-status-bar';
  import { Link } from 'expo-router';
  import { Text, View, Platform, StyleSheet } from 'react-native';
  
  export default function Screen() {
    return (
      <View style={styles.container}>
        <Text>membership</Text>

        <Text>Sibling Links</Text>
        

        <Text>Child Links</Text>
        <Link href="/(root)/(MainTabs)/(AccountTab)/account/sweetpass/membership">(MainTabs)/(AccountTab)/account/sweetpass/membership</Link>
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
  