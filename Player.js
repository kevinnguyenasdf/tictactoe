import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
  } from 'react-native';


  const CreatePlayer = ({player,setPlayerName}) => {
    return(
        <View style = {styles.screen}>
            <View style = {styles.inputContainer}>
                <Text>{player}</Text>
                <TextInput
                    style = {styles.input}
                    placeholder= {player}
                    onChangeText = {setPlayerName}
                    multiline = {true}
                    selectable = {true}
                />
            </View>
        </View>

    );

  };

  const styles = StyleSheet.create({
    screen: {
        padding: 50,
      },
      input: {
        width: '100%',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
      },
      inputContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
      },
  });

  export default CreatePlayer;