const answer = document.querySelector("#answer-body-post");
const answerBtn = document.querySelector("#post-answer-button");

let body = "";

answer.addEventListener("keyup", e => {
  body = e.target.value;
});

answerBtn.addEventListener("click", e => {
  e.preventDefault();
  fetch(`https://antony-stackoverflow-v2.herokuapp.com/api/v1/questions/${id}/answers`, {
    method: 'POST',
    body: JSON.stringify({body:answer.value}),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
    .then(res => res.json())
    .then(data => window.location.reload())
    .catch(error => console.log(error));
});
