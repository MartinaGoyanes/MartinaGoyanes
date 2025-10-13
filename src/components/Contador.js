import {View,Text, Pressable} from "react-native";
import React, { Component } from "react";

class Contador extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador : 0
        };
    }


aumentarContador(){
    this.setState ({
      contador : this.state.contador + 1  
    });
}

render(){
    return(
        <View>
        <Text> Cantidad de clicks: {this.state.contador}</Text>
        <Pressable onPress={() => this.aumentarContador()}>
            <Text>Clickeame!</Text>
        </Pressable>
        </View>
    )
}

}

export default Contador; 