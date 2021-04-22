import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FontAwesome, Ionicons  } from '@expo/vector-icons'; 

export default function Header() {
    return (
        <View style={style.header}>
            <TouchableOpacity>
                <View style={style.notification}>
                    <FontAwesome name='bell' size={24} color='orange' />
                </View>
            </TouchableOpacity>
            <View style={style.logo}>
                <Image style={style.coinmomoLogo} source={require('../../assets/logo.png')} />
            </View>
            <TouchableOpacity>
                <View style={style.search}>
                    <Ionicons name='md-search' size={24} color='black' />
                </View>
            </TouchableOpacity>
        </View>
    );
}
const style = StyleSheet.create({
    notification: {
        paddingTop: 25,
        paddingLeft: 10
    },
    logo: {
        paddingTop: 20
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 100,
        marginTop: 25,
        justifyContent: 'space-between',
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    search: {
        paddingTop: 28,
        paddingRight: 15
    },
    coinmomoLogo:{
        height:40,
        width:150
    }
});