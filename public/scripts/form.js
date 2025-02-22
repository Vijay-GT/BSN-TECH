document.addEventListener("DOMContentLoaded", function () {
  const formInputs = document.querySelectorAll(".form-input, .form-input-resume");
  const submitButton = document.querySelector(".submit");
  
  function validateForm() {
      let isValid = true;
      let formData = {};
      
      formInputs.forEach(input => {
          if (input.type === "file") {
              if (!input.files.length) {
                  isValid = false;
                  input.style.border = "2px solid red";
              } else {
                  input.style.border = "2px solid green";
                  formData["resume"] = input.files[0].name;
              }
          } else {
              if (input.value.trim() === "") {
                  isValid = false;
                  input.style.border = "2px solid red";
              } else {
                  input.style.border = "2px solid green";
                  formData[input.name] = input.value.trim();
              }

              if (input.name === "Email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
                  isValid = false;
                  input.style.border = "2px solid red";
                  alert("Please enter a valid email address.");
              }

              if (input.name === "Phone Number" && !/^\d{10}$/.test(input.value)) {
                  isValid = false;
                  input.style.border = "2px solid red";
                  alert("Please enter a valid 10-digit phone number.");
              }

              if (["Current CTC", "Expected CTC", "Years of experience"].includes(input.name)) {
                  if (isNaN(input.value) || input.value <= 0) {
                      isValid = false;
                      input.style.border = "2px solid red";
                      alert(`Please enter a valid ${input.placeholder}.`);
                  }
              }
          }
      });
      
      return { isValid, formData };
  }
  
  submitButton.addEventListener("click", function (event) {
      event.preventDefault();
      
      const { isValid, formData } = validateForm();
      
      if (isValid) {
          localStorage.setItem("jobApplication", JSON.stringify(formData));
          alert("Form submitted successfully!");

          // Clear form fields
          formInputs.forEach(input => {
              if (input.type === "file") {
                  input.value = "";
              } else {
                  input.value = "";
                  input.style.border = "1px solid #ccc";
              }
          });
      } else {
          alert("Please fill in all the required fields correctly.");
      }
  });

  // Ensure the button is properly referenced
  if (!submitButton) {
      console.error("Submit button not found.");
  }
});
