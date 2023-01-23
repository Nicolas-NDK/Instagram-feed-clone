import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import { Gravatar } from 'react-native-gravatar'

class Profile extends Component {
    logout = () => {
        this.props.navigation.navigate('Auth')
    }

    render () {
        const options = { email: 'nickquintanilha84@gmail.com', secure: true }
        return (
            <View style={styles.container}>
                <Gravatar options={options} style={styles.avatar} />
                <Text style={styles.nickname}> Nicolas Quintanilha</Text>
                <Text style={styles.email}> nickquintanilha84@gmail.com </Text>
                <TouchableOpacity onPress={this.logout} style={styles.buttom}>
                    <Text style={styles.buttomText}>Sair</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 100
    },
    nickname: {
        marginTop: 30,
        fontSize: 30,
        fontWeight: 'bold'
    },
    email: {
        marginTop: 20,
        fontSize: 25
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#000'
    },
    buttomText: {
        fontSize: 20,
        color: '#fff',
    }
})

export default Profile