import React, { useState, useEffect } from 'react'
import { View, Image, Text } from 'react-native'
const axios = require('axios').default;



export default function UploadImage(image) {
    console.log(image);
    var yuh = image.substring(22);
    let body = new FormData()
    body.set('key', '7cf465fab8a9c598e034d2391c05a3dd')
    body.append('image', yuh)

    return axios({
        method: 'post',
        url: 'https://api.imgbb.com/1/upload',
        data: body
    })

}