// Function to handle form submission
document.getElementById("staffForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page reload on submit

  // Collect the form data
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const reason = document.getElementById("reason").value;

  // Here you would normally send the data to a server for storage (using AJAX, etc.)
  // For now, we'll just log it to the console as an example.
  console.log("Staff Application Submitted:");
  console.log("Name:", name);
  console.log("Age:", age);
  console.log("Reason:", reason);

  // Show a confirmation message
  document.getElementById("message").textContent = "Your application has been submitted successfully! Thank you!";
  document.getElementById("staffForm").reset(); // Reset form fields
});

// Function to check admin password
function checkPassword() {
  const adminPassword = document.getElementById("admin-password").value;

  // Check if the password is correct (admin password: 3912)
  if (adminPassword === "3912") {
    document.getElementById("message").textContent = "Password correct. You can now view the applications.";
    // Here you can add functionality to display stored applications (e.g., fetching from a database)
  } else {
    document.getElementById("message").textContent = "Incorrect password. Try again.";
  }
}
