import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import SigninRequest from '../signinRequest/signinRequest';
import Footer from '../Footer/footer';

export default function Portfolio(props) {
    return (
        <View style={style.Portfolio}>
            <SigninRequest />
            <Footer props={props} />
        </View>
    );
}

const style = StyleSheet.create({
    Portfolio: {
        position: 'relative',
        height: '100%'
    }
});