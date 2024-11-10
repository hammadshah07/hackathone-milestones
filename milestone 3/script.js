var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    // Collect input values
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var cnic = document.getElementById("cnic").value;
    var education = document.getElementById("education").value;
    var skills = document.getElementById("skills").value;
    var experience = document.getElementById("experience").value; // Corrected from "name" to "experience"
    // Generate the resume dynamically
    var resumeHTML = "\n        <h2><b>Resume</b></h2>\n        <p><b>Name:</b> ".concat(name, "</p>\n        <p><b>Phone:</b> ").concat(phone, "</p>\n        <p><b>Email:</b> ").concat(email, "</p>\n        <p><b>CNIC:</b> ").concat(cnic, "</p>\n\n        <h3>Education:</h3>\n        <p> ").concat(education, "</p>\n\n        <h3>Skills:</h3> \n        <p> ").concat(skills, "</p>\n        <h3>Experience:</h3> \n        <p>").concat(experience, "</p>\n    ");
    // Display the resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('the resume display is missing');
    }
});
