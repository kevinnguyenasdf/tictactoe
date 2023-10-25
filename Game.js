import React,{useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const screen = Dimensions.get('window');
const SQUARESIZE = Math.floor(screen.width*0.3);

function calculateWinner(squares, update, setUpdate) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      if(update == null){
        setUpdate(true);
      }
      return squares[a];
    }
  }
  return null;
}

const Game = ({route,navigation}) =>{

  const [xIsNext, setXIsNext] = useState(false);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const {player1, player2} = route.params;
  const [player1Score,setPlayer1Score] = useState(0);
  const [player2Score,setPlayer2Score] = useState(0);
  const [update, setUpdate] = useState(null);

  const onSquarePress = (i)=> {
    const value = xIsNext ? 'X' : 'O';
    const newSquares = [...squares];
    if (newSquares[i] || calculateWinner(squares,update,setUpdate)) {
      return;
    }
    newSquares[i] = value;

    setXIsNext(!xIsNext);
    setSquares(newSquares);
  };

  
  const Square = ({onPress, value}) => (
    <TouchableOpacity style={styles.square} onPress={onPress}>
      <Text style={styles.squareText}>{value}</Text>
    </TouchableOpacity>
  );

  const Board = ({onSquarePress, squares}) => {
    const renderSquare = i => {
      return <Square value={squares[i]} onPress={() => onSquarePress(i)} />;
    };
    
    return (
      <View style = {styles.board}>
        <View style={styles.row}>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </View>
        
        <View style={styles.row}>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </View>
        
        <View style={styles.row}>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </View>
      </View>
    );
  };

  
  const winner = calculateWinner(squares,update, setUpdate);

  if(winner && update){
    if(winner == 'O'){
      setPlayer1Score(player1Score+1);
    }
    else if(winner == 'X'){
      setPlayer2Score(player2Score+1);
    }
    setUpdate(false);
  }

  return(
    <View style = {styles.screen}>

        <View style = {styles.playersPane}>
          
        <View style = {styles.leftText}>
          <Text>{player1}</Text>
          <Text>Score: {player1Score}</Text>
        </View>
        
        <View style = {styles.rightText}>
          <Text>{player2}</Text>
          <Text>Score: {player2Score}</Text>
        </View>

        </View>

        <SafeAreaView style={styles.container}>
          <Board squares={squares} onSquarePress={onSquarePress}/>
        </SafeAreaView>

        
        <View style = {styles.buttonsContainer}>
          <View>
            <TouchableOpacity
                  onPress={() => {setSquares(Array(9).fill(null)),setUpdate(null)}}
                  style={styles.button}>
                  <Text style={styles.buttonText}>New Game</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Pressable style = {styles.button} onPress = {()=> {navigation.reset({index:0,routes: [{name: 'Home'}]})}}>
                <Text style={styles.button}>Return</Text>
            </Pressable>
          </View>

        </View>

    </View>
);
};

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  buttonsContainer:{
    borderRadius:15,
    alignItems:'center',
    paddingBottom:20,
  },
  button:{
    fontSize: 15,
    color:'red',
  },
  container: {
    alignItems: 'center',
  },
  square: {
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: SQUARESIZE,
    height: SQUARESIZE,
  },
  squareText: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
  },
  row:{
    flexDirection: 'row',
  },
  buttonText: {
    fontSize:15,
    color:'#0E7AFE'
  },
  leftText: {
    textAlign: 'left'
  },
  rightText: {
    textAlign: 'right'
  },
  playersPane: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
  }
});

export default Game;