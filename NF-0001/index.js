var studentNumber;

// Function to display the student count entered
function showStudentCount() {
    studentNumber = document.getElementById('studentNumber').value;
    console.log(studentNumber);
    document.getElementById('displayStudentNumber').textContent = studentNumber ? studentNumber : '0';
}

// Function to redirect to the index.html file
function redirectToIndex() {
    //window.location.href = 'index.html';
    console.log(studentNumber);
}


function myfunction(){
    let studentName = document.getElementById("stdName").value ;
    let studentAge = document.getElementById("stdAge").value;

    if(studentName == ""){
        alert("Enter student name!");
    }
    else if(studentAge == ""){
        alert("Enter student age!");
    }else{
        alert("Data entered successfully!")
        document.getElementById("stdName").value = "";
        document.getElementById("stdAge").value = "";
    }

    document.getElementById("displayName").innerHTML = studentName;
    document.getElementById("displayAge").innerHTML = studentAge;
    document.getElementById("studentCountDisplay").innerHTML = studentNumber;

    
}

