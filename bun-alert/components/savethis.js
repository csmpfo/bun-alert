const [imgUrl, setImgUrl] = useState("");
const [currentIndex, setCurrentIndex] = useState(0);


console.log("starting up")

function onStartImageGrab () {
    ImageGrabber()
      .then(resp => {
        var recentImageNum = resp.data.length
        setCurrentIndex(recentImageNum - 1)
        setImgUrl(resp.data[currentIndex].image)
      })
      console.log("got image")
}

onStartImageGrab()

function previousImage() {
  console.log("button pressed")

  if (currentIndex > 0) {
    ImageGrabber()
      .then(resp =>{
        setCurrentIndex(currentIndex - 1)
        console.log("current index is $currentIndex")
        setImgUrl(resp.data[currentIndex].image)
        console.log("went to previous image")
      })
  } else {
    ImageGrabber()
      .then(resp =>{
        setImgUrl(resp.data[currentIndex].image)
        console.log("errord and didnt go to prev image")
      })
  }
}
/*
function getsImage() {
  ImageGrabber()
    .then(resp => {
      var recentImageNum = resp.data.length
      setCurrentIndex(recentImageNum - 1)
      setImgUrl(resp.data[currentIndex].image)
      console.log("got image")
    })
}
*/

//getsImage()



