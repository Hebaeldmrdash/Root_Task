var quotes=[
    {
        auther:'Epictetus',
        quote:"It's not what happens to you, but how you react to it that matters",
    },
    {
        auther:'Elbert Hubbard',
        quote:"Do not take life too seriously. You will not get out alive.",
    },
    {
        auther:'Wayne Gretzy',
        quote:"You miss 100% of the shots you don't take.",
    },
    {
        auther:'Nelson Mandela',
        quote:"Resentment is like drinking poison and waiting for your enemies to die.",
    },
    {
        auther:'Frank Sinatra',
        quote:"The best revenge is massive success.",
    },
];
function newQuote(){
}
var randomQuote=Math.floor(Math.rondom()*quotes.length)
document.getElementById('auther').innerHTML=quotes[randomQuote].auther
document.getElementById('quote').innerHTML=quotes[randomQuote].quote