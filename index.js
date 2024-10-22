// Function to open the popup and apply blur effect
function openAbout() {
    // Show the popup
    document.getElementById("about").style.display = "block";

    // Add blur effect to the main section
    document.querySelector(".home").classList.add("blur-effect");
    

}

// Function to close the popup and remove blur effect
function closeAbout() {
  // Hide the popup
  document.getElementById("about").style.display = "none";

  // Remove blur effect from the main section
  document.querySelector(".home").classList.remove("blur-effect");

}
