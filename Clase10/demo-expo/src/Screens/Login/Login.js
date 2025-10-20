import React, {Component} from 'react';
import { View, Text , Pressable} from 'react-native';


class Login extends Component {
    constructor(props){
        super(props);
        this.state ={

        }
    }
    

render(){
  return (
    <View>
      <Text>Formulario de login</Text>
      <Pressable onPress= { () =>this.props.navigation.navigate("Register")}>
            
            <Text> Ir al Registro </Text>
        </Pressable>
        <Pressable onPress= { () =>this.props.navigation.navigate("HomeMenu")}>
            
            <Text> Entrar en la app</Text>
        </Pressable> 
        
    </View>
  );}
}

export default Login
