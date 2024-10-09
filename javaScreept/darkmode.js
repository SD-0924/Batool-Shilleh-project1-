const toggleBtn = document.getElementById("darkModeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

const card = document.getElementById("card");
card.addEventListener("click", () => {
  window.location.href = "about.html"; 
})