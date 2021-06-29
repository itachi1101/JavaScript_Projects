const videoElement=document.getElementById('video');
const button=document.getElementById('btn');
async function selectMediaStream(){
    try{
        /// using the screen capture api
        const mediaStream=await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject=mediaStream;
        videoElement.onloadedmetadata=()=>{
            videoElement.play();
        }
    }catch(Aviral){
    }
}
button.addEventListener('click',async()=>{
    //disable the button
    // this.reload();
    button.disabled=true;
    /// start picture in picture
     await videoElement.requestPictureInPicture();
     button.disabled=false;
});
selectMediaStream();