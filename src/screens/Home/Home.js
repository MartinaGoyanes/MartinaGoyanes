
import {View,Text, Pressable, StyleSheet} from "react-native";
import React, { Component } from "react";
import Contador from "../../components/Contador";


class Home extends Component{

    saludar(){
        console.log("me clickearon");
        
    }

    render(){

    return(
        <View style={styles.container}>
            <Text> Hola Mundo </Text>
            <Pressable style={styles.boton} onPress={() => this.saludar()}>
                <Text style={styles.textoBoton}>Clickeame!</Text>
            </Pressable>
            <Contador/>
        </View>
        
    );
    }
}

const styles = StyleSheet.create({
    container: {
     
        alignItems: "center",
        textAlign: "center",
        padding: 10,
    },
    boton:{
        padding: 4,
        backgroundColor: "#ccc",
        marginBottom: 10,
        borderRadius: 4,
    },
    textoBoton:{
        fontWeight: "bold",
    }
})

export default Home;
