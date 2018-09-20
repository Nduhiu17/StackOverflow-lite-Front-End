const id = window.location.search.slice(1);
const el = document.querySelector("#question-details");
const answers = document.querySelector("#answers");
const deleteBtn = document.querySelector("#delete-question-button");

fetch(`http://127.0.0.1:5000/api/v1/questions/${id}`)
  .then(res => res.json())
  .then(question => {
    el.innerHTML = `
        <div class="question-title">
        <h3>${question.data.title}</h3>
        </div>
        <div class="question-content">
            ${question.data.body}
        </div>
    `;

    answers.innerHTML = question.data.answers.map(
      answer => `
        <div class="question-answers-details">
            <div class="question-answer-body">
                ${answer.body}
            </div>
            <div class="answer-voting">
                <div class="question-answer-votes">
                    Accept
                </div>
                <div class="question-answer-votes">
                    Upvote
                </div>
                <div class="question-answer-votes">
                    Downvote
                </div>
            </div>
        </div>
    `
    );
  });


deleteBtn.addEventListener("click", () => {
  return fetch(`http://127.0.0.1:5000/api/v1/questions/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  })
    .then(res => res.json())
    .then(data => {
        if(data.message === 'Successfully deleted') {
            window.location.replace('/home.html')
        } else {            
            alert('Something went wrong')
        }
    });
});
