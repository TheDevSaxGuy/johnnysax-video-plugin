import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';


const video = document.querySelector('video');
const player = new MediaPlayer({ el: video ,plugins:[
    new AutoPlay(),
    new AutoPause(),
]});

const playButton:HTMLElement = document.querySelector('#play');
const muteButton:HTMLElement = document.querySelector('#mute');

playButton.onclick = () =>{ player.togglePlay();};
muteButton.onclick=()=>{player.toggleMute();}

/* TEMPORARY DISABLED DUE TO A PROBLEM WITH SERVICE WORKERS
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('../sw.js').catch(error =>{
        console.log(error.message)
    });
}*/