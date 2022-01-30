import React from "react";
import quoteObjectsArray from "../../quotesMaker";
import classes from './AllQuotes.module.css';
import Quote from "../../UI/Quote/Quote";

const AllQuotes = () => {
    return <React.Fragment>
      <h2 className={classes['title-all-quotes']}>All quotes:</h2>
      <ul className={classes['all-quotes-list']}>
    {
    quoteObjectsArray.map((quote, index) => <li 
    key={index}>
      <Quote 
      index={index}
      quote={quote.sentence} 
      author={quote.author}/>
      </li>)
      }
  </ul>
    </React.Fragment>
}

export default React.memo(AllQuotes);