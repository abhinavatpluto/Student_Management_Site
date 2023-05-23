function addActivity() {
    let name = document.getElementById("name").value;
    let detail = document.getElementById("detail").value;
    sessionStorage.setItem(name, detail);
    alert("Activity Submitted");
}

function listActivity() {
    for (let i = 0; i < sessionStorage.length; i++) {
        let key = sessionStorage.key(i);
        console.log(key);
        console.log(sessionStorage.getItem(key));
    }
}

