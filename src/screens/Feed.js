import React, {Component} from "react";
import { StyleSheet, FlatList, View } from "react-native";
import Header from "../components/Header";
import Post from "../components/Post"

class Feed extends Component {
    state = {
        posts: [{
            id: Math.random(),
            nickname: 'NDK',
            email: 'nickquintanilha86@gmail.com',
            image: require('../../assets/logo/postone.jpg'),
            comments: [{
                nickname: 'Giovana Quintanilha',
                comment: 'vou colcar no meu '
            },{ 
                nickname: 'Nicole Quintanilha',
                comment: 'eu tambem '
            }]
        },{
            id: Math.random(),
            nickname: 'Pudim',
            email: 'nickquintanilha85@gmail.com',
            image: require('../../assets/logo/posttwo.png'),
            comments: []
        }]
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList 
                data={this.state.posts}
                keyExtractor={item => `${item.id}`}
                renderItem={({item}) => 
                <Post key={item.id} {...item} />} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    }
})

export default Feed