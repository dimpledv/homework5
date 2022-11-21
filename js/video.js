
// Add js here.

// setting all var for function assignment //

var video_var = document.querySelector('video'),
    play_var = document.querySelector('#play'),
    pause_var = document.querySelector('#pause'),
    skip_var = document.querySelector('#skip'),
    mute_var = document.getElementById('mute')
    sliderButton = document.querySelector("#slider")


// setting defaults for video //

video_var.loop=false;
video_var.autoplay=false;
video_var.load();
video_var.playbackRate = 1;


//Play video //

play_var.addEventListener("click", function(){
    video_var.play()
});


//Pause Video//

pause_var.addEventListener("click", function(){
    video_var.pause();
});


//Volume slider// 

function setVolume(){
    video_var.volume = slider.value / 100;
    document.querySelector("#volume").innerHTML = slider.value;
    console.log(video_var.volume);
};

sliderButton.addEventListener("change",setVolume);

//Mute - Unmute button// 

function videoMute(){
    if (video_var.muted==true){
      video_var.muted=false;
      document.getElementById("mute").innerHTML='Mute';
      document.getElementById("slider").value=100;
      document.getElementById("volume").innerHTML=`${document.getElementById("slider").value/100}`;
      console.log(document.getElementById("slider").value);
    }
  
    else if (video_var.muted==false){
      video_var.muted=true;
      document.getElementById("mute").innerHTML='Umute';
      document.getElementById("slider").value=0;
      document.getElementById("volume").innerHTML=`${document.getElementById('slider').value/100}`;
    }}

mute_var.addEventListener("click", videoMute);
sliderButton.addEventListener("click",setVolume);


// Skip Ahead // 

skip_var.addEventListener("click",function(){
    video_var.currentTime+=15;
    if(video_var.currentTime > 66){
        video_var.currentTime = 0;
    }
})


// Speed Up and Slow Down // 
const normal_rate=1.0;
const slow_rate=0.5;
const fast_rate=2.0;


function videoSlow(){
  if (video_var.playbackRate==fast_rate){
     video_var.playbackRate=normal_rate;
  }

  else if (video_var.playbackRate==normal_rate){
    video_var.playbackRate=slow_rate;
  }

  else if (video_var.playbackRate==slow_rate){
    alert("Video is at slowest speed!");
  }

}

let slow_down_button_var=document.getElementById('slower');
slow_down_button_var.addEventListener("click",videoSlow);


function videoFast(){
  if (video_var.playbackRate==slow_rate){
     video_var.playbackRate=normal_rate;
  }

  else if (video_var.playbackRate==normal_rate){
    video_var.playbackRate=fast_rate;
  }

  else if (video_var.playbackRate==fast_rate){
    alert("Video is at fastest speed!");
  }

}

let fast_up_button_var=document.getElementById('faster');
fast_up_button_var.addEventListener("click",videoFast);