const dialogue = document.querySelector('.dialogue'); // dialogue text
const nextBtn = document.querySelector('.next-button'); // next button
const leftBox = document.querySelector('.left-box');
const chatBox = document.querySelector('.chatbox');
const emoji = document.querySelector('.fadeImage');

emoji.style.visibility = 'hidden'; // hide emoji until No button clicked

// create Yes and No button to be added when next is clicked
const yesBtn = document.createElement('p');
yesBtn.classList.add('button')
yesBtn.style.display = 'inline';
yesBtn.style.marginLeft = '100px';
yesBtn.textContent = 'Yes';

const noBtn = document.createElement('p');
noBtn.classList.add('button')
noBtn.style.display = 'inline';
noBtn.style.marginLeft = '30px';
noBtn.textContent = 'No';

// event listener for next button
nextBtn.addEventListener('click', () => {
    dialogue.textContent = "Will you be my Valentine?"; // change dialogue
    nextBtn.remove(); // remove nextBtn from screen
    // add Yes and No buttons
    leftBox.appendChild(yesBtn);
    leftBox.appendChild(noBtn);
});

// event listener for yes button
yesBtn.addEventListener('click', () => {
    chatBox.style.backgroundImage = 'url("./images/stardew\ chatbox\ smile.png")'; // change character image to smiling
    dialogue.textContent = "Yay! Love you so much :)"; // change dialogue
});

noBtn.addEventListener('click', () => {
    chatBox.style.backgroundImage = 'url("./images/stardew\ chatbox.png")'; // change character image
    dialogue.textContent = "Oh... okay :/"; // change dialogue
    // make emoji appear, then fade out
    emoji.style.visibility = 'visible';
    emoji.style.opacity = '0';
    // remove the emoji after
    setTimeout(() => {
        emoji.style.visibility = 'hidden';
        emoji.style.opacity = '1';
    }, 2000);
});