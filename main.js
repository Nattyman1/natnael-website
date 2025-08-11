// Fade-in effect for welcome text
document.addEventListener("DOMContentLoaded", () => {
  const welcomeText = document.querySelector("p");
  if (welcomeText) {
    welcomeText.style.opacity = "0";
    welcomeText.style.transform = "translateY(-20px)";
    setTimeout(() => {
      welcomeText.style.transition = "opacity 2s ease-in-out, transform 2s ease-in-out";
      welcomeText.style.opacity = "1";
      welcomeText.style.transform = "translateY(0)";
    }, 100);
  }
});

// Toggle About Me section (optional enhancement)
const detailsElements = document.querySelectorAll("details");
detailsElements.forEach(detail => {
  detail.addEventListener("toggle", () => {
    console.log(`Toggled: ${detail.querySelector("summary")?.textContent}`);
  });
});

// Button hover effect (optional JS fallback)
const portfolioButton = document.querySelector("a[target='_blank']");
if (portfolioButton) {
  portfolioButton.addEventListener("mouseover", () => {
    portfolioButton.style.backgroundColor = "#1e3550";
  });
  portfolioButton.addEventListener("mouseout", () => {
    portfolioButton.style.backgroundColor = "#2a4d69";
  });
}