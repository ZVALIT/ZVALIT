import React from 'react';
import { View, Text , StyleSheet, TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Signin(props){
    return(
        <View style={style.Signin}>
            <View style={style.IconAndText}>
                <TouchableOpacity onPress={() => props.navigation.navigate('portfolio')}>
                    <AntDesign style={style.Icon} name='arrowleft' size={24} color='black' />
                </TouchableOpacity>
                <Text style={style.SigninText}>Sign In</Text>
                <View style={style.empty}>
                </View>
            </View>
            <Text style={style.EmailText}>Email</Text>
            <TextInput style={style.signinInputHolder}></TextInput>
            <Text style={style.PasswordText}>Password</Text>
            <TextInput secureTextEntry style={style.signinInputHolder}></TextInput>
            <View style={style.forgotPassword}>
                <Text style={style.forgotPasswordText}>Forgot Password?</Text>
            </View>
            <TouchableOpacity>
                <Text style={style.LoginButton}>SIGN IN</Text>
            </TouchableOpacity>
            <Text style={style.instructions}>Didn't receive confirmation instructions?</Text>
        </View>
    )
}
const style=StyleSheet.create({
    Signin: {
        height: '100%'
    },
    empty: {
        width: 30,
        backgroundColor: 'transparent'
    },
    IconAndText: {
        marginTop: 25,
        height: 60,
        paddingTop: 20,
        display: 'flex',
        borderBottomWidth: 0.5,
        borderBottomColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    HeaderBorder: {
        display: 'flex',
    },
    SigninText: {
        fontSize: 20,
        color: 'black',
    },
    Icon: {
        width: 30,
        paddingLeft: 10
    },
    EmailText: {
        marginTop: '18%',
        color: 'black',
        marginLeft: 20
    },
    PasswordText: {
        marginTop: '5%',
        color: 'black',
        marginLeft: 20
    },
    signinInputHolder: {
        marginTop: 5,
        height: 20,
        borderBottomColor: 'green',
        borderBottomWidth: 1,
        marginLeft: 20,
        marginRight: 20
    },
    forgotPasswordText: {
        marginLeft: 'auto',
        marginRight: 20,
        color: '#8fc73d',
        marginTop: '2%'
    },
    LoginButton: {
        color: 'white',
        marginTop: '35%',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#8fc73d',
        height: 40,
        paddingTop: 13,
        marginLeft: 20,
        marginRight: 20
    },
    instructions: {
        marginTop: '2%',
        textAlign: 'center'
    }
});