var quotes = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    author: "― Oscar Wilde",
  },
  {
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "― Albert Einstein",
  },
  {
    quote:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    author: "― Bernard M. Baruch",
  },
  {
    quote:
      "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    author: "― Dr. Seuss",
  },
  {
    quote: "“You only live once, but if you do it right, once is enough.”",
    author: "― Mae West",
  },
  {
    quote: "“Be the change that you wish to see in the world.”",
    author: "― Mahatma Gandhi",
  },
  {
    quote: "“If you tell the truth, you don't have to remember anything.”",
    author: "― Mark Twain",
  },
  {
    quote: "“A friend is someone who knows all about you and still loves you.”",
    author: "― Elbert Hubbard",
  },
  {
    quote:
      "“To live is the rarest thing in the world. Most people exist, that is all.”",
    author: "― Oscar Wilde",
  },
];

var lastRandomIndex;

function newQuote() {
  var quoteDisplay = document.getElementById("quoteDisplay");
  var authorDisplay = document.getElementById("authorDisplay");
  var randomQuote;

  do {
    randomQuote = Math.floor(Math.random() * quotes.length);
  } while (randomQuote === lastRandomIndex);

  quoteDisplay.innerHTML = quotes[randomQuote].quote;
  authorDisplay.innerHTML = quotes[randomQuote].author;

  lastRandomIndex = randomQuote;
}
