import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default class Signin extends React.Component{
    render(){
        return(
            <View>
                <View style={style.back}>
                    <View>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate("portfolio")}>
                            <AntDesign name="arrowleft" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, paddingRight:65}} >
                        <Text style={style.signintext}>SIGN IN</Text>
                    </View> 
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
        fontWeight: 'bold',
        // marginLeft: 'auto',
        // marginRight: 'auto'
        fontSize:18
    },
    container:{
        marginTop: 80,
        borderRadius: 6,
        marginLeft: 20
    },
    SigninInputText:{
        marginTop: 10,
        height: 20,
        borderBottomWidth:1,
        borderBottomColor:"#8bdc84",  
        marginRight: 30,
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
        marginTop:15 ,
        marginLeft: 'auto',
        marginRight:30  
    },
    back:{
        flex: 1,
        flexDirection:"row",
        marginTop: 50,
        justifyContent:'space-between'
    },
})
