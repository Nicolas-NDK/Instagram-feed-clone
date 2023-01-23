import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native'

class Register extends Component {
    state = {
        name: '',
        email: '',
        password: '',
    }

    render() {
        return (
            <View style={styles.container}>

                <TextInput placeholder='Nome' style={styles.input}
                autoFocus={true} value={this.state.name} 
                onChangeText={name => this.setState({ name })} />

                <TextInput placeholder='Email' style={styles.input}
                   keyboardType='email-eddress' value={this.state.email}
                   onChangeText={email => this.setState({ email})} />

                <TextInput placeholder='Senha' style={styles.input}
                secureTextEntry={true} value={this.state.password}
                onChangeText={password => this.setState({ password })} />
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Register')
             }} style={styles.buttom}>
                    <Text style={styles.buttomText}>Salvar</Text>
                </TouchableOpacity>
            </View>

       )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttom: {
        marginTop : 3,
        padding: 10,
        backgroundColor: '#000'
    },
    buttomText: {
        fontSize: 20,
        color: '#fff'
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
        paddingLeft: 15
    }
})

export default Register