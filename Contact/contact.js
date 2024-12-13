const menuIcon = document.querySelector('.menu-icon');
const dropdownContent = document.querySelector('.dropdown-content');
const searchButton = document.querySelector('.search-button'); // Corrected to match the ID
const searchInput = document.querySelector('.search-input');

// Toggle the dropdown menu on click
menuIcon.addEventListener('click', () => {
    console.log('Menu icon clicked');
    dropdownContent.classList.toggle('active');
});

// Close the dropdown menu when clicking outside of it
window.addEventListener('click', (event) => {
    if (!menuIcon.contains(event.target) && !dropdownContent.contains(event.target)) {
        dropdownContent.classList.remove('active');
    }
});

document.addEventListener('DOMContentLoaded', () => {

    if (searchButton && searchInput) {
        // On click, replace the button with the input field
        searchButton.addEventListener('click', () => {
            searchButton.style.display = 'none';
            searchInput.style.display = 'inline-block'; 
            searchInput.focus(); 
        });

        // Optional: Restore the button when input loses focus
        searchInput.addEventListener('blur', () => {
            searchInput.style.display = 'none'; // Hide the search input
            searchButton.style.display = 'inline-flex'; // Show the search button again
        });
    } else {
        console.error('Search button or input not found.');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // Elements for the contact button and form
    const contactButton = document.getElementById("contact-button");
    const contactForm = document.getElementById("contact-form");

    // Elements for the submit button and thank you message
    const submitButton = document.getElementById("submit-button");
    const thanks = document.getElementById("thanks");

    // Show contact form when contact button is clicked
    if (contactButton && contactForm) {
        contactButton.addEventListener("click", () => {
            contactButton.style.display = 'none';
            contactForm.style.display = "block";
        });
    }

    // Show thank you message when submit button is clicked
    if (submitButton && thanks && contactForm) {
        submitButton.addEventListener("click", () => {
            // Simple validation check
            const phone = document.getElementById("phone").value.trim();
            const email = document.getElementById("email").value.trim();

            if (phone && email) {
                contactForm.style.display = 'none';
                thanks.style.display = "block";
            } else {
                alert("Please fill out all fields before submitting.");
            }
        });
    }
});


  document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-in");

    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add("visible");
      }, index * 300); // Stagger the animations by 300ms
    });
  });

