// const header = document.querySelector("header")
// const nav = document.querySelector(".nav")
// window.addEventListener("scroll" , function(){
//     let scrollPos = window.scrollY;
    

// if( scrollPos > 0 ){
//     header.classList.add("red")
// }
// else{
//     header.classList.remove("red")
// }
// })
let switchMode = document.getElementById("switchmode")

switchMode.onclick = function( ){
let theme = document.getElementById("theme")
if(theme.getAttribute("href") == "lightrmode.css"){
    theme.href = "darkmode.css"
} else{
    theme.href = "lightrmode.css"
}
}

let acc = document.getElementsByClassName("accordion")
let i;

for(i = 0; i < acc.length; i++){
    acc[i].onclick = function () {
        this.classList.toggle("acticve");
        this.nextElementSibling.classList.toggle("show")
    }
}

let slideIndex = 1;

showSlides(slideIndex);


function nextSlide() {
    showSlides(slideIndex += 1);
}


function previousSlide() {
    showSlides(slideIndex -= 1);
}


function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
   
    let slides = document.getElementsByClassName("item");

  
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

  
    for (let slide of slides) {
        slide.style.display = "none";
    }
   
    slides[slideIndex - 1].style.display = "block";
}