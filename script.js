console.log("WELCOME TO SPOTIFY");

let SongIndex = 0;
let progress=0;
/////////////// subplay ============================
let subplay1=document.getElementById("subplay1");
let subplay2=document.getElementById("subplay2");
let subplay3=document.getElementById("subplay3");
let subplay4=document.getElementById("subplay4");
let subplay5=document.getElementById("subplay5");
let subplay6=document.getElementById("subplay6");
let subplay7=document.getElementById("subplay7");
let subplay8=document.getElementById("subplay8");


subplay1.addEventListener('click',()=>{

    todo(0);
    subplay1.classList.remove('fa-play');
    subplay1.classList.add('fa-pause');
  
})

subplay2.addEventListener('click',()=>{
    if(subplay2.class="fa-solid fa-play" ){
    todo(1);
     subplay2.classList.remove('fa-play');
     subplay2.classList.add('fa-pause');
    }
    else{
        subplay2.classList.add('fa-play');
        subplay2.classList.remove('fa-pause');
    }
})


subplay3.addEventListener('click',()=>{
    todo(2);
   
     subplay3.classList.add('fa-pause');
     subplay3.classList.remove('fa-play');
})


subplay4.addEventListener('click',()=>{
    todo(3);

     subplay4.classList.remove('fa-play');
     subplay4.classList.add('fa-pause');

})


subplay5.addEventListener('click',()=>{
    todo(4);
  
     subplay5.classList.remove('fa-play');
     subplay5.classList.add('fa-pause');
})


subplay6.addEventListener('click',()=>{
    todo(5);

    subplay6.classList.remove('fa-play');
    subplay6.classList.add('fa-pause');
})


subplay7.addEventListener('click',()=>{
    todo(6);
 
     subplay7.classList.remove('fa-play');
     subplay7.classList.add('fa-pause');
})


subplay8.addEventListener('click',()=>{
    todo(7);

     subplay8.classList.remove('fa-play');
     subplay8.classList.add('fa-pause');
})


let songarr=[new Audio('1.mp3'),new Audio('2.mp3'),new Audio('3.mp3'),new Audio('4.mp3'),new Audio('5.mp3'),new Audio('6.mp3'),new Audio('7.mp3'),new Audio('8.mp3')];
function todo(a){
    console.log("todo");
    console.log(a);

let songnum=songarr[a];
let audioEle = songnum;
let masterplay = document.getElementById("masterplay");
let MyProgressBar = document.getElementById("MyProgressBar");
let gif=document.getElementById('gif');

masterplay.addEventListener('click',()=>{
    if(audioEle.paused || audioEle.currentTime<=0){
        audioEle.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause')
        gif.style.opacity='1';
       
    }
    else{
        audioEle.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        gif.style.opacity='0';
    }
 
})

audioEle.addEventListener('timeupdate', () =>{
    console.log('timeupdate');
    progress = parseInt((audioEle.currentTime/audioEle.duration)*100);
    console.log(progress);
    MyProgressBar.value=progress;
})

MyProgressBar.addEventListener('change',()=>{
    audioEle.currentTime = MyProgressBar.value * audioEle.duration /100;
})

}
