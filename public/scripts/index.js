document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navbarMenu = document.querySelector(".navbar-menu");

  menuIcon.addEventListener("click", function () {
    navbarMenu.style.display = navbarMenu.style.display === "block" ? "none" : "block";
  });
});
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validate inputs
  if (!name || !email || !subject || !message) {
   alert("Please fill in all fields.");
   return;
  }

  // Create an object to store the data
  const formData = {
   name,
   email,
   subject,
   message,
   timestamp: new Date().toLocaleString(),
  };

  // Store the data in local storage
  localStorage.setItem("contactFormData", JSON.stringify(formData));

  // Show success message
  alert("Your message has been submitted successfully!");

  // Clear the form
  document.getElementById("contactForm").reset();
 });