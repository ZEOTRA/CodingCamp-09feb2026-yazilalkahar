welcomeMessage();

// Welcome Message Function
function welcomeMessage() {
  // Show Popup
  let name = prompt("Welcome to YAZIL websites! What is your name?");

  // validate input
  if (name == null || name.trim() === "") {
    // If user cancels or enters an empty name, use "Guest" as default
    name = "Guest";
  }

  // Display Welcome Message
  document.getElementById("welcome-speech").innerHTML =
    `Hello, ${name}! Welcome to YAZIL website.`;
}

// Navbar Fixed on Scroll
window.onscroll = function () {
  const header = document.querySelector("#navbar");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger Menu Toggle
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

const contactForm = document.querySelector("#contactForm");
const submissionList = document.querySelector("#submissionList");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Stop the page from reloading

  // Get values from input fields
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  // Create a new message card
  const messageCard = document.createElement("div");
  messageCard.className =
    "p-6 bg-slate-50 border-l-4 border-sky-500 rounded-r-lg shadow-sm";

  messageCard.innerHTML = `
    <h5 class="font-bold text-slate-900">${name} <span class="text-sm font-normal text-slate-500">(${email})</span></h5>
    <p class="text-slate-600 mt-2">${message}</p>
    <p class="text-xs text-slate-400 mt-4">${new Date().toLocaleString()}</p>
  `;

  // Remove the "No messages yet" text if it exists
  if (submissionList.querySelector("p.italic")) {
    submissionList.innerHTML = "";
  }

  // Add the new message to the top of the list
  submissionList.prepend(messageCard);

  // Clear the form
  contactForm.reset();

  // Optional: scroll to the message
  messageCard.scrollIntoView({ behavior: "smooth" });
});
