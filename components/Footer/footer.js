import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";
import { Entypo,  MaterialCommunityIcons, FontAwesome, Feather } from '@expo/vector-icons'; 

const screenHeight = Math.round(Dimensions.get("window").height);
const Footer = () => {
    return (
        <View style={style.Footer}>
            <View style={style.market_logo}>
                <TouchableOpacity>
                    <Entypo name="menu" size={27} color="white" />  
                    <Text style={style.footer_icon_text}>Market</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                    <MaterialCommunityIcons style={style.portfolio_icon} name="account" size={27} color="white" />
                    <Text style={style.footer_icon_text}>Portfolio</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                    <Feather style={style.search_icon} name="search" size={24} color="white" />
                    <Text style={style.footer_icon_text}>Search</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                    <FontAwesome style={style.explore_icon} name="wpexplorer" size={27} color="white" />
                    <Text style={style.footer_icon_text}>Explore</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <View style={style.more}>
                    <Feather name="more-horizontal" size={27} color="white" />
                    <Text style={style.footer_icon_text}>More</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const style = StyleSheet.create({
    Footer: {
        backgroundColor: "#5142a9",
        marginTop: screenHeight-190,
        paddingTop: 10,
        paddingBottom: 19,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    market_logo: {
        paddingLeft: 15
    },
    more: {
        paddingRight: 15
    },
    footer_icon_text: {
        color: "white"
    },
    portfolio_icon:{
        marginLeft:10
    },
    search_icon:{
        marginTop:2,
        marginLeft:3
    },
    explore_icon:{
        marginLeft:7
    }
})

export default Footer;