// Generate random CAPTCHA code
function generateCaptcha() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const captchaLength = 6;
    let captcha = "";
    for (let i = 0; i < captchaLength; i++) {
      captcha += chars[Math.floor(Math.random() * chars.length)];
    }
    return captcha;
  }
  
  // Display CAPTCHA code
  function displayCaptcha() {
    const captchaImage = document.getElementById("captcha-image");
    captchaImage.textContent = generateCaptcha();
  }
  
  // Validate the contact form
  function validateContactForm() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const captchaInput = document.getElementById("captcha-input");
    const captchaImage = document.getElementById("captcha-image");
  
    // Validate name, email, and message fields
    if (nameInput.value.trim() === "") {
      alert("Please enter your name.");
      return false;
    }
  
    if (emailInput.value.trim() === "") {
      alert("Please enter your email address.");
      return false;
    }
  
    if (!isValidEmail(emailInput.value.trim())) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    if (messageInput.value.trim() === "") {
      alert("Please enter your message.");
      return false;
    }
  
    // Validate CAPTCHA
    if (captchaInput.value.trim() !== captchaImage.textContent) {
      alert("Please enter the correct CAPTCHA code.");
      return false;
    }
  
    // If all validations pass, submit the form
    return true;
  }
  
  // Function to check if an email is valid
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Display the CAPTCHA code when the page loads
  window.onload = function() {
    displayCaptcha();
  }
  
  // Add event listener to the contact form
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateContactForm()) {
      // Submit the form
      contactForm.submit();
    }
  });

