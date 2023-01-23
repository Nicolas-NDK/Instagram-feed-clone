import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Feed from './screens/Feed';
import AddPhoto from './screens/AddPhoto';
import Profile from './screens/Profile';
import Login from './screens/Login';
import Register from './screens/Register';

// const authRouter = createStackNavigator({
//     Login: { screen: Login, navigationOptions: { title: 'Login' }},
//     Register: { screen: Register, navigationOptions: { title: 'Register' }}
// },{
//         initialRouteName: 'Login'
// })

// const loginOrProfileRouter = createStackNavigator({
//     Profile: Profile,
//     Auth: authRouter
// }, {
//     initialRouteName: 'Profile'
// })

const Tab = createBottomTabNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        position: 'absolute',
                        backgroundColor: '#222',
                        borderTopWidth: 0,
                        borderRadius: 6,

                        // bottom: 14,
                        // left: 14,
                        // right: 14,
                        // elevation: 0,
                        // borderRadius: 5,
                        // height: 60,
                    }
                }}
            >
                <Tab.Screen
                    name="Feed"
                    component={Feed}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size, focused }) => {
                            if (focused) {
                                return <Ionicons name="home" size={30} color={color} />
                            }
                            return <Ionicons name="home-outline" size={30} color={color} />
                        }
                    }}

                />
                <Tab.Screen
                    name="Add Picture"
                    component={AddPhoto}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size, focused }) => {
                            if (focused) {
                                return <Ionicons name="camera" size={30} color={color} />
                            }
                            return <Ionicons name="camera-outline" size={30} color={color} />
                        }
                    }}

                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size, focused }) => {
                            if (focused) {
                                return <FontAwesome5 name="user-alt" size={30} color={color} />
                            }
                            return <FontAwesome5 name="user" size={30} color={color} />
                        }
                    }}

                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}