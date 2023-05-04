
$(document).ready(() => {
    if (null != localStorage.getItem("students")) {
        var students = JSON.parse(localStorage.getItem("students"));
        $("#studentsCount").text(students.length);
    } 
});