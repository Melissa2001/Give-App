import React from 'react';
import { View } from 'react-native';
import AppNavigator from './src/AppNavigator';
import SingleOrg from './Shared/Organization/SingleOrg';


const App = () => {
  return (
    <View style={{ flex: 1 }}>
  
      <AppNavigator />
    </View>
  );
}

export default App;
