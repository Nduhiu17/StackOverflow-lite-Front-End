let loadQuestions = () => {//derfining the method
        fetch('http://127.0.0.1:5000/api/v1/questions',{

            method: 'GET',
    
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        })
        .then((res) => res.json())//getting a promise from the data
        .then((data) => {
            console.log(data.data);
            allData =data.data

            let output = '';
            allData.forEach((question) => {//looping over the fetched data
                output +=
                `<div class="question-title">
                    <a href="question-details.html"><h3>W${question.title}</h3></a>
                </div>
                <div class="question-content">
                ${question.body}
                </div>
                <div class="question-tags">
                    <div class="question-author">
                        Author:${question.user.username}
                    </div>
                    <div class="question-creation-date">
                        Created at: ${question.date_created}
                    </div>
                    <div class="question-answers">
                        
                    </div>
                </div>`;
            document.getElementById('middle-body-main').innerHTML = output;

            
            
        })
    
        .then(data => {
            console.log(data);
        })
        
    })
}