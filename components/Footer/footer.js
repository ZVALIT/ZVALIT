import React from "react";
import { View,StyleSheet,Image, Text, TouchableOpacity, } from "react-native";
 export default function Footer(){
    return(
        <View style={style.Footer}>
            <View style={style.market_logo}>
                <TouchableOpacity>
                <Image style={{width:25,height:25,marginLeft:5}} source={require('./market.png')}/>
                <Text style={style.footer_icon_text}>Market</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                <Image style={{width:25,height:25,marginLeft:12}} source={require('./portfolio.png')}/>
                <Text style={style.footer_icon_text}>Portfolio</Text>
                </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity>
                <Image style={{width:25,height:25,marginLeft:5}} source={require('./search.png')}/>
                <Text style={style.footer_icon_text}>Search</Text>
            </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity>
                <Image style={{width:25,height:25,marginLeft:8}} source={require('./explore.png')}/>
                <Text style={style.footer_icon_text}>Explore</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity>
            <View style={style.more}>
                <Image style={{width:25,height:25,marginLeft:2}} source={require('./more.png')}/>
                <Text style={style.footer_icon_text}>More</Text>
            </View>
            </TouchableOpacity>
        </View>
    )
}
const style=StyleSheet.create({
    Footer:{
        backgroundColor:"#5142a9",
        marginTop:490,
        paddingTop:10,
        paddingBottom:19,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    market_logo:{
       paddingLeft:15
    },
    more:{
        paddingRight:15
    },
    footer_icon_text:{
      color:"white"
    }
})