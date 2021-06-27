const quoteContainer=document.getElementById('quote-container');
const quoteText=document.getElementById('quote');
const authorText=document.getElementById('author');
const twitterBtn=document.getElementById('twitter');
const newQuoteBtn=document.getElementById('new-quote');
const loader=document.getElementById('loader');


//// get quotes from api using ajax
let apiQuotes=[];/// declaring as global object


function loading(){
    loader.hidden=false;
    quoteContainer.hidden=true;

}

function complete(){
    quoteContainer.hidden=false;
    loader.hidden=true;
}
/// new quote generaotr 
function newQuote(){
    loading();

    //// taking a random quote form the api
    const quote=apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
    // for blank field
    if(!quote.author){
        authorText.textContent="Unknown";
    }
    else
        authorText.textContent=quote.author;

    //chaning styling for very long text
    if(quote.text.length>120){
        quoteText.classList.add('long-quote');
    }
    else{
        quoteText.classList.remove('long-quote');
    }
    /// hide the loader
    complete();
    quoteText.textContent=quote.text;
    
}
async function getquotes(){
    loading();
    const apiUrl="https://type.fit/api/quotes";
    try{
        const respone=await fetch(apiUrl);//// response is only set when there is some data
        apiQuotes=await respone.json();
        // console.log(apiQuotes);
        newQuote();

    }catch(error){

    }
}
/////////tweet quote
function quoteTweet(){
    const twitterUrl=`https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');// to open twitter to new tab
}
newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',quoteTweet);
getquotes();
// loading();