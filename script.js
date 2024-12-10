var _a;
// Get form and display elements
var form = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume-display');
// Attach event listener to the generate button
(_a = document.getElementById('generate-resume')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    // Get form input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Validate fields
    if (!name || !email || !phone || !education || !experience || !skills) {
        alert('Please fill out all fields.');
        return;
    }
    // Generate resume HTML
    resumeDisplay.innerHTML = "\n    <h2>".concat(name, "</h2>\n    <p><strong>Email:</strong> ").concat(email, "</p>\n    <p><strong>Phone:</strong> ").concat(phone, "</p>\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n    <h3>Skills</h3>\n    <p>").concat(skills.split(',').map(function (skill) { return "<span>".concat(skill.trim(), "</span>"); }).join(', '), "</p>\n  ");
    // Reset the form
    form.reset();
});
