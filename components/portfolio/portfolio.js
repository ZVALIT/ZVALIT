import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import SigninRequest from '../signinRequest/signinRequest';
import Footer from '../Footer/footer';

export default function Portfolio(props) {
    return (
        <View>
            <SigninRequest />
            <Footer props={props} />
        </View>
    );
}