'use strict';
document.getElementById('switchQ').addEventListener('click', showQuotes);
let viewQuote = [];
let quotes = [
  {
    quote: '❝ True knowledge exists in knowing that you know nothing.',
    source: '~ Socrates',
  },
  {
    quote: '❝ The only way to do great work is to LOVE what you do.',
    source: '~ Steve Jobs',
  },
  {
    quote:
      "❝ I don't care that they stole my idea..., I care that they don't have any of their own .",
    source: '~ Nikola Tesla',
  },
  {
    quote: '❝ Happiness is HOW, not WHAT, a talent, not an object.',
    source: '~ Hermann Hesse',
  },
  {
    quote: "❝ Yesterday is but today's memory, and tomorrow is today's dream.",
    source: '~ Khalil Gibran',
  },
  {
    quote:
      '❝ Imagination should be used, not to escape reality but to create it.',
    source: '~ Colin Wilson',
  },
  {
    quote: '❝ Love which is not reborn every day dies every day.',
    source: '~ Khalil Gibran',
  },
];
// make random color for the
function randomColor() {
  let randomC;
  let red = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let orange = Math.floor(Math.random() * 256);
  randomC = 'rgb(' + red + ',' + blue + ',' + orange + ')';
  return randomC;
}
//function to get random quote object from quotes array
function getRandomQuote() {
  const randomNum = Math.floor(Math.random() * quotes.length);
  const spliceQ = quotes.splice(randomNum, 1)[0];
  viewQuote.push(spliceQ);
  if (quotes.length === 0) {
    quotes = viewQuote;
    viewQuote = [];
  }
  return spliceQ;
}
function showQuote(quote) {
  //get the box of quote to get the two paragraph and show new quote
  const boxQuote = document.getElementById('quoteBox');
  boxQuote.innerHTML = quote;
}

let message = '';
function showQuotes() {
  // in click event runs function showQuotes , then fires the getRandomQuote function
  let quotes = getRandomQuote();
  message = '<p class="quote">' + quotes.quote + '</p>';
  message += '<p class="source">' + quotes.source;
  // call showQuote to inner in HTML the Random Quote
  showQuote(message);
  //call randomColor() the random color function
  randomColor();
  //Update background with new random color for
  document.getElementById('body').style.backgroundColor = randomColor();

  document.getElementById(
    'switchQ',
  ).style.backgroundColor = document.getElementById(
    'body',
  ).style.backgroundColor;
  document.getElementById(
    'icon',
  ).style.backgroundColor = document.getElementById(
    'body',
  ).style.backgroundColor;
  document.getElementById(
    'icon2',
  ).style.backgroundColor = document.getElementById(
    'body',
  ).style.backgroundColor;
}
