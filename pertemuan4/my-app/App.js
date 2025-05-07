import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Login from './Screens/login';
import SignUp from './Screens/SignUp';

export default function App() {
  // event handler function
  const handlePress = () => {
    Alert.alert('tombol ditekan', 'kamu menekan tombol.');
  };
  return (
    <View style={styles.container}>
      <Text>INFOKOM X INFOKOM SEBELAH</Text>
      <Button tittle="Tekan saya" onPress={handlePress}></Button>
      <Login />
      <SignUp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
