import React from "react"
import Footer from "../Footer/footer"
import Header from "../header/header"
import { View } from "react-native"

export default function Home(props){
    return(
        <View>
            <Header/>
            <Footer props={props}/>
        </View>
    )
}