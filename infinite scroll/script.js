const imageContainer=document.getElementById('image-container');
const loader=document.getElementById('loader');
let photosArray=[];
let count=5;
const apikey='-T7RrmmuUYy4OQux-CBlqMtnlUhHu7IsSDLIdm01BrY';
const apiUrl= `https://api.unsplash.com/photos/random?client_id=${apikey}&count=${count}`;
let ready=false;
let imagesLoaded=0;
let totalImages=0;
function imageloaded(){
    imagesLoaded++;
    if(imagesLoaded===totalImages){
        loader.hidden=true;
        ready=true;
        count=25;
    }
}
//// photo elemetns
function displayPhotos(){
    //// increment total images count to size of the photosarray
    totalImages=photosArray.length;
    imagesLoaded=0;
    photosArray.forEach((photo)=>{
        const item=document.createElement('a');
        item.setAttribute('href',photo.links.html);
        item.setAttribute('target','_blank');
        const img=document.createElement('img');
        img.setAttribute('src',photo.urls.regular);
        img.setAttribute('alt',photo.alt_description);
        img.setAttribute('title',photo.alt_description);
        console.log(item);
        img.addEventListener('load',imageloaded);
        item.appendChild(img);
        imageContainer.appendChild(item);
    }); 
}



/// photos from splash
async function getPhotos(){
    try{
        const response=await fetch(apiUrl);
        photosArray=await response.json();
        
        // console.log(photosArray.length);
        displayPhotos();
    }catch{
        // oops there is an error
        console.log("error");
    }
}
///infinity scroll logic is here let's do it
window.addEventListener('scroll',()=>{
    if(window.innerHeight+window.scrollY >=document.body.offsetHeight-1000 && ready){
        ready=false;
        getPhotos();
        
    }
})

getPhotos();

// console.log("hellp")