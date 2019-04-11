let login = () => {//function to log in a user

    let username = document.getElementById('name').value;
    let password = document.getElementById('password').value;
    let data = {//asigning variables to log in details
        username: username,
        password: password
    }


    fetch('https://antony-stackoverflow-v2.herokuapp.com/auth/login', {//fetching the login url
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

        })
        .then((res) => {
            return res.json()
        })
        .then((data) => {
        localStorage.setItem("token",data.access_token)
        // window.location.replace("home.html");
            if (data.message === "Logged in") {//checking a successful login
                window.location.replace("home.html");//redirecting to home page after a successful login
            }
                if(data.message){
                    window.alert(data.message)
                }
            })
        .catch(error => {
            console.log(error);
        })
}

function logout() {//function to logout
    localStorage.clear()
    console.log(localStorage.data)
    window.location.replace("login.html");
}


let register = () => {
//asigning variables for registering details
    let username = document.getElementById('register-username').value;
    let email = document.getElementById('register-email').value;
    let password = document.getElementById('register-password').value;
    let repeatedPassword = document.getElementById('register2-password').value;
    if (repeatedPassword !== password) {
        alert("passwords don't match")
    }

    let data = {//asigning variables to registering details
        username: username,
        email: email,
        password: password,
    }


    fetch('https://antony-stackoverflow-v2.herokuapp.com/auth/signup', {//fetching the signup url
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

        })
        .then((res) => {
            if(res.status===201)
                window.location.replace("login.html");

            return res.json()


        })
        .then((data) => {
            if (data.message === "You have been signed up successfully") {
                window.location.replace("login.html");//redirecting to login page after a successful account creation
            }
                if(data.message){
                    window.alert(data.message)//alerting the error messages
                }
            })
        .catch(error => {
            console.log(error);
        })
}
