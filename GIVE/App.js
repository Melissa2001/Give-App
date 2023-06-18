import React from 'react';
import { View } from 'react-native';
import AppNavigator from './src/AppNavigator';
import SingleOrg from './Shared/Organization/SingleOrg';
import { NativeBaseProvider } from 'native-base';
import { UserProvider } from './contexts/userContexts';

const App = () => {
  return (
    <NativeBaseProvider>
      <View style={{ flex: 1 }}>

        <UserProvider>
          <AppNavigator />
        </UserProvider>
      </View>
    </NativeBaseProvider>
  );
};
export default App;
