// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.getElementById('noun1');
const verbButton = document.getElementById('verb');
const adjectiveButton = document.getElementById('adjective');
const noun2Button = document.getElementById('noun2');
const settingButton = document.getElementById('setting');

// Constants for p tag to display query selectors
const choosenNoun1 = document.getElementById('choosenNoun1');
const choosenVerb = document.getElementById('choosenVerb');
const choosenAdjective = document.getElementById('choosenAdjective');
const choosenNoun2 = document.getElementById('choosenNoun2');
const choosenSetting = document.getElementById('choosenSetting');

// Constants for final buttons and p tags
const playbackButton = document.getElementById('playback');
const randomButton = document.getElementById('random');
const storyElement = document.getElementById('story');

// Variables for pre-defined arrays
let nouns1 = ["cat", "dog", "elephant"];
let verbs = ["runs", "jumps", "dances"];
let adjectives = ["happy", "sad", "excited"];
let nouns2 = ["ball", "tree", "computer"];
let settings = ["park", "beach", "office"];

// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* Functions
-------------------------------------------------- */

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function noun1_on_click() {
    // variable to get array element and displaying it
    selectedNoun1 = getRandomElement(nouns1);
    document.getElementById('choosenNoun1').textContent = selectedNoun1;
    // if-else to change count setting
}

function verb_on_click() {
    selectedVerb = getRandomElement(verbs);
    document.getElementById('choosenVerb').textContent = selectedVerb;
}

function adjective_on_click() {
    selectedAdjective = getRandomElement(adjectives);
    document.getElementById('choosenAdjective').textContent = selectedAdjective;
}

function noun2_on_click() {
    selectedNoun2 = getRandomElement(nouns2);
    document.getElementById('choosenNoun2').textContent = selectedNoun2;
}

function setting_on_click() {
    selectedSetting = getRandomElement(settings);
    document.getElementById('choosenSetting').textContent = selectedSetting;
}

function playback_on_click() {
    document.getElementById('story').textContent = `${selectedNoun1} ${selectedVerb} the ${selectedAdjective} ${selectedNoun2} in the ${selectedSetting}.`;
}

function random_on_click() {
    noun1_on_click();
    verb_on_click();
    adjective_on_click();
    noun2_on_click();
    setting_on_click();
    playback_on_click();
}

/* Event Listeners
-------------------------------------------------- */
document.getElementById('noun1').addEventListener('click', noun1_on_click);
document.getElementById('verb').addEventListener('click', verb_on_click);
document.getElementById('adjective').addEventListener('click', adjective_on_click);
document.getElementById('noun2').addEventListener('click', noun2_on_click);
document.getElementById('setting').addEventListener('click', setting_on_click);
document.getElementById('playback').addEventListener('click', playback_on_click);
document.getElementById('random').addEventListener('click', random_on_click);