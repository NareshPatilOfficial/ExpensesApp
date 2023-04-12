import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import ScreensContainer from './screens/ScreensContainer';

export default function App() {
  return (
    <ScreensContainer />
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
