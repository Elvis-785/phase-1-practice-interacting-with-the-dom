// timer increment; setInterval() to increment the counter every second

let counter = 0;
const counterElement = document.getElementById("counter");

setInterval(() => {
    counter++;
    counterElement.textContent = counter;
}, 1000);


// Manual increment and decrement; add click event listeners to the plus and minus buttons.

const plusButton = document.getElementById("plus");
const minus = document.getElementById("minus");

plusButton.addEventListener("click", () => {
    counter++;
    counterElement.textContent = counter;
});

minusButton.addEventListener("click", () => {
    counter--;
    counterElement.textContent = counter;
})

// "Like" Button;  track the likes for each number and display them;
const likesList = document.getElementById("likes");
const likeButton = document.getElementById("like");

likeButton.addEventListener("click", () => {
    const likeItem = document.createElement("li");
    likeItem.textContent = `${counter} has been liked`;
    likesList.appendChild(likeItem);
});

// Pause and Resume Counter; adding a functionality to pause and resume the counter.
const pauseButton = document.getElementById("pause");
let isPaused = false;
let intervalId = setInterval(updateCounter, 1000);

pauseButton.addEventListener("click", () => {
    if (isPaused) {
        intervalId = setInterval(updateCounter, 1000);
        pauseButton.textContent = "Pause";
    } else {
        clearInterval(intervalId);
        pauseButton.textContent = "Resume";
    }
    isPaused = !isPaused;
});

function updateCounter() {
    counter++;
    counterElement.textContent = counter;
}

// comment section ; functionality to submit and display comments.
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentsList = document.getElementById('list');

commentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const comment = document.createElement('p');
  comment.textContent = commentInput.value;
  commentsList.appendChild(comment);
  commentInput.value = '';
});
