// toggle themes
const toggleButton = document.getElementById('toggle-button');
const themeLink = document.getElementById('theme-link');
toggleButton.addEventListener('click', () => {

  const currentTheme = themeLink.getAttribute('href');

  if (currentTheme === 'assets/css/theme/light.css') {
    themeLink.setAttribute('href', 'assets/css/theme/dark.css');
  } else {
    themeLink.setAttribute('href', 'assets/css/theme/light.css');
  }
});

// Smooth scroll to target section
function smoothScroll(targetId) {
    const target = document.getElementById(targetId);
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function toggleDetails(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}



// Function to open social media links in a new tab
function openSocialMediaLink(url) { window.open(url, '_blank'); }  
const footerSocialLinks = document.querySelectorAll('.footer-social a');

footerSocialLinks.forEach(link => { link.addEventListener('click', () => openSocialMediaLink(link.href)); });
  