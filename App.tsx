import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ModalProvider } from "react-native-use-modal";
import MainNavigator from './src/navigations/mainnavigator';


export default function App() {
  return (
    <ModalProvider>
      <SafeAreaProvider>
        <MainNavigator></MainNavigator>
      </SafeAreaProvider>
    </ModalProvider>
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
