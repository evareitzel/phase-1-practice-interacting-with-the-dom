// Elements
let counter = document.querySelector('#counter')
const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const like = document.querySelector('#heart');
const pause = document.querySelector('#pause');
const submit = document.querySelector('#submit');

// Create Restart Button
const button = document.createElement('button');

document.body.append(button); // .insertBefore()
button.append('restart');
button.setAttribute('Id', 'restart');

// Increment Timer
let i = 0; 

const incrementTimer = function (){
  i++; 
  counter.innerHTML = i;
  // console.log(i);
}

let timeoutID = setInterval(incrementTimer, 1000);

// Increment and Decrement the Counter with Plus and Minus Buttons
minus.addEventListener('click', () => {
  i--;
  counter.innerHTML = i;
  }
);

plus.addEventListener('click', () => {
  i++;
  counter.innerHTML = i;
  console.log(i);
  }
);

// "like" a counter number / see no. of "likes" displayed
let amtLikes =  0;

let displayLikes = document.createElement('p')

console.log(displayLikes);
displayLikes.append(`${amtLikes} likes`);
like.addEventListener('click', () =>{
  amtLikes++;
  console.log(amtLikes);
});

// Pause Counter
  // disable buttons except pause
  // switch button label from "pause" to "resume"
  // clearTimeout()
pause.addEventListener('click', () => clearTimeout(timeoutID));

// click "restart" to to restart counter & re-enable buttons
restart.addEventListener('click', () => setTimeout(timeoutID))

// leave comments on gameplay
submit.addEventListener('onSubmit', function(event){
  event.preventDefault();
})

let comment = '';
// document.insertAdjacentHTML(`${amtLikes} likes`);
let displayComments = document.createElement('p')
console.log(displayComments);
displayComments.append('');
submit.addEventListener('click', () =>{
  // displayComments;
});


  // setTimeout
  // setInterval
  // clearInterval
