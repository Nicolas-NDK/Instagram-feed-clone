import React, { Component } from 'react'
import { 
    StyleSheet,
    Text,
    View,
    Platform,
    Image
} from 'react-native'
import icon from '../../assets/logo/logo.png'
import Billabong from '../../assets/fonts/Billabong.ttf'

class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={icon} style={styles.image} />
                    <Text style={styles.title}> Instagram </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop:  20,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#BBB',
        width: '100%', 
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 40,
        width: 40,
        resizeMode: 'contain',
    },
    title: {
        colort: '#000',
        fontWeight: 'bold',
        height: 40,
        fontSize: 28
    }
})

export default Header