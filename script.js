const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-Main');
const notification = document.getElementById('notification');
const finalMessage = document.getElementById('final-message');
const finalMessageRevealWord = document.getElementById('final-message-reveal-word');

const figureParts = document.querySelectorAll('.figure-part');
const words = ['application', 'programming', 'interface','library','computer','important','secondary','television','congratulation'];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let playable = true;
const correctLetters = [];
const wrongLetters = [];