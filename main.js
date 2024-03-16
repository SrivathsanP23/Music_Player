let song_image = document.getElementById("cover_photo")
let song_title = document.getElementById("title")
let song_singer = document.getElementById("singer")
let song_play = document.getElementById("play")
let song_prev = document.getElementById("prev")
let song_next = document.getElementById("next")


let progressBar = document.querySelector(".progress-bar");
let progressContainer = document.querySelector(".progress-bar-container");


console.log(song_play)

let songs_list = [
    {
        name: 'Naa ready dha',
        Image: 'images/lover_image.jpg',
        Song: 'music/1-na-ready.mp3',
        Singer: 'Vijay'
    },
    {
        name: 'Theri',
        Image: 'images/taylor_swift_love_story.jpg',
        Song: 'music/2-theri.mp3',
        Singer: 'GV Prakash'
    },
    { 
        name: 'Minnalai Pidithu',
        Image: 'images/Taylor_Swift_Red.png',
        Song: 'music/6-Minnal.mp3',
        Singer: 'Harish Ragavendran'
    },
    {
        name: 'Pakkam Vandhu',
        Image: 'images/wildest_dreams_taylor.jfif',
        Song: 'music/5-kaththi.mp3',
        Singer: 'Vijay'
    }
]

let albumElement = document.querySelector('.album');
let i=0;
let flag=false;


var audio = new Audio(songs_list[i].Song);
song_image.src = songs_list[i].Image;
song_title.innerHTML = songs_list[i].name;
song_singer.innerHTML = songs_list[i].Singer;











// ...

/* ==============================
   Time Update Function
==================================*/

// ...

// /* ==============================
//    Time Update Function
// ==================================*/

  
// //   // Add leading zeros to single-digit numbers

// //   // ...
  



/*================================
        progress bar
=================================*/

progressBar.addEventListener("click", function(e) {
    const progressBarWidth = progressBar.offsetWidth;
    const clickX = e.offsetX;
    const progressPercentage = (clickX / progressBarWidth) * 100;
    audio.currentTime = (progressPercentage / 100) * audio.duration;
});





/* ==============================
         play song
==================================*/


  song_play.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        song_play.innerHTML = '<i class="fas fa-pause fa-3x prev"></i>'; // Change to pause icon
        albumElement.classList.add('rotate'); // Start rotating the album image

    } else {
        audio.pause();
        song_play.innerHTML = '<i class="fas fa-play fa-3x prev"></i>'; // Change to play icon
        albumElement.classList.remove('rotate'); // Stop rotating the album image
    }
    audio.addEventListener("timeupdate", function() {
        const progressPercentage = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${progressPercentage}%`;
      });
});



/* ==============================
         play next song
==================================*/



song_next.addEventListener("click",function(){
    
    audio.pause();
    
    flag=false;
    i = i + 1;
    if(i>=songs_list.length){
        i=0;
    }
    console.log(i);
    song_image.src = songs_list[i].Image;
    song_singer.innerHTML = songs_list[i].Singer;
    song_title.innerHTML = songs_list[i].name;
    audio = new Audio(songs_list[i].Song);
    if(flag===false){
        audio.play();
        song_play.innerHTML = '<i class="fas fa-pause fa-3x prev"></i>'
        flag=true;
        console.log(flag);
    }

    audio.addEventListener("timeupdate", function() {
        const progressPercentage = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${progressPercentage}%`;
      });
})



/* ==============================
         play prev song
==================================*/



song_prev.addEventListener("click",function(){
    audio.pause();
    flag=false; //not playing audio.
    i=i-1;
    if(i<0){
        i=songs_list.length;
    }
    song_image.src = songs_list[i].Image;
    song_singer.innerHTML = songs_list[i].Singer;
    song_title.innerHTML = songs_list[i].name;
    audio = new Audio(songs_list[i].Song);
    if(flag===false){
        audio.play();
        song_play.innerHTML = '<i class="fas fa-pause fa-3x prev"></i>'
        flag=true;
        console.log(flag);

    }
    audio.addEventListener("timeupdate", function() {
        const progressPercentage = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${progressPercentage}%`;
      });
    
    
})

 

// ...code ends




