// Smooth scroll to target section
function smoothScroll(targetId) {
    const target = document.getElementById(targetId);
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

// Function to open social media links in a new tab
function openSocialMediaLink(url) {
    window.open(url, '_blank');
  }
  
  // // Add event listeners to the social media links
  const footerSocialLinks = document.querySelectorAll('.footer-social a');
  footerSocialLinks.forEach(link => {
    link.addEventListener('click', () => openSocialMediaLink(link.href));
  });
  