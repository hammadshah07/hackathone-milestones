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
    var experience = document.getElementById("experience").value;
    // Generate the resume dynamically
    var resumeHTML = "\n        <h2><b>Editable Resume</b></h2>\n        <p><b>Name:</b><span contenteditable\"true\"> ".concat(name, "</p></span>\n        <p><b>Phone:</b><span contenteditable\"true\"> ").concat(phone, "</p></span>\n        <p><b>Email:</b><span contenteditable\"true\"> ").concat(email, "</p></span>\n        <p><b>CNIC:</b><span contenteditable\"true\"> ").concat(cnic, "</p></span>\n\n        <h3>Education:</h3>\n        <p  contenteditable\"true\">").concat(education, "</p>\n        <h3>Skills:</h3>\n        <p  contenteditable\"true\">").concat(skills, "</p>\n        <h3>Experience:</h3>\n        <p  contenteditable\"true\">").concat(experience, "</p>\n    ");
    // Display the resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
});
