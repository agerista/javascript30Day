 function playSound(e) { 

  var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return; //stop if key has no element to match
  audio.currentTime = 0; //rewind to start
  audio.play();
  key.classList.add('playing'); //same as addClass in jQuery

});


function removeTransition(e) {
  
  if(e.propertyName !== 'transform') return; //skip if it's not transform
  this.classList.remove('playing');

}

var keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);