// Handle subscription form
document.getElementById("subscriptionForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let msg = document.getElementById("msg");

  if (email) {
    msg.innerText = "✅ Thank you for subscribing, " + email + "!";
    msg.style.color = "green";
    document.getElementById("subscriptionForm").reset();
  } else {
    msg.innerText = "❌ Please enter a valid email.";
    msg.style.color = "red";
  }
});

// Smooth scroll to subscription
function scrollToSubscribe() {
  document.querySelector(".subscribe").scrollIntoView({ behavior: "smooth" });
}
