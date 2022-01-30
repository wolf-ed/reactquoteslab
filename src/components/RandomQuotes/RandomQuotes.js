import React from 'react';
import quoteObjectsArray from "../../quotesMaker";
import classes from './RandomQuotes.module.css';
import Quote from '../../UI/Quote/Quote';
import Button from '../../UI/Button/Button';

const RandomQuotes = (props) => {

    return <div className={classes['random-quotes']}>
        <h2>Random quotes</h2>
        <Button onClick={props.onPrevHandler}>Prev Quote</Button>
              <Button onClick={props.onNextHandler}>Next Quote</Button>
      <Quote 
      index={props.quoteIndex}
      quote={quoteObjectsArray[props.quoteIndex].sentence} 
      author={quoteObjectsArray[props.quoteIndex].author}/>
      
    </div>
}

export default React.memo(RandomQuotes);