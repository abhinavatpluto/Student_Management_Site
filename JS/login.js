

function login() {
    fetch('./student.json')
        .then((response) => response.json())
        .then((json) => {
            stud = JSON.parse(JSON.stringify(json)).student;
            callLogin();
           
        }
        )
}

function callLogin() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let validUser = false;

    for (let i = 0; i < stud.length; i++) {
        if (stud[i].username == user && stud[i].password == pass) {
            validUser = true;

            sessionStorage.setItem('studId', stud[i].id);
            sessionStorage.setItem('username', stud[i].username);
            break;
        }
    }
 

    if (validUser) {
        window.location.href = "index.html";

    } else {
        alert("Wrong Username or Password");
    }
    

}
