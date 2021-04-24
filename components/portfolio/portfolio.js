import React from 'react';
import { View } from 'react-native';
import SigninRequest from '../signinRequest/signinRequest';
import Footer from '../Footer/footer';

export default function Portfolio(props) {
    return (
        <View>
            <SigninRequest props={ props } />
            <Footer props={ props } />
        </View>
    );
}