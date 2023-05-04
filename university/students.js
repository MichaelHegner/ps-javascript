var students = [];


$(document).ready(() => {
    if (null != localStorage.getItem("students")) {
        students = JSON.parse(localStorage.getItem("students"));
    }
    
    renderStudentsTable();
});



function createStudent() {
    let prename = $("#inputPrename").val();
    let lastname = $("#inputLastname").val();
    let id = $("#inputId").val();
    let student = new Student(id, prename, lastname);

    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    renderStudentsTable();
}

function renderStudentsTable() {
    // delete all rows in student table
    $("table tr:gt(0)").remove();

    // render/create rows for all students
    for (let student of students) {
        $("table tbody").append("<tr></tr>");

        let row = $("tr:last");
        row.append("<td>" + student.id +"</td>");
        row.append("<td>" + student.prename +"</td>");
        row.append("<td>" + student.lastname +"</td>");
    }
}

class Student {
    constructor(id, prename, lastname) {
        this.id = id;
        this.prename = prename;
        this.lastname = lastname;
    }
}