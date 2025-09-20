// Highlight active page in navbar
document.addEventListener("DOMContentLoaded", () => {
  let currentPage = window.location.pathname.split("/").pop();
  let links = document.querySelectorAll("nav a");

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.style.color = "#ff9800";
    }
  });
});

// Greeting on homepage
function showGreeting() {
  const now = new Date();
  const hour = now.getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Good morning! ☀️";
  } else if (hour < 18) {
    greeting = "Good afternoon! 🌞";
  } else {
    greeting = "Good evening! 🌙";
  }

  const greetingElement = document.getElementById("greeting");
  if (greetingElement) {
    greetingElement.textContent = greeting;
  }
}

// Contact form validation
function validateForm(event) {
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || message === "") {
    alert("Please fill out both name and message fields.");
    event.preventDefault(); // Stop form from submitting
     } else {
    alert(`✅ Thank you ${name}, your message has been submitted successfully!`);
    document.querySelector("form").reset(); // clear form after submit
  }
}

