let but = document.getElementById("next");
let video = document.getElementById("video");

let start = document.getElementById("start");
let cont= document.getElementById("container");
let div = document.getElementById("div");
let num1 = 0;
start.addEventListener("click",function(){
    if(num == 0){
    video.play();
    num = 1;

    }else{
         video.pause();
    num = 0;
    }
})

let arr = [
    {
        video:"./Assets/images/step1.mp4",
        cont:"#003f55",
        div:"#003f55",
        next:"Next",
    },
    {
        video:"./Assets/images/step2.mp4",
        cont:"#184256",
        div:"#184256",
        next:"Next",   
    }, {
        video:"./Assets/images/end.mp4",
        cont:"#f3e383",
        div:"#f3e383",
        next:"Back",   
    },
    
]
let num = 0;
let num2 = 0;
but.addEventListener("click",function(){
    num++;
    num2++;
    if(num == 2){
        video.src = arr[num].video;
    cont.style.background = arr[num].cont;
    div.style.background = arr[num].div;
    but.innerHTML = arr[num].next;
    num = -1;
    }else{
        video.src = arr[num].video;
    cont.style.background = arr[num].cont;
    div.style.background = arr[num].div;
    but.innerHTML = arr[num].next;

    }if(num2 == 2){
        document.getElementById("logo").src = "./Assets/images/logo.png";
        num2 = 0;
    }else{
        
        document.getElementById("logo").src = "./Assets/images/logo1.png";

    }
    
});