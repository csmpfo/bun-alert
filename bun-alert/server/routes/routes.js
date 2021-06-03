const express = require('express')
const router = express.Router()
const submitImageTemplateCopy = require('../models/submitImageModel')
const { response } = require('express')

router.post('/submitImage', (request, response) =>{
    const submittedImage = new submitImageTemplateCopy({
        location:request.body.location,
        image:request.body.image
    })
    submittedImage.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})

router.get("/getImage", async (req, res) =>{
	const posts = await submitImageTemplateCopy.find();
	res.send(posts);
})
//router.post('/getImage',fetchController.fetchData);
module.exports = router
