import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import { Dimensions } from 'react-native';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons'
import { ImagePickerExample } from './ImagePicker'
import * as ImagePicker from 'expo-image-picker';
import UploadImage from './ImageUploader';
import sendImage from './ImageDatabase'
import ImageGrabber from './ImageGrabber';
import ImageDisplay from './ImageDisplay';
import { Button } from 'bootstrap';

// import PlusButton from './PlusButton'
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function BottomBar() {
    const [image, setImage] = useState(null);
    
    useEffect(() => {
      (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      })();
    }, []);
  
    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        base64: false,
      });
  
      console.log('result', JSON.stringify(result));
  
      if (!result.cancelled) {
        setImage(result.uri);
      }

      var hey = result.uri

      UploadImage(result.uri)
        .then(resp => {
          console.log(resp.data.data)
          var yuh = resp.data.data.url;
          sendImage(yuh, "Rochester")
        })
    };


    return (
      <View styles={styles.container}>
        <View />
          <Button onPress={pickImage}>upload image</Button>
        <View />
      </View>
    )
}

const styles = StyleSheet.create({
  
    container: {
      height: windowHeight / 10,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: 'lightblue'
    },
    button: {
      width: windowWidth / 2,
      height: windowHeight / 11,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'

      
    }
})