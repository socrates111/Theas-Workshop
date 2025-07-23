// Basic sanitization function to prevent basic XSS
function sanitizeInput(input) {
  return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = sanitizeInput(document.getElementById("name").value.trim());
    const email = sanitizeInput(document.getElementById("email").value.trim());
    const message = sanitizeInput(document.getElementById("message").value.trim());

    // You can add basic empty checks here if needed
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to send message.");
        }
        return response.json();
      })
      .then(data => {
        console.log("Server response:", data);
        alert("✅ Your message has been sent successfully!");
        form.reset();
      })
      .catch(error => {
        console.error("Error:", error);
        alert("❌ There was an error sending your message.");
      });
  });
});
