if(localStorage.getItem("token") == null) {
    window.location.replace("index.html");
}

function postQuestion(){//defining the function
    let token = localStorage.getItem("token")//assigning the token for the looged in user a variable

    let title = document.getElementById('question-title').value;
    let body = document.getElementById('question-body').value;
     let data = {
         title:title,
         body:body
     }

    fetch('https://antony-stackoverflow-v2.herokuapp.com/api/v1/questions',{//calling the api endpoint
        method:'POST',
        headers:{
            'Accept':'application/json',
            'content-type':'application/json',
            'Authorization': `Bearer ${token}`
        },
        body:JSON.stringify(data)

    })
    .then(res => res.json())//getting the promise
    .then(data => {
        if (data.message === "The question posted successfully") {
            window.location.replace("home.html");//redirecting to home page after a successful question creation
        }
        if(data.message){
            window.alert(data.message)//alerting the error messages
        }
    })
}


