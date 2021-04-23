import React from "react"
import Footer from "../Footer/footer"
import Header from "../header/header"
import { View, StyleSheet } from "react-native"

export default function Home(props) {
  return (
    <View style={style.Home}>
      <Header />
      <Footer props={props} />
    </View>
  )
}
const style = StyleSheet.create({
  Home: {
    position: 'relative',
    height: '100%'
  }
})
