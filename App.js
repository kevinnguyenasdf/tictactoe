import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppContext from './AppContext';
import Home from './Home';
import Leaderboard from './Leaderboard';
import Game from './Game';

const Stack = createNativeStackNavigator();

const App = () => { 
  const context = React.useContext(AppContext);
  const [scores, setScores] = useState([]);

  const contextValue = {
    scores,
    setScores,
  };

  const loadScoresFromStorage = async () =>{
    try{
      const storedScores = await AsyncStorage.getItem('scores');
      if(storedScores != null){
        setTasks(JSON.parse(storedScores));
      }
    }catch(error){
      console.error('Failed to load Scores.');
    }
  };

  const handleAddScore = async () => {
    try{
      AsyncStorage.setItem('scores', JSON.stringify(scores));
    }catch(error){
      console.error('Failed to save scores.');
    };
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

          <Stack.Screen 
          name="Leaderboard"
          component={Leaderboard} 
          />
          
          <Stack.Screen 
          name="Game"
          component={Game} 
          />
          


        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
 }

  export default App;
