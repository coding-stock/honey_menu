const bgImage = new Image();
bgImage.src ='resto.jpg';

const loader = document.querySelector('#loader2');
const home = document.querySelector('#home');
const body = document.querySelector('body');
bgImage.onload = function(){
      loader.style.display = "none"
      home.style.display = "block"
      body.style.paddingBottom = '1rem';
}