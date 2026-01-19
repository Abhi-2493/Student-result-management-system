function searchStudentByRegistrationNumber(registrationNumber) {
    return students.find(function(student) {
        return student.registrationNumber === registrationNumber;
    });
}

function updateStudentData(updatedStudent) {
    students = students.map(function(student) {
        if (student.registrationNumber === updatedStudent.registrationNumber) {
            return updatedStudent;
        } else {
            return student;
        }
    });
}

document.getElementById('searchButton').addEventListener('click', function() {
    var registrationNumber = document.getElementById('editRegistrationNumber').value.trim();
    var student = searchStudentByRegistrationNumber(registrationNumber);
    if (student) {
        document.getElementById('editFormContainer').style.display = 'block';
        document.getElementById('editName').value = student.name;
        document.getElementById('editYear').value = student.year;
        document.getElementById('editMarksYear1').value = student.marks.yearI;
        document.getElementById('editMarksYear2').value = student.marks.yearII;
        document.getElementById('editMarksYear3').value = student.marks.yearIII;
        document.getElementById('editMarksYear4').value = student.marks.yearIV;
    } else {
        alert("Student not found with registration number: " + registrationNumber);
    }
});

document.getElementById('editStudentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var registrationNumber = document.getElementById('editRegistrationNumber').value.trim();
    var student = searchStudentByRegistrationNumber(registrationNumber);
    if (student) {
        student.name = document.getElementById('editName').value.trim();
        student.year = parseInt(document.getElementById('editYear').value.trim());
        student.marks.yearI = parseInt(document.getElementById('editMarksYear1').value.trim());
        student.marks.yearII = parseInt(document.getElementById('editMarksYear2').value.trim());
        student.marks.yearIII = parseInt(document.getElementById('editMarksYear3').value.trim());
        student.marks.yearIV = parseInt(document.getElementById('editMarksYear4').value.trim());
        
        updateStudentData(student);

        localStorage.setItem('savedResults', JSON.stringify(students));

        alert("Result updated successfully!");
        document.getElementById('editResultForm').reset();
        document.getElementById('editFormContainer').style.display = 'none';
    } else {
        alert("Student not found with registration number: " + registrationNumber);
    }
});
