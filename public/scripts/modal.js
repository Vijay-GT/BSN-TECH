// Get elements
const openBtn = document.getElementById("get-in-touch-btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-modal");

// Open modal
openBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

// Close modal when clicking X
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
