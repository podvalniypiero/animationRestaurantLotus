//gsap .from( ".photo-img",{duration: 5, delay: 4, y: 100, opacity: 0}) 

//music
const musicBtn = document.querySelector("#musicBtn");

const musicForBtn = document.getElementById("musicForBtn")
console.log(musicBtn);

// musicBtn.addEventListener("click",function(){
//     document.querySelector("#musicForBtn").play();
//     musicBtn.textContent="Click here to stop"

// })

document.getElementById("musicBtn").onclick = function(){
    let play = document.getElementById("musicForBtn");
    if(play.paused == true){
        document.getElementById("musicForBtn").play();
        musicBtn.textContent="Click here to stop";
    }
    else if (play.paused == false){
        document.getElementById("musicForBtn").pause();
        musicBtn.textContent="Click here to hear our atmosphere";
    }

}
// gallery slides
const next = document.querySelector(".nextBtn");

const prev = document.querySelector(".previousBtn");
console.log(next);
console.log(prev);

const slides = ["slides\\blur.jpg","slides\\bar.jpg","slides\\beautiful-young-woman-sitting-restaurant-talking-mobile-phone.jpg","slides\\bowls.jpg","slides\\client.jpg","slides\\coffee-make.jpg","slides\\coffee.jpg","slides\\filter.jpg","slides\\green.jpg","slides\\greens.jpg","slides\\hot-matcha.jpg","slides\\interior.jpg","slides\\lights.jpg","slides\\matcha.jpg","slides\\pie.jpg","slides\\salad.jpg","slides\\soup.jpg","slides\\talking.jpg","slides\\teapot.jpg","slides\\vegetables.jpg","slides\\water.jpg"];
console.log(slides[0]);
let i=0;

next.addEventListener("click",()=>{
    i++;
    if (i > slides.length - 1){
        i = 0;
    }
    document.querySelector(".slidesArray").src = slides[i];
})

prev.addEventListener("click", ()=> {
    i--;
    if (i < 0){
        i = slides.length - 1;
    }
    document.querySelector(".slidesArray").src = slides[i];
})