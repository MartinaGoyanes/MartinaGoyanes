import React, {Component} from 'react';
import { View, Text } from 'react-native';

class Profile extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
render(){

    return (
        <View>
            <Text>Pantalla de Profile</Text>
            <Pressable>
                onPress= {() => this.props.navigation.navigate("Login")}
                <Text> Desloguearse </Text>
            </Pressable>
        </View>

    );}
}
export default Profile
