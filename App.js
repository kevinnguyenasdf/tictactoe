import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppContext from './AppContext';
import Home from './Home';
const Stack = createNativeStackNavigator();

const App = () => { 
  const context = React.useContext(AppContext);
  const [leaderboards,setLeaderboards] = useState([]);

  const contextValue = {
    leaderboards,
    setLeaderboards
  };

  return (
    
    <AppContext.Provider value={contextValue}>
      <NavigationContainer>
        <Stack.Navigator 
        initialRouteName='Home'
        screenOptions = {{headerShown: false}}
        >

          <Stack.Screen 
          name="Home" 
          component={Home} 
          />


        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
 }

  export default App;
