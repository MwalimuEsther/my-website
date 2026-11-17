const form = document.getElementById("contactForm");
const feedback = document.getElementById("formMessage");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const text = document.getElementById("message").value.trim();
  if (name === "") {
    feedback.textContent = "Please enter your name.";
    return;
  }
  if (!email.includes("@") || !email.includes(".")) {
    feedback.textContent = "Please enter a valid email address.";
    return;
  }
  if (text.length < 10) {
    feedback.textContent = "Your message must be at least 10 characters.";
    return;
  }
  feedback.textContent = "Thank you! Your message is ready to send.";
  form.reset();
});
<script src="script.js"></script>
