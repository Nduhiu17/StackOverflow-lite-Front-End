function loadQuestions(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET','https://antony-stackoverflow-v2.herokuapp.com/api/v1/questions',true);//CONsuming get all questions endpoint

    xhr.onload = function(){
        if(this.status == 200){
            var questions = JSON.parse(this.responseText);
            console.log(questions);

            let data = Object.values(questions)
            
            allData = data[1];
        
            let output = '';
            allData.forEach((question) => {//looping over the questions
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
                        Created on: ${question.date_created}
                    </div>
                    <div class="question-answers">
                        
                    </div>
                </div>`;
            })
            document.getElementById('middle-body-main').innerHTML=output;
            }
            
        }
        xhr.send()//sending the data to html page
    }
   
 