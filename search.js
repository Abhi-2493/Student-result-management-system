var students = [
    {
        registrationNumber: "1001",
        name: "Abhi",
        year: 1,
        marks: {
            yearI: 93,
            yearII: 0,
            yearIII: 0,
            yearIV: 0
        },
        mobileNumber: "7891756770"
    },
    {
        registrationNumber: "1002",
        name: "Tanu",
        year: 1,
        marks: {
            yearI: 42,
            yearII: 0,
            yearIII: 0,
            yearIV: 0
        },
        mobileNumber: "9079327085"
    },
    {
        registrationNumber: "1003",
        name: "Pratik Kumar",
        year: 1,
        marks: {
            yearI: 82,
            yearII: 0,
            yearIII: 0,
            yearIV: 0
        },
        mobileNumber: "6033206595"
    },
    {
        registrationNumber: "1004",
        name: "Tanishk",
        year: 1,
        marks: {
            yearI: 55,
            yearII: 0,
            yearIII: 0,
            yearIV: 0
        },
        mobileNumber: "9352479300"
    },
    {
        registrationNumber: "2001",
        name: "Vivek Soni",
        year: 2,
        marks: {
            yearI: 32,
            yearII: 76,
            yearIII: 0,
            yearIV: 0
        },
        mobileNumber: "9334832123"
    },
    {
        registrationNumber: "2002",
        name: "Devkaran Nair",
        year: 2,
        marks: {
            yearI: 57,
            yearII: 36,
            yearIII: 0,
            yearIV: 0
        },
        mobileNumber: "9801242342"
    },
    {
        registrationNumber: "2003",
        name: "Yuvraj Soni",
        year: 2,
        marks: {
            yearI: 67,
            yearII: 79,
            yearIII: 0,
            yearIV: 0
        },
        mobileNumber: "9768674323"
    },
    {
        registrationNumber: "2004",
        name: "Prince jain",
        year: 2,
        marks: {
            yearI: 98,
            yearII: 12,
            yearIII: 0,
            yearIV: 0
        },
        mobileNumber: "9883298425"
    },
    {
        registrationNumber: "3001",
        name: "Dhruv Dheora",
        year: 3,
        marks: {
            yearI: 76,
            yearII: 79,
            yearIII: 77,
            yearIV: 0
        },
        mobileNumber: "7234723648"
    },
    {
        registrationNumber: "3002",
        name: "Mohd Sahil",
        year: 3,
        marks: {
            yearI: 82,
            yearII: 79,
            yearIII: 87,
            yearIV: 0
        },
        mobileNumber: "6387238712"
    },
    {
        registrationNumber: "3003",
        name: "Jhonny dep",
        year: 3,
        marks: {
            yearI: 15,
            yearII: 18,
            yearIII: 47,
            yearIV: 0
        },
        mobileNumber: "6377232711"
    },
    {
        registrationNumber: "3004",
        name: "Mayank",
        year: 3,
        marks: {
            yearI: 67,
            yearII: 57,
            yearIII: 34,
            yearIV: 0
        },
        mobileNumber: "8248762467"
    },
    {
        registrationNumber: "3005",
        name: "Gunjan Yadav",
        year: 3,
        marks: {
            yearI: 57,
            yearII: 34,
            yearIII: 88,
            yearIV: 0
        },
        mobileNumber: "9287235323"
    },
    {
        registrationNumber: "4001",
        name: "Ronak",
        year: 4,
        marks: {
            yearI: 82,
            yearII: 79,
            yearIII: 87,
            yearIV: 80
        },
        mobileNumber: "9345237478"
    },
    {
        registrationNumber: "4002",
        name: "Akhilesh Yadav",
        year: 4,
        marks: {
            yearI: 95,
            yearII: 81,
            yearIII: 79,
            yearIV: 15
        },
        mobileNumber: "7328892348"
    },
    {
        registrationNumber: "4003",
        name: "Himanshu",
        year: 4,
        marks: {
            yearI: 45,
            yearII: 75,
            yearIII: 23,
            yearIV: 10
        },
        mobileNumber: "7623473212"
    },
    {
        registrationNumber: "4004",
        name: "Nikhil saini",
        year: 4,
        marks: {
            yearI: 82,
            yearII: 79,
            yearIII: 87,
            yearIV: 80
        },
        mobileNumber: "9823765871"
    },
    {
        registrationNumber: "4005",
        name: "Ritu Sharma",
        year: 4,
        marks: {
            yearI: 79,
            yearII: 98,
            yearIII: 96,
            yearIV: 97
        },
        mobileNumber: "6768374353"
    },
    {
        registrationNumber: "4006",
        name: "Kartik",
        year: 4,
        marks: {
            yearI: 52,
            yearII: 13,
            yearIII: 36,
            yearIV: 90
        },
        mobileNumber: "8349843982"
    },
];


function searchStudentByRegistrationNumber(registrationNumber) {
    return students.find(function(student) {
        return student.registrationNumber === registrationNumber;
    });
}


function updateStudentData(updatedStudent) {
    var index = students.findIndex(function(student) {
        return student.registrationNumber === updatedStudent.registrationNumber;
    });
    if (index !== -1) {
        students[index] = updatedStudent;

       
        localStorage.setItem('savedResults', JSON.stringify(students));
    }
}


function getSearchResults() {
    return students;
}
