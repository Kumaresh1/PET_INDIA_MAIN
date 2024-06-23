document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    fetch("http://localhost:3000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, subject, phone, message }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          document.querySelector(".contact__msg").style.display = "block";
          document.getElementById("contact-form").reset();
        } else {
          alert("Failed to send email: " + data.message);
        }
      })
      .catch((error) => {
        alert("Error: " + error);
      });
  });
