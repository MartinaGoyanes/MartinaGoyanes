import React, { Component } from 'react';
import { Pressable } from 'react-native';
import { View, Text, TextInput } from 'react-native';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
        }
    }

    onSubmit() {
        console.log('Email:', this.state.email);
        console.log('Username:', this.state.username);
        console.log('Password:', this.state.password);
    }

        render(){
            return (
                <View>
                    <Text>Formulario de registro</Text>

                    <TextInput
                        keyboardType="email-address"
                        placeholder="Email"
                        value={this.state.email}
                        onChangeText={(text) => this.setState({ email: text })}
                    />

                    <TextInput
                        placeholder="Nombre de usuario"
                        value={this.state.username}
                        onChangeText={(text) => this.setState({ username: text })}
                    />

                    <TextInput
                        placeholder="Contraseña"
                        secureTextEntry={true}
                        value={this.state.password}
                        onChangeText={(text) => this.setState({ password: text })}
                    />

                    <Pressable onPress={() => this.onSubmit()}>
                        <Text>Registrate</Text>
                    </Pressable>

                    <Pressable onPress={() => this.props.navigation.navigate("Login")}>
                        <Text> Ir al Login </Text>
                    </Pressable>
                </View>
            );
        }
    
}
export default Register
