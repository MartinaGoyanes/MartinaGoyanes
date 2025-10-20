import {View,Text, Pressable, StyleSheet} from "react-native";
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
        <View style={styles.container}>
        <Text> Cantidad de clicks: {this.state.contador}</Text>
        <Pressable style={styles.boton} onPress={() => this.aumentarContador()}>
            <Text style={styles.textoBoton}>Clickeame!</Text>
        </Pressable>
        </View>
    )
}

}

const styles = StyleSheet.create({
    container:{
        marginVertical: 5,
        alignItems: "center",
    },
    boton:{
        padding: 7,
    backgroundColor: "rgba(0, 255, 0, 0.5)",
    marginBottom: 10,
    borderRadius: 4,
    },
    textoBoton:{
        fontWeight: "bold",
    }
})

export default Contador; 