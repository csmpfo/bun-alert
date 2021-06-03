import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import UploadImage from './ImageUploader';
// import axios from '/Users/connormorrey/bun-alert/node_modules/axios'


export default function ImagePickerExample() {
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

      UploadImage(hey)
        .then(resp => {
          console.log(resp.data.data)
        })
        
    };
    return (
      <View>

        <Text>hi</Text>
      </View>
      
    )
  }