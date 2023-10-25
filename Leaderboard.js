import React,{useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';

const Leaderboard = ({navigation}) => {

    return(
        <View style = {styles.screen}>
            <View style = {styles.buttonsContainer}>
                <Pressable style = {styles.button} onPress = {()=> {navigation.reset({index:0,routes: [{name: 'Home'}]})}}>
                    <Text style={styles.button}>Return</Text>
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
    buttonsContainer:{
        borderRadius:15,
        alignItems:'center',
        paddingBottom:20,
      },
      button:{
        fontSize: 15,
        color:'red',
      },
});

export default Leaderboard;