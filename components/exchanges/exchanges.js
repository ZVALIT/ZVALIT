import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';


export default function Exchanges() {
  return (
    <View>
      <Text style={style.Exchanges}>Exchanges</Text>
    </View>
  );
}
const style=StyleSheet.create({
    Exchanges:{
        textAlign:'center',
        marginTop:150
    }
})