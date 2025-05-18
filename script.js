// script.js
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a");

  links.forEach(link => {
    link.addEventListener("click", () => {
      console.log(`Opening recipe: ${link.textContent}`);
      // Optional alert
      // alert(`Opening ${link.textContent} recipe!`);
    });
  });
});
