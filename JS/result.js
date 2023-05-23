
function login() {
    fetch('./student.json')
        .then((response) => response.json())
        .then((json) => {
            stud = JSON.parse(JSON.stringify(json)).student;
            displayMarks();
        });
}
login();




function displayMarks() {
    let subject = document.getElementById("subject").value;
    let marks = document.getElementById("marks");
    let grade = document.getElementById("grade");
    // login();



    marks.value = "";
    grade.value = "";

    for (let i = 0; i < stud.length; i++) {
        if (stud[i].id == sessionStorage.getItem("studId")) {

            for (const key in stud[i]) {

                console.log(stud[i]);
                if (stud[i].hasOwnProperty(key)) {
                    if (subject == key) {
                        marks.value = stud[i][key]["marks"];
                        grade.value = stud[i][key]["grade"];

                    }
                }

            }
        }
    }
}




