let flag = 2;
let slides = document.getElementsByClassName("slide");

function slideShow (num){
    if(num == slides.length){
        flag = 0;
        num = 0;

    }
    else if(num < 0){
             flag = slides.length -1;
             num = slides.length -1;
        }
    for(let y of slides){
        y.style.display="none";
    }
    slides[num].style.display="flex";
}

function controller (x){
    flag = flag + x;
    slideShow(flag);
}

slideShow(flag);