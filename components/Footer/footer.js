import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";
import { Entypo,  MaterialCommunityIcons, FontAwesome, Feather } from '@expo/vector-icons'; 

// manipulating screen height for Footer placement
const screenHeight = Math.round(Dimensions.get("window").height);
const Footer = () => {
    return (
        <View style={style.Footer}>
            <View style={style.market_logo}>
                <TouchableOpacity>
                    <Entypo style={style.market_icon} name="menu" size={27} color="white" />  
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
    );
}
const style = StyleSheet.create({
    Footer: {
        backgroundColor: "#5142a9",    
        paddingTop: 10,
        paddingBottom: 19,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        bottom:0,
        position: 'absolute',
        width: '100%'
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
    },
    market_icon:{
        marginLeft:5
    }
});

export default Footer;