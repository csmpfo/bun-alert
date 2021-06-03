import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons'

const windowHeight = Dimensions.get('window').height;

export default function TopBar() {
    return  (
        <View style={styles.container}>
{/*         <FontAwesome5 name="cogs" size={27} color="#979797"/> */}
            <FontAwesome5 name="map-marker-alt" size={27} color="#fb8a9b"/> 
{/*         <FontAwesome5 name="plus" size={27} color="#979797"/> */}
        </View>
    )


}

const styles = StyleSheet.create({
    container: {
        height: windowHeight / 9,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
        backgroundColor: 'lightblue',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.12,
        shadowRadius: 5.46,
        elevation: 9,
    }


})

