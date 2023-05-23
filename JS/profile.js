
function profileData() {
    fetch('./student.json')
        .then((response) => response.json())
        .then((json) => {
            stud = JSON.parse(JSON.stringify(json)).student;
            callProfileData();
        })
}

function callProfileData() {

    for (let i = 0; i < stud.length; i++) {
        if (stud[i].id == sessionStorage.getItem("studId")) {

            for (const key in stud[i]) {

                if (stud[i].hasOwnProperty(key)) {

                    if (key == "username") {
                        document.getElementById("username").innerHTML = stud[i][key];

                    } else if (key == "id") {
                        document.getElementById("id").innerHTML = stud[i][key];
                    } else if (key == "dob") {
                        document.getElementById("dob").innerHTML = stud[i][key];
                    } else if (key == "email") {
                        document.getElementById("email").innerHTML = stud[i][key];
                    }
                }
            }

        }
    }

}


{/* <script>

function profileData() {
    fetch('./student.json')
        .then((response) => response.json())
        .then((json) => {
            stud = JSON.parse(JSON.stringify(json)).student;
            callProfileData();                }
        )
}
profileData();

function callProfileData() {
    

        for (let i = 0; i < stud.length; i++) {
            if (stud[i].id == sessionStorage.getItem("studId")) {

                for (const key in stud[i]) {
                    console.log("1")


                    if (stud[i].hasOwnProperty(key)) {
                        console.log("2")


                        if (key == "username") {
                            document.getElementById("name").innerHTML = stud[i][key];
                            console.log("3")

                        } else if (key == "id") {
                            document.getElementById("id").innerHTML = stud[i][key];
                        } else if (key == "dob") {
                            document.getElementById("dob").innerHTML = stud[i][key];
                        } else if (key == "email") {
                            document.getElementById("email").innerHTML = stud[i][key];
                        }
                    }
                }

            }
        }

}



</script> */}

