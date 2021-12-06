const speed = document.querySelector(".speed");
const bar = document.querySelector(".speed-bar");
const video = document.querySelector(".flex");

// console.log(video);

speed.addEventListener("mousemove" , handleMoveEvent   );


function handleMoveEvent(e) {
    const y = e.pageY - this.offsetTop;
    const percent = (y / this.offsetHeight);
    const min = 0.4;
    const max = 4 ;
    const height = Math.round(percent * 100) + "%" ;
    // console.log(height)
    const playbackRate = percent * (max - min) + min ;
    bar.style.height = height ;

    bar.textContent = playbackRate.toFixed(2) + "x" ;

    video.playbackRate = playbackRate  //v.playbackRate is a method to control v rate in js

}