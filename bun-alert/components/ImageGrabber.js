import React from 'react'
import { View, Image, Text } from 'react-native'
const axios = require('axios').default;

export default function ImageGrabber() {
    return axios({
        method: 'get',
        url: 'http://localhost:4000/app/getImage',
    })


}