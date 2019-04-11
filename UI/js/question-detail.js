const id = window.location.search.slice(1);
const el = document.querySelector("#question-details");
const answers = document.querySelector("#answers");
const deleteBtn = document.querySelector("#delete-question-button");


fetch(`https://antony-stackoverflow-v2.herokuapp.com/api/v1/questions/${id}`)
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
    fetch('https://antony-stackoverflow-v2.herokuapp.com/api/v1/questions/' + id, {
     method: "DELETE",
     headers: {
       "Content-Type": "application/json",
       Authorization: `Bearer ${localStorage.getItem("token")}`
     }
   })

    .then((res) => {
        if(res.status===204)
            window.location.replace("home.html");
        })
 
     .then(data => {
        if(data.message){
            window.alert(data.message)//alerting the error messages
        }
         else {
             alert('Something went wrong')
         }
         }) 
     })
 
 