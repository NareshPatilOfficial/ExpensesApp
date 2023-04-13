import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import ScreensContainer from './screens/ScreensContainer';
import ExpensesContextProvider from './store/expense-context';

export default function App() {
  return (
    <ExpensesContextProvider>
      <StatusBar style='light'/>
      <ScreensContainer />
    </ExpensesContextProvider>
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
