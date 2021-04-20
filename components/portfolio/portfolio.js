import React from "react"
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native"

export default function Portfolio(props){
    return(
        <View>
            <Text style={style.portfolio}>PORTFOLIO</Text>
            <View>
                <Image  style={style.coinmomo_logo} source={require("../../assets/coinmomo-logo.png")}/>
                <Text style={style.signintext}>SIGN IN TO VIEW YOUR PORTFOLIO</Text>
            </View>
            <View style={style.signin}>
                <TouchableOpacity onPress={()=>props.navigation.navigate("signin")}>
                    <Text style={style.signinButton}>SIGN IN</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>props.navigation.navigate("signup")}>
                    <Text style={style.signupButton} >Don't have an account?</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const style=StyleSheet.create({
    signin:{
        alignItems:"center"
    },
    signintext:{
        textAlign:"center",
        marginTop:20,
        fontWeight:"bold",
        fontFamily:"sans-serif"
    },
    portfolio:{
        height:30,
        marginTop:50,
        paddingTop:4,
        marginTop:50,
        fontWeight:"bold",
        marginLeft:30
    },
    signinButton:{
        textAlign:"center",
        marginTop:150,
        width:300,
        height:30,
        backgroundColor:"#8bdc84",
        alignItems:"center",
        paddingTop:5,
        color:"white",
        marginBottom:10
    },
    coinmomo_logo:{
        width:150,
        height:40,
        marginLeft:120,
        marginTop:150
    }
})
