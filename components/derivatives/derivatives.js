import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';


export default function Derivatives() {
  return (
    <View>
      <Text style={style.Derivatives}>Derivatives</Text>
    </View>
  );
}
const style=StyleSheet.create({
    Derivatives:{
        textAlign:'center',
        marginTop:150
    }
})