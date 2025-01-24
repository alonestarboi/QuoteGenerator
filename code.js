const quotes = [
   "Success is the sum of small efforts, repeated day in and day out.",
   "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
   "Hard work beats talent when talent doesn’t work hard.",
   "The only place where success comes before work is in the dictionary.",
   "I find that the harder I work, the more luck I seem to have.",
   "Don’t wish it were easier. Wish you were better.",
   "There are no shortcuts to any place worth going.",
   "Work hard in silence, let your success be your noise.",
   "The difference between ordinary and extraordinary is that little extra.",
   "Dreams don’t work unless you do.",
   "Success usually comes to those who are too busy to be looking for it."
];

const ptag = document.getElementById("quote");

function quoteLoader() {
   
   const quoteIndex = Math.floor(Math.random() * quotes.length);
   
   ptag.innerHTML = quotes[quoteIndex];
}
