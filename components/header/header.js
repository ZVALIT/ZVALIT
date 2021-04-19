import React from "react";
import { View,StyleSheet,Image,TouchableOpacity } from "react-native";

export default function Header(){
    return(
        <View style={style.header}>
            <TouchableOpacity>
                <View style={style.notification}>
                    <Image source={require('./bell.png')}/>
                </View>
            </TouchableOpacity>
            <View style={style.logo}>
                <Image style={{width:150,height:40}} source={require('./logo.png')}/>
            </View>
            <TouchableOpacity>
                <View style={style.search}>
                    <Image style={{width:22,height:22}} source={require('./search.png')}/>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const style=StyleSheet.create({
    notification:{
       paddingTop:25,
      paddingLeft:10
    },
    logo:{
        paddingTop:20,
       
    },
    header:{
        display:"flex",
        flexDirection:"row",
        backgroundColor:"white",
        height:100,
        marginTop:25,
        justifyContent:"space-between",
        borderBottomColor:"black",
        borderBottomWidth:1 
    },
    search:{
        paddingTop:28,
        paddingRight:15
  
    }

})