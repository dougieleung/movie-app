import { NativeBaseProvider } from 'native-base';
import AppStack from './src/components/stacks/AppStack.js';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  return (
    <>
    <NativeBaseProvider>
      <AppStack />
      <StatusBar style='light' />
    </NativeBaseProvider>
    </>
  )
}

export default App;


