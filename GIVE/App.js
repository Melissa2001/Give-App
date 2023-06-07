import React from 'react';
import { View } from 'react-native';
import AppNavigator from './src/AppNavigator';
import SingleOrg from './Shared/Organization/SingleOrg';
import { NativeBaseProvider } from 'native-base';


const App = () => {
  return (
    <NativeBaseProvider>
      <View style={{ flex: 1 }}>
  
  <AppNavigator />
</View>
    </NativeBaseProvider>
    
  );
}

export default App;
