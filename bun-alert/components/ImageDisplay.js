import React, { useState, useEffect, useRef } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import ImageGrabber from './ImageGrabber'

export default function ImageDisplay(url) {
    console.log(url)
    
    return (
        <View style={styles.maincontent}>
            <Image 
            style={styles.image}
            source={{uri: url}}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    image: {
      flex: 1,
      padding: 10
    },
    maincontent: {
        flex: 1,
        padding: 10,
    }
});
  