// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
var noun1Button = document.getElementById('noun1');
var verbButton = document.getElementById('verb');
var adjectiveButton = document.getElementById('adjective');
var noun2Button = document.getElementById('noun2');
var settingButton = document.getElementById('setting');

// Constants for p tag to display query selectors
var choosenNoun1 = document.getElementById('choosenNoun1');
var choosenVerb = document.getElementById('choosenVerb');
var choosenAdjective = document.getElementById('choosenAdjective');
var choosenNoun2 = document.getElementById('choosenNoun2');
var choosenSetting = document.getElementById('choosenSetting');

// Constants for final buttons and p tags
var playbackButton = document.getElementById('playback');
var randomButton = document.getElementById('random');
var storyElement = document.getElementById('story');

// Variables for pre-defined arrays
let nouns1 = ["The turkey", "The dog", "mom"];
let verbs = ["danced with", "doesn't like", "sat on"];
let adjectives = ["scary", "sad", "a goofy"];
let nouns2 = ["ball", "worm", "computer"];
let settings = ["in my spaghetti", "beach", "office"];

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

function resetStory() {
    // Resetting the story content
    document.getElementById('story').textContent = '';

    // Resetting the displayed choices
    document.getElementById('choosenNoun1').textContent = '';
    document.getElementById('choosenVerb').textContent = '';
    document.getElementById('choosenAdjective').textContent = '';
    document.getElementById('choosenNoun2').textContent = '';
    document.getElementById('choosenSetting').textContent = '';

    // Resetting the stored selections
    selectedNoun1 = '';
    selectedVerb = '';
    selectedAdjective = '';
    selectedNoun2 = '';
    selectedSetting = '';
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
document.getElementById('reset').addEventListener('click', resetStory);
