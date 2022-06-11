// Elements
let counter = document.querySelector('#counter')
const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const like = document.querySelector('#heart');
const pause = document.querySelector('#pause');
const form = document.querySelector('#comment-form');
console.log(form);
const submit = document.querySelector('#submit');

// Create Likes text display
let displayLikes = document.createElement('p')
// let likesList = document.querySelector('.likes');
// let displayLikes = document.likesList.createElement('p')


// Create Restart Button
const button = document.createElement('button');

document.body.append(button); // .insertBefore()
button.append('restart');
button.setAttribute('Id', 'restart');

// Create Comments Display 
let displayComments = document.createElement('ul')
document.body.append(displayComments);

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
console.log(displayLikes);
// numOfLikes = `${amtLikes} likes`;
like.addEventListener('click', () =>{
  amtLikes++;
  displayLikes = `${amtLikes} likes`;
  console.log(displayLikes);
  document.body.append(displayLikes);
});

// Pause Counter
  // disable buttons except pause
  // switch button label from "pause" to "resume"
  // clearTimeout()
pause.addEventListener('click', () => clearTimeout(timeoutID));

// click "restart" to to restart counter & re-enable buttons
restart.addEventListener('click', () => {
  // clearInterval(timeoutID);
  i = 0 - 1;
})

// leave comments on gameplay
form.addEventListener('submit', function(event){
  event.preventDefault();
  console.log(event.target);
  const comment = event.target.children[0].value; // value - form inputs
  // document.querySelector('#comment-input').value;
  // displayComments;
  const newComment = document.createElement('li');
  newComment.innerText = comment;
  displayComments.append(newComment);
})

  // setTimeout
  // setInterval
  // clearInterval

// Refactoring
  // don't scope i (timer start number) globally
  // restart function 
    // clear interval --> function stopTimer();
    // start timer --> make function startTimer();
