import React from "react"
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native"
import { AntDesign } from '@expo/vector-icons';

export default class Signin extends React.Component{
    render(){
        return(
            <View>
                <View style={style.back}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("portfolio")}>
                        <AntDesign name="arrowleft" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={style.signintext}>SIGN IN</Text>
                </View>
                <View style={style.container}>
                    <View>
                        <Text style={style.text}>Email</Text>
                        <TextInput style={style.SigninInputText}></TextInput>
                    </View>
                    <View>
                        <Text style={style.text}>Password</Text>
                        <TextInput secureTextEntry style={style.SigninInputText}></TextInput>
                    </View>
                    <View>
                        <Text style={style.forgotpassword}>Forgot Password?</Text>
                    </View>
                </View>
                <View style={style.login}>
                    <TouchableOpacity>
                        <Text style={style.LoginButton}>SIGN IN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )       
    }
}
const style=StyleSheet.create({
    signintext:{
        fontWeight:"bold",
        marginLeft:"auto",
        marginRight:"auto"
    },
    container:{
        marginTop:80,
        borderRadius:6,
        marginLeft:20
    },
    SigninInputText:{
        marginTop:10,
        height:20,
        borderBottomWidth:1,
        borderBottomColor:"#8bdc84",  
        marginRight:20
    },
    text:{
        marginTop:15 
    },
    LoginButton:{
        width:300,
        height:30,
        marginTop:120,
        backgroundColor:"#8bdc84",
        textAlign:"center",
        paddingTop:5,
        color:"white"
    },
    login:{
        alignItems:'center'
    },
    forgotpassword:{
        display:"flex",
        marginTop:15   
    },
    back:{
        display:"flex",
        flexDirection:"row",
        marginTop:50,
        marginLeft:5
    }
})
