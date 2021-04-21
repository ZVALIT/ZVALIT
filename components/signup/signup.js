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
    onValueChangetext=()=>{
        this.setState({
            isSelect:!this.state.isSelect
        })
    }
    render(){
        return(
            <View>
                <View style={style.signup_back}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate( "portfolio" )}>
                        <AntDesign name="arrowleft" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={style.signuptext}>CREATE ACCOUNT</Text>
                </View>
                <View style={style.container}>
                    <View>
                        <Text style={style.text}>Email</Text>
                        <TextInput style={style.SignupInputText}></TextInput>
                    </View>
                    <View>
                        <Text style={style.text}>Password</Text>
                        <TextInput secureTextEntry style={style.SignupInputText}></TextInput>
                    </View>
                    <View>
                        <Text style={style.text}>Confirm Password</Text>
                        <TextInput secureTextEntry style={style.SignupInputText}></TextInput>
                    </View>
                    <View style={style.conditions}> 
                        <View style={style.CheckBox}>
                            <CheckBox
                            value={this.state.isSelected}
                            onValueChange={this.onValueChange}
                            /> 
                            <TouchableOpacity onPress={this.onValueChange}>
                                <Text style={style.conditionstext}>I agree to CoinMomo's Terms of Service and Privacy Policy.</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={style.CheckBox}>
                            <CheckBox
                            value={this.state.isSelect}
                            onValueChange={this.onValueChangetext}
                            />
                            <TouchableOpacity onPress={this.onValueChangetext}>
                                <Text style={style.conditionstext}>I would like to subscribe to CoinMomo's daily newsletter. </Text>
                            </TouchableOpacity> 
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
        fontSize:12,
        marginTop:5
    },
    CheckBox:{
        display:"flex",
        flexDirection:"row",
        marginTop:10,
    },
    signuptext:{
        marginLeft:"auto",
        marginRight:"auto",
        fontWeight:"bold"
    },
    container:{
        marginTop:80,
        borderRadius:6,
        marginLeft:20
    },
    SignupInputText:{
        marginTop:10,
        height:20,
        borderBottomWidth:1,
        borderBottomColor:"#8bdc84",
        marginRight:20  
    },
    text:{
        marginTop:15 
    },
    signupbutton:{
        width:300,
        height:30,
        marginTop:100,
        backgroundColor:"#8bdc84",
        textAlign:"center",
        paddingTop:5,
        color:"white"
    },
    signup:{
        alignItems:"center",
    },
    signup_back:{
        display:"flex",
        flexDirection:"row",
        marginTop:50,
        marginLeft:5,
    },
    conditions:{
        marginTop:15
    }
})
