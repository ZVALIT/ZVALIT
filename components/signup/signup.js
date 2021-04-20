import React from "react"
import { View, Text, CheckBox, TextInput, StyleSheet, TouchableOpacity } from "react-native"
import { AntDesign } from '@expo/vector-icons';

export default class Signin extends React.Component{
    state={
        isSelected:false,
        isSelect:false
    }
    onValueChange=()=>{
        this.setState({
            isSelected:!this.state.isSelected
        })
    }
    onValueChange1=()=>{
        this.setState({
            isSelect:!this.state.isSelect
        })
    }
    render(){
        return(
            <View>
                <View style={style.back}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate( "portfolio" )}>
                        <AntDesign name="arrowleft" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={style.signintext}>CREATE ACCOUNT</Text>
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
                        <Text style={style.text}>Confirm Password</Text>
                        <TextInput secureTextEntry style={style.SigninInputText}></TextInput>
                    </View>
                    <View style={style.conditions}> 
                        <View style={style.CheckBox}>
                            <CheckBox
                            value={this.state.isSelected}
                            onValueChange={this.onValueChange}
                            /> 
                            <Text style={style.conditionstext}>I agree to CoinMomo's Terms of Service and Privacy Policy.</Text>
                        </View>
                        <View style={style.CheckBox}>
                            <CheckBox
                            value={this.state.isSelect}
                            onValueChange={this.onValueChange1}
                            /> 
                            <Text style={style.conditionstext}>I would like to subscribe to CoinMomo's daily newsletter. </Text>
                        </View>                
                    </View>
                </View>
                <View style={style.signup}>
                    <TouchableOpacity>
                        <Text style={style.signupbutton}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )       
    }
}
const style=StyleSheet.create({
    conditionstext:{
        fontSize:13,
        marginTop:5
    },
    CheckBox:{
        display:"flex",
        flexDirection:"row",
        marginTop:10,
        width:360
    },
    signintext:{
        textAlign:"center",
        fontWeight:"bold"
    },
    container:{
        marginTop:80,
        borderRadius:6,
        marginLeft:20
    },
    SigninInputText:{
        marginTop:10,
        width:360,
        height:20,
        borderBottomWidth:1,
        borderBottomColor:"#8bdc84",  
        paddingLeft:5
    },
    text:{
        marginTop:15 
    },
    signupbutton:{
        width:300,
        height:30,
        marginTop:150,
        backgroundColor:"#8bdc84",
        textAlign:"center",
        paddingTop:5,
        color:"white"
    },
    signup:{
        alignItems:"center",
    },
    back:{
        display:"flex",
        flexDirection:"row",
        marginTop:50,
        marginLeft:20,
        justifyContent:"space-between",
        marginRight:160
    },
    conditions:{
        marginTop:15
    }
})
