document.getElementById('addResultForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form data
    var registrationNumber = document.getElementById('registrationNumber').value.trim();
    var name = document.getElementById('name').value.trim();
    var year = parseInt(document.getElementById('year').value.trim());
    var marksYear1 = parseInt(document.getElementById('marksYear1').value.trim());
    var marksYear2 = parseInt(document.getElementById('marksYear2').value.trim());
    var marksYear3 = parseInt(document.getElementById('marksYear3').value.trim());
    var marksYear4 = parseInt(document.getElementById('marksYear4').value.trim());
    
    // Check if any field is empty
    if (!registrationNumber || !name || isNaN(year) || isNaN(marksYear1)) {
        console.error("All fields are required.");
        return;
    }

    // Save the result in local storage
    var studentData = {
        registrationNumber: registrationNumber,
        name: name,
        year: year,
        marks: {
            yearI: marksYear1,
            yearII: marksYear2,
            yearIII: marksYear3,
            yearIV: marksYear4
        },
        mobileNumber: "123-456-7890" // Assuming a default value for mobile number
    };

    // Check if local storage is available
    if (typeof(Storage) !== "undefined") {
        // Retrieve existing data or initialize an empty array
        var savedData = JSON.parse(localStorage.getItem('savedResults')) || [];
        
        // Add new data to the existing array
        savedData.push(studentData);
        
        // Save the updated data back to local storage
        localStorage.setItem('savedResults', JSON.stringify(savedData));
        
        // Display confirmation message
        alert("Result saved successfully!");

        // Clear form fields
        document.getElementById('addResultForm').reset();

        // Redirect to view result page
        window.location.href = "viewresult.html";
    } else {
        console.error("Local storage is not supported.");
    }
});
