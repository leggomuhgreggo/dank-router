import { StatusBar } from 'expo-status-bar';
  import { Link } from 'expo-router';
  import { Text, View, Platform, StyleSheet } from 'react-native';
  
  export default function Screen() {
    return (
      <View style={styles.container}>
        <Text>menu</Text>

        <Text>Sibling Links</Text>
        <Link href="/(MainTabs)/(AccountTab)/account/info">(MainTabs)/(AccountTab)/account/info</Link>,<Link href="/(MainTabs)/(AccountTab)/account/payment-credit">(MainTabs)/(AccountTab)/account/payment-credit</Link>,<Link href="/(MainTabs)/(AccountTab)/account/addresses">(MainTabs)/(AccountTab)/account/addresses</Link>,<Link href="/(MainTabs)/(AccountTab)/account/orders">(MainTabs)/(AccountTab)/account/orders</Link>,<Link href="/(MainTabs)/(AccountTab)/account/favorites">(MainTabs)/(AccountTab)/account/favorites</Link>,<Link href="/(MainTabs)/(AccountTab)/account/refer-friend">(MainTabs)/(AccountTab)/account/refer-friend</Link>,<Link href="/(MainTabs)/(AccountTab)/account/dietary-restrictions">(MainTabs)/(AccountTab)/account/dietary-restrictions</Link>

        <Text>Child Links</Text>
        <Link href="/(MainTabs)/(AccountTab)/account/menu">(MainTabs)/(AccountTab)/account/menu</Link>
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
  