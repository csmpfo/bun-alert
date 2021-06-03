import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Dimensions } from 'react-native';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons'
const windowHeight = Dimensions.get('window').height;

export default function PlusButton() {
    return  (
        <View>
            <TouchableOpacity style={styles.plusbutton}>
            <FontAwesome5 name="plus" size={27} color="#fb8a9b"/> 
            </TouchableOpacity>
        </View>
    )


}

const styles = StyleSheet.create({
    plusbutton: {
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        width: windowHeight / 2,
        height: windowHeight / 10,
        backgroundColor:'lightblue',
        borderRadius:0,
    }

})
