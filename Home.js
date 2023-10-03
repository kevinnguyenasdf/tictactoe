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
  const[winsP1,setWinsP1] = useState(0);
  const[winsP2,setWinsP2] = useState(0);
  const[lossP1,setLossP1] = useState(0);
  const[lossP2,setLossP2] = useState(0);



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
      <Pressable onPress = {()=> {console.log(player1,player2)}}>
        <Text style={styles.button}>Start Game</Text>
      </Pressable>
      <View><Text style = {styles.space}>{''}</Text></View>
      <Pressable onPress = {()=> {console.log("Pressed Leaderboards")}}>
        <Text style={styles.button} >Leaderboards</Text>
      </Pressable>

    </View>

    </View>
    
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:30,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'grey',
    flex:1,
    borderWidth: 1,
    borderRadius: 15,
    marginVertical: 10,
    padding: 10
  },
  taskItem: { 
    color: 'black'

  },

  buttonsContainer:{
    borderRadius:15,
    alignItems:'center'
  },
  button:{
    fontSize:20,
    color:'#0E7AFE',
  },
  space:{
    paddingBottom:30,
  }
});

export default Home;
