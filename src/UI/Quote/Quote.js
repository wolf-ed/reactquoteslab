import classes from './Quote.module.css';

const Quote = props => {

    return <p className={classes.quote}
    key={props.index}>
        {props.quote}
        <span className={classes.author}>{props.author}</span>
    </p>
};

export default Quote;