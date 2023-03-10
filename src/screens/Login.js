import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native'

class Login extends Component {
    state ={ 
        email: '',
        password: ''
    }
    login = () => {
        this.props.navigation.native('Profile')
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder='Email' style={styles.input}
                    autoFocu={true} keyboardType='email-addres'
                    value={this.state.email}
                    onChangeText={email => this.setState ({ email})} />
                    <TextInput placeholder='Senha' style={styles.input}
                    secureTextEntry={true} value={this.state.password}
                    onChangeText={password => this.setState ({ password})} />
                <TouchableOpacity onPress={this.login}>
                    <Text style={styles.buttomText}> Login </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>{}} style={styles.buttom}>
                    <Text style={styles.buttomText}> Criar nova conta... </Text>
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
        marginTop: 30,
        padding: 10,
        backgroundColor: '#000'
    },
    buttomText: {
        fontSize: 20,
        color: '#FFF'
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#eee',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
    }    
})

export default Login