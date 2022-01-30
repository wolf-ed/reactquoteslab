
import { sourceQuote } from './quotes.js'

const quotesArray = sourceQuote.split(/\r?\n/);



const quotesMaker = (sentence, author) => {
    console.log('quotesmaker')

    let quote = {
        _sentence: sentence,
        _author: author,
        _quoteIndex: 0,
        fav: 0,
        likes: 0,
        timesSeen: 0,
        get author() {
            return this._author;
        },
        get sentence() {
            return this._sentence;
        },
        set sentence(newSentence) {
            this._sentence = newSentence;
        },
        set author(newAuthor) {
            this._author = newAuthor;
        }

    }
    return quote;
};

//      <span id="dog"><img src=".//resources/images/dog.webp"></span>


const quotesAsembly = (arr) => {
    let newArr = [];
    console.log('quotesmaker')
    for (let i = 0; i < arr.length; i = i + 2) {
        newArr.push(quotesMaker(arr[i], arr[i + 1]));
    }
    return newArr;
}

const quoteObjectsArray = quotesAsembly(quotesArray);

export default quoteObjectsArray;