import './index.css';

const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/1N0LPVIoQdgSBrgOYWr4/scores/';

const refreshBtn = document.querySelector('.refreshBtn');
const submitBtn = document.querySelector('.btn');
const player = document.querySelector('.name');
const scores = document.querySelector('.score');
const box = document.querySelector('.results');

const postData = () => {
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    fetch(URL, {
      method: 'POST',
      body: JSON.stringify({ user: player.value, score: scores.value }),
      headers: {
        'Content-type': 'application/json',
      },
    });
    player.value = '';
    scores.value = '';
  });
  // submitBtn.reset;
};

const getData = async () => {
  const response = await fetch(URL);
  const result = response.json();
  // location.reload()
  return result;
};

refreshBtn.addEventListener('click', getData);
refreshBtn.addEventListener('click', () => {
  window.location.reload();
});
postData();

const data = async () => {
  const data = await getData();
  const results = data.result;

  results.forEach((result) => {
    box.innerHTML
        += `<ul class="recent-scores">
        <li class="score-items">${result.user}:${result.score}</li>
        </ul>`;
  }).join('');
};

data();