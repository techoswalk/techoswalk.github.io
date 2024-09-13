// Function to filter job listings
function filterJobListings() {
  const jobTitleInput = document.getElementById('job-title-filter');
  const jobDescriptionInput = document.getElementById('job-description-filter');
  const jobListings = document.querySelectorAll('.job-listing');

  jobListings.forEach(listing => {
    const jobTitle = listing.querySelector('.job-title').textContent.toLowerCase();
    const jobDescription = listing.querySelector('.job-description').textContent.toLowerCase();

    const titleMatch = jobTitle.includes(jobTitleInput.value.toLowerCase());
    const descriptionMatch = jobDescription.includes(jobDescriptionInput.value.toLowerCase());

    if (titleMatch && descriptionMatch) {
      listing.style.display = 'block';
    } else {
      listing.style.display = 'none';
    }
  });
}

// Add event listeners to the filter inputs
const jobTitleFilter = document.getElementById('job-title-filter');
const jobDescriptionFilter = document.getElementById('job-description-filter');

jobTitleFilter.addEventListener('input', filterJobListings);
jobDescriptionFilter.addEventListener('input', filterJobListings);

