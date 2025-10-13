
import {View,Text, Pressable} from "react-native";
import React, { Component } from "react";

class Card extends Component{

    saludar(){
        console.log("me clickearon");
        
    }

    render(){

    return(
        <View>
            <Text> Hola Mundo </Text>
            <Pressable onPress={() => this.saludar()}>
                <Text>Clickeame!</Text>

            </Pressable>
        </View>
    );
    }
}

export default Card;
