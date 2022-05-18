import { getApi } from "./tamaragetapis.js";

const displayResult = document.querySelector('.results');
console.log(displayResult);

const showResults = () => {
    displayResult.innerHTML="";
    getApi().then((result) => {
        const orderScore = result.result.sort((a,b) => b.score - a.score);
        orderScore.forEach((score) => {
            const li = document.createElement('li');
            li.innerHTML = `<li class= 'score-item'>${score.user}: ${score.score}</li>`;
            displayResult.appendChild(li);
        });
    });
};

export default showResults;