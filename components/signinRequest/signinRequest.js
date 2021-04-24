import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import Footer from '../Footer/footer';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

export default function SigninRequest(props){
    return(
        <View style={style.signinRequest}>
            <View style={style.signinRequestHeader}>
                <Text style={style.signinRequestText}>Portfolio</Text>
                <View style={style.Icons}>
                    <FontAwesome name= 'bell' size={24} color= 'orange' />
                    <AntDesign name= 'plus' size={24} color= 'black' />
                </View>
            </View>
            <View style={style.LogoAndText}>
                <Image style={style.CoinmomoLogo} source={require( '../../assets/img/logo.png' )} />
                <Text>Sign in to view your profile</Text> 
            </View>
            <View style={style.signupAndSignin}>
                <TouchableOpacity onPress={()=>props.props.navigation.navigate('signin')}>
                    <Text style={style.signinButton}>SIGN IN</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={style.SignupText}>Don't have an account?</Text>
                </TouchableOpacity>
            </View>
            <Footer props={ props }/>   
        </View>
    )
}
const style = StyleSheet.create({
    signinRequest:{
        position: 'relative',
        height: '100%'
    },
    signinRequestHeader:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 25,
        backgroundColor: 'white',
        paddingTop: 25,
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#dcdcdc'
    },
    Icons:{
        width:90,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    signinButton:{
        height: 40,
        marginLeft: 25,
        marginRight: 25,
        backgroundColor: '#8fc73d',
        textAlign: 'center',
        paddingTop: 10,
        color: 'white',
    },
    SignupText:{
        textAlign: 'center',
        marginTop: 10
    },
    LogoAndText:{
         marginTop: '25%',
         alignItems: 'center'
    },
    CoinmomoLogo:{
        width: 150,
        height: 40
    },
    signupAndSignin:{
        marginTop: '30%'
    }
});