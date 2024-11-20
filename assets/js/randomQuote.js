document.addEventListener('DOMContentLoaded', function() {
    const quoteContainer = document.querySelector('.quote');
  
    const quotes = [
      "The only way to do great work is to love what you do. - Steve Jobs",
      "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
      "Don't let the noise of others' opinions drown out your own inner voice. - Steve Jobs",
      "Have the courage to follow your heart and intuition. They somehow already know what you truly want to become. - Steve Jobs",
      "Stay hungry, stay foolish. - Steve Jobs",
      "Innovation distinguishes between a leader and a follower. - Steve Jobs",
      "Design is not just what it looks like and feels like. Design is how it works. - Steve Jobs",
      "Sometimes life hits you in the head with a brick. Don't lose faith. - Steve Jobs",
      "I'm convinced that about half of what separates the successful entrepreneurs from the non-successful ones is pure perseverance. - Steve Jobs",
      "The people who are crazy enough to think they can change the world are the ones who do. - Steve Jobs",
      "The purpose of our lives is to be happy. - Dalai Lama",
      "Get busy living or get busy dying. - Stephen King",
      "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
      "Believe you can and you're halfway there. - Theodore Roosevelt",
      "The only impossible journey is the one you never begin. - Tony Robbins",
      "Act as if what you do makes a difference. It does. - William James",
      "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
      "Injustice anywhere is a threat to justice everywhere. - Martin Luther King Jr.",
      "The arc of the moral universe is long, but it bends toward justice. - Martin Luther King Jr.",
      "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke",
      "The best way to predict the future is to create it. - Peter Drucker",
      "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
      "Do what you can, with what you have, where you are. - Theodore Roosevelt",
      "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
      "We must accept finite disappointment, but never lose infinite hope. - Martin Luther King Jr.",
      "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek. - Barack Obama",
      "Yes we can. - Barack Obama",
      "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
      "Education is the most powerful weapon which you can use to change the world. - Nelson Mandela",
      "It always seems impossible until it's done. - Nelson Mandela",
      "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
      "The best way to find yourself is to lose yourself in the service of others. - Mahatma Gandhi",
      "Be the change that you wish to see in the world. - Mahatma Gandhi",
      "An eye for an eye only ends up making the whole world blind. - Mahatma Gandhi",
      "The weak can never forgive. Forgiveness is the attribute of the strong. - Mahatma Gandhi",
      "Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi",
      "To deny people their human rights is to challenge their very humanity. - Nelson Mandela",
      "There is no passion to be found playing small - in settling for a life that is less than the one you are capable of living. - Nelson Mandela",
      "To confine our attention to terrestrial matters would be to limit the human spirit. - Stephen Hawking",
      "That's one small step for a man, one giant leap for mankind. - Neil Armstrong",
      "Space exploration is a force of nature unto itself that no other force in society can rival. - Neil deGrasse Tyson",
      "The Earth is the cradle of humanity, but mankind cannot stay in the cradle forever. - Konstantin Tsiolkovsky",
      "The important achievement of Apollo was demonstrating that humanity is not forever chained to this planet and our visions go rather further than that and our opportunities are unlimited. - Neil Armstrong",
      "Live now; make now always the most precious time. Now will never come again. - Jean-Luc Picard",
      "It is possible to commit no mistakes and still lose. That is not a weakness; that is life. - Jean-Luc Picard",
      "Things are only impossible until they are not. - Jean-Luc Picard",
      "Logic is the beginning of wisdom, not the end. - Spock",
      "The needs of the many outweigh the needs of the few. - Spock",
      "Insufficient facts always invite danger. - Spock",
      "Without freedom of choice there is no creativity. - James T. Kirk",
      "Risk is our business. That's what this starship is all about. That's why we're aboard her. - James T. Kirk",
      "The more complex the mind, the greater the need for the simplicity of play. - James T. Kirk",
      "Compassion: that's the one thing no machine ever had. Maybe it's the one thing that keeps men ahead of them. - Leonard McCoy",
      "In critical moments, men sometimes see exactly what they wish to see. - Leonard McCoy",
      "To boldly go where no man has gone before. - Star Trek",
      "The human adventure is just beginning. - Star Trek: The Motion Picture",
      "There is no such thing as the unknown, only things temporarily hidden, temporarily not understood. - James T. Kirk",
      "Time is the fire in which we burn. - Soran",
      "The universe is a pretty big place. If it's just us, seems like an awful waste of space. - Carl Sagan",
      "Somewhere, something incredible is waiting to be known. - Carl Sagan",
      "For small creatures such as we, the vastness is bearable only through love. - Carl Sagan",
      "Exploration is in our nature. We began as wanderers, and we are wanderers still. - Carl Sagan"
    ];
  
    function getESTDate() {
      const now = new Date();
      const utcOffset = now.getTimezoneOffset();
      const estOffset = 300;
      const estDate = new Date(now.getTime() + (utcOffset - estOffset) * 60000);
      return estDate.toISOString().split('T')[0];
    }
  
    const today = getESTDate();
    const storedDate = localStorage.getItem('quoteDate');
    const storedQuote = localStorage.getItem('quoteText');
  
    let quote;
  
    if (storedDate === today && storedQuote) {
      quote = storedQuote;
    } else {
      quote = quotes[Math.floor(Math.random() * quotes.length)];
      localStorage.setItem('quoteDate', today);
      localStorage.setItem('quoteText', quote);
    }
  
    quoteContainer.textContent = quote;
  });