//gsap .from( ".photo-img",{duration: 5, delay: 4, y: 100, opacity: 0}) 

const musicBtn = document.querySelector("#musicBtn");
console.log(musicBtn);

musicBtn.addEventListener("click",function(){
    document.querySelector("#musicForBtn").play();
    musicBtn.textContent="Click here to stop"

})