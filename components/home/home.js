
import React from "react"
import Footer from "../Footer/footer"
import Header from "../header/header"
import { View, StyleSheet } from "react-native"
import MyTabs from "../headertabs/headertabs"

export default function Home(props) {
    return (
        <View style={styles.Home}>
            <Header />
            <View style={styles.headerTabs}>
                <MyTabs/>
            </View>
            <Footer props={props} />
        </View>
    );
}
const styles = StyleSheet.create({
    headerTabs:{
        height: 100,
        marginTop: -10
    },
    Home:{
        position: 'relative',
        height: '100%'
    }
});
