document.getElementById("BSN-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    let firstname = document.getElementById("firstname").value.trim();
    let lastname = document.getElementById("lastname").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phonenumber").value.trim();
    let role = document.getElementById("role").value.trim();
    let currentCTC = document.getElementById("CurrentCTC").value.trim();
    let expectedCTC = document.getElementById("ExpectedCTC").value.trim();
    let experience = document.getElementById("experience").value.trim();
    let resume = document.getElementById("resume").files[0]; // Get uploaded file

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phonePattern = /^[0-9]{10}$/; // Ensures 10-digit phone number

    // Validation
    if (!firstname || !lastname || !email || !phone || !role || !currentCTC || !expectedCTC || !experience || !resume) {
        alert("Please fill in all fields.");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!phonePattern.test(phone)) {
        alert("Phone number must be 10 digits.");
        return;
    }

    // File validation (only PDF, DOC, DOCX allowed)
    let allowedExtensions = /(\.pdf|\.doc|\.docx)$/i;
    if (!allowedExtensions.test(resume.name)) {
        alert("Only PDF, DOC, or DOCX files are allowed.");
        return;
    }

    // Store form data in Local Storage
    let formData = {
        firstname,
        lastname,
        email,
        phone,
        role,
        currentCTC,
        expectedCTC,
        experience,
        resumeName: resume.name // Store file name (not file itself)
    };

    localStorage.setItem("BSNFormData", JSON.stringify(formData));
    alert("Form submitted successfully & data stored in local storage!");

    this.reset(); // Clear form after submission
});

// Load stored data (Optional)
window.onload = function() {
    let savedData = localStorage.getItem("BSNFormData");
    if (savedData) {
        savedData = JSON.parse(savedData);
        document.getElementById("firstname").value = savedData.firstname;
        document.getElementById("lastname").value = savedData.lastname;
        document.getElementById("email").value = savedData.email;
        document.getElementById("phonenumber").value = savedData.phone;
        document.getElementById("role").value = savedData.role;
        document.getElementById("CurrentCTC").value = savedData.currentCTC;
        document.getElementById("ExpectedCTC").value = savedData.expectedCTC;
        document.getElementById("experience").value = savedData.experience;
    }
};