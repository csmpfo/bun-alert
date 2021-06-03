import React from 'react'
import { View, Image, Text } from 'react-native'
const axios = require('axios').default;


export default function sendImage(imageLink, location) {
    return axios({
        method: 'post',
        url: 'http://localhost:4000/app/submitImage',
        data:{
            location: location,
            image: imageLink,
        }
    })

}