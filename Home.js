import React,{useState} from 'react';
import AppContext from './AppContext';
import CreatePlayer from './Player';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';



const Home = ({navigation}) => {
  const context = React.useContext(AppContext);
  
  const [player1,setPlayer1Name] = useState("Player 1");
  const [player2,setPlayer2Name] = useState("Player 2");


  return (
    <View style={styles.screen}>
      <CreatePlayer
      //player displays the title and default value
        player = {"Player 1"}
      //setPlayerName will alter the default value of player's name if changed
        setPlayerName = {setPlayer1Name}
      />
      
      <CreatePlayer
        player = {"Player 2"}
        setPlayerName = {setPlayer2Name}
      />

      {
      //If player is empty string then defaults back to Player #
      player1.trim().length === 0 && setPlayer1Name("Player 1")}
      {player2.trim().length === 0 && setPlayer1Name("Player 2")}

      <View style = {styles.buttonsContainer}>
        <Pressable style = {styles.button} onPress = {()=> {navigation.navigate("Game", {player1,player2})}}>
          <Text style={styles.button}>Start Game</Text>
        </Pressable>
      </View>

      <View style = {styles.buttonsContainer}>
        <Pressable style = {styles.button} onPress = {()=> {navigation.navigate("Leaderboard")}}>
            <Text style={styles.button} >Leaderboard</Text>
          </Pressable>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    width: '100%',
  },
  taskItem: { 
    color: 'black'
  },
  buttonsContainer:{
    borderRadius:15,
    alignItems:'center',
    paddingBottom:20,
  },
  button:{
    fontSize:20,
    color:'#0E7AFE',
    fontFamily:'AlegreyaSC-Black'
  },
});

export default Home;
