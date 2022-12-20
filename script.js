const quoteText = document.querySelector(".quote");
const authorName = document.querySelector(".name");
const soundBtn = document.querySelector(".sound");
const copyBtn = document.querySelector(".copy");
quoteBtn = document.querySelector("button");

function randomQuote(){
    // console.log("clicked")
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        console.log(result);
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
    });
    
}

soundBtn.addEventListener("click", ()=>{
    let utterence = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterence);

});
copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText);

});

quoteBtn.addEventListener("click", randomQuote);