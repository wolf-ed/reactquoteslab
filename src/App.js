import { useState } from 'react';
import classes from './App.module.css';
import Header from "./components/header/Header";
import AllQuotes from './components/AllQuotes/AllQuotes';
import RandomQuotes from './components/RandomQuotes/RandomQuotes';
import Button from './UI/Button/Button'

function App() {
  const [showRandom, setShowRandom] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);

  const nextQuoteHandler = () => {
    setCurrentQuote(prevQuote => prevQuote + 1)
  }

  const prevQuoteHandler = () => {
    if (currentQuote > 0) {
    setCurrentQuote(prevQuote => prevQuote -1)
    }
  }

  const showRandomQHandler = () => {
    setShowRandom(prevState => !prevState)
    if (showAll === true) {
      setShowAll(false)
    }
  }

  const showAllHandler = () => {
    setShowAll(prevState => !prevState)
    if(showRandom === true) {
      setShowRandom(false)
    }
  }

  return (
    <div className={classes.app}>
      <Header />
      <section className={classes.navigation}>
      <Button onClick={showRandomQHandler} >Show Random Quotes</Button>
      <Button onClick={showAllHandler} >See all Quotes</Button>
      </section>
      {showRandom && <RandomQuotes
        onNextHandler={nextQuoteHandler}
        onPrevHandler={prevQuoteHandler}
        quoteIndex={currentQuote} />}
      {showAll && <AllQuotes />}
    </div>
  );
}

export default App;
