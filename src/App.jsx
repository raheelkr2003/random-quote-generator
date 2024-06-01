import { useState } from 'react';
import './App.css'

function App() {
  let quotes = [
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Do not wait to strike till the iron is hot; but make it hot by striking. - William Butler Yeats",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "The best way to predict the future is to invent it. - Alan Kay",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "Do not watch the clock. Do what it does. Keep going. - Sam Levenson",
    "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. - James Cameron",
    "Life is what we make it, always has been, always will be. - Grandma Moses",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "Many of life's failures are people who did not realize how close they were to success when they gave up. - Thomas A. Edison",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Life is really simple, but we insist on making it complicated. - Confucius",
    "May you live all the days of your life. - Jonathan Swift",
    "Life itself is the most wonderful fairy tale. - Hans Christian Andersen",
    "Do not take life too seriously. You will never get out of it alive. - Elbert Hubbard",
    "To succeed in life, you need two things: ignorance and confidence. - Mark Twain",
    "Good friends, good books, and a sleepy conscience: this is the ideal life. - Mark Twain",
    "The unexamined life is not worth living. - Socrates",
    "Turn your wounds into wisdom. - Oprah Winfrey",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "Dream big and dare to fail. - Norman Vaughan",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King, Jr.",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "Act as if what you do makes a difference. It does. - William James",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "Don’t be afraid to give up the good to go for the great. - John D. Rockefeller",
    "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
    "Success is not in what you have, but who you are. - Bo Bennett",
    "The purpose of life is a life of purpose. - Robert Byrne",
    "Life is short, and it is up to you to make it sweet. - Sarah Louise Delany",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
    "Don't judge each day by the harvest you reap but by the seeds that you plant. - Robert Louis Stevenson",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "It is our choices that show what we truly are, far more than our abilities. - J.K. Rowling",
    "I would rather die of passion than of boredom. - Vincent van Gogh",
    "Everything you can imagine is real. - Pablo Picasso",
    "Life isn't about finding yourself. Life is about creating yourself. - George Bernard Shaw",
    "To live is the rarest thing in the world. Most people exist, that is all. - Oscar Wilde",
    "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett"
  ];  
  const [Quote, setQuote] = useState(

  );
  function QuoteGenerator() {
    const QuoteIndex = Math.floor(Math.random()*quotes.length);
    setQuote(quotes[QuoteIndex])
  }


  return (
    <>
    <h1>Random Quote Generator</h1>
    <h2>{Quote}</h2>
    <button onClick={QuoteGenerator}>Generate</button>
    </>
  )
}

export default App
