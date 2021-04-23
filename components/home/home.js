import React from 'react';
import { View, StyleSheet } from 'react-native';
import Footer from '../Footer/footer';
import Header from '../header/header';

export default function Home() {
    return (
      <View style={style.primaryView}>
        <Header />
        <Footer />
      </View>
    );
  }

const style = StyleSheet.create({
  primaryView: {
    position: 'relative',
    height: '100%'
  }
});