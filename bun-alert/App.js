import React from 'react'
import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants'
import TopBar from './components/TopBar'
import BottomBar from './components/BottomBar'
import ImageGrabber from './components/ImageGrabber'

export default function HomeScreen() {
 
  const [imgUrl, setImgUrl] = useState("");
  const [currentIndex, setCurrentIndex] = useState("");

  useEffect(() => {
    ImageGrabber()
      .then(resp => {
        setCurrentIndex(resp.data.length - 1)
        var imageIndex = resp.data.length - 1
        setImgUrl(resp.data[imageIndex].image)
      })
  }, [])

  function previousImage() {
    console.log("button pressed")
    if (currentIndex > 0) {
      ImageGrabber()
        .then(resp =>{
          setCurrentIndex(currentIndex - 1)
          var imageIndex = currentIndex - 1
          setImgUrl(resp.data[imageIndex].image)
          console.log("went to previous image")
        })
    } else if (currentIndex <= 0){
      ImageGrabber()
        .then(resp =>{
          setCurrentIndex(currentIndex)
          setImgUrl(resp.data[currentIndex].image)
          console.log("errord and didnt go to prev image")
        })
    }
  }
  function imageJump() {
    console.log("image jumped")
    ImageGrabber()
      .then(resp => {
        setCurrentIndex(resp.data.length - 1)
        var imageIndex = resp.data.length - 1
        setImgUrl(resp.data[imageIndex].image)
      })
  }

  return (
      <View style={styles.container}>
        <TopBar />
        <View style={styles.maincontent}>
          <View style={styles.other}>
            <TouchableOpacity style={styles.image} onPress={previousImage}>
              <Image 
                    style={styles.image}
                    source={{uri: imgUrl}}
              />
            </TouchableOpacity>
            <Button style={styles.button} onPress={imageJump}>image jump</Button>
          </View>
          <BottomBar />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  maincontent: {
    flex: 1,
    padding: 10,
    paddingTop: 8,
    justifyContent: 'center',
    shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.12,
        shadowRadius: 5.46,
        elevation: 9,    
  },
  image: {
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 2
  },
  other: {
    flex: 1,
    padding: 10,
    paddingTop: 8,
  },
  button: {
    flex: 1,
    padding: 15,
    height: 40
  }
});

