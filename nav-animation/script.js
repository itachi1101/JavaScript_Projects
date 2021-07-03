const homePage=document.getElementById('home');
const menuBars=document.getElementById('menu-bars');
const overlay=document.getElementById('overlay');
const nav1=document.getElementById('nav-1');
const nav2=document.getElementById('nav-2');
const nav3=document.getElementById('nav-3');
const nav4=document.getElementById('nav-4');
const nav5=document.getElementById('nav-5');
const apikey='-_iuG-EN9IZtaI8DQFKT3Mi_dbvoSwlHTxJ9Fz8MpE0';
const count=1;
const apiUrl=`https://api.unsplash.com/photos/random?client_id=${apikey}&count=${count}`;

function setPhoto(photo){
   
    let PhotoUrl=photo[0].urls.regular;
    console.log(PhotoUrl);
    homePage.style.backgroundImage=`url(${PhotoUrl})`;

}
async function getPhoto(){
    try{
        const response=await fetch(apiUrl);
        const photo=await response.json();
        setPhoto(photo);
    }catch(error){
        console.log(error);
    }
}
function toggleNav(){
    menuBars.classList.toggle('change')

    overlay.classList.toggle('overlay-active');
    if(overlay.classList.contains('overlay-active')){
        overlay.classList.remove('overlay-slide-left');
        overlay.classList.add('overlay-slide-right');
        nav1.classList.remove('slide-out-1');
        nav2.classList.remove('slide-out-2');
        nav3.classList.remove('slide-out-3');
        nav4.classList.remove('slide-out-4');
        nav5.classList.remove('slide-out-5');
        nav1.classList.add('slide-in-1');
        nav2.classList.add('slide-in-2');
        nav3.classList.add('slide-in-3');
        nav4.classList.add('slide-in-4');
        nav5.classList.add('slide-in-5');
    }else{
        overlay.classList.remove('overlay-slide-right');
        overlay.classList.add('overlay-slide-left');
        nav1.classList.remove('slide-in-1');
        nav2.classList.remove('slide-in-2');
        nav3.classList.remove('slide-in-3');
        nav4.classList.remove('slide-in-4');
        nav5.classList.remove('slide-in-5');
        nav1.classList.add('slide-out-1');
        nav2.classList.add('slide-out-2');
        nav3.classList.add('slide-out-3');
        nav4.classList.add('slide-out-4');
        nav5.classList.add('slide-out-5');
    }
}
menuBars.addEventListener('click',toggleNav);
nav1.addEventListener('click',toggleNav);
nav2.addEventListener('click',toggleNav);
nav3.addEventListener('click',toggleNav);
nav4.addEventListener('click',toggleNav);
nav5.addEventListener('click',toggleNav);

getPhoto();