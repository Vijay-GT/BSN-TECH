document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navbarMenu = document.querySelector(".navbar-menu");

  menuIcon.addEventListener("click", function () {
    navbarMenu.style.display = navbarMenu.style.display === "block" ? "none" : "block";
  });
});

 document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("mail").value.trim();
  let message = document.getElementById("message").value.trim();
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Email regex pattern

  if (name === "") {
      alert("Please enter your name.");
      return;
  }

  if (email === "") {
      alert("Please enter your email.");
      return;
  } else if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
  }

  if (message === "") {
      alert("Please enter your message.");
      return;
  }

  // Storing data in local storage
  let formData = {
      name: name,
      email: email,
      message: message
  };

  localStorage.setItem("contactFormData", JSON.stringify(formData));

  alert("Form submitted successfully! Your data has been saved.");

  this.reset(); // Reset form fields after successful submission
});

function validateForm(event) {
  event.preventDefault(); // Prevent form submission

  const name = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("Message").value.trim();

  // Email regex pattern (only checks for '@' presence)
  const emailPattern = /@/;

  if (!fullname) {
    alert("Please enter your name.");
    return;
  }

  if (!email) {
    // alert("Please enter your email.");
    return;
  } else if (!emailPattern.test(email)) {
    alert("Email must contain '@' symbol.");
    return;
  }

  if (!message) {
    alert("Please enter your message.");
    return;
  }

  // Store data in local storage
  const formData = { fullname, email, message };
  localStorage.setItem("contactFormData", JSON.stringify(formData));

  alert("Message sent successfully!");

  // Clear form fields after submission
  document.getElementById("fullname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("Message").value = "";
}
