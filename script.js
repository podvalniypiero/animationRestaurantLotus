//gsap .from( ".photo-img",{duration: 5, delay: 4, y: 100, opacity: 0}) 

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
