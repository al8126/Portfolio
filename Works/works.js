document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".grid");
    const modal = document.getElementById("modal");
    const closeModal = document.getElementById("close");
  
    // Modal elements
    const modalImage = document.getElementById("modal-image");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalYear = document.getElementById("modal-year");
    const modalMedium = document.getElementById("modal-medium");
    const modalDimensions = document.getElementById("modal-dimensions");
  
    fetch("data.json")
      .then(response => response.json())
      .then(data => {
        data.forEach(project => {
          // Create the project card container
          const projectCard = document.createElement("div");
          projectCard.classList.add("project");
  
          // Project image
          const img = document.createElement("img");
          img.src = project.image;
          img.alt = project.title;
  
          // Project title
          const title = document.createElement("h2");
          title.textContent = project.title;
  
          // Append image and title to the card
          projectCard.appendChild(img);
          projectCard.appendChild(title);
  
          // Click event to open modal with project details
          projectCard.addEventListener("click", () => {
            modalImage.src = project.image;
            modalTitle.textContent = project.title;
            modalDescription.textContent = project.description;
            modalYear.textContent = `Year: ${project.year}`;
            modalMedium.textContent = `Medium: ${project.medium}`;
            modalDimensions.textContent = `Dimensions: ${project.dimensions}`;
            modal.style.display = "block";
          });
  
          // Append project card to the grid
          grid.appendChild(projectCard);
        });
      })
      .catch(error => console.error("Error loading JSON:", error));
  
    // Close the modal when the close button is clicked
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // Close the modal when clicking outside the modal content
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
  
    // Toggle the navigation menu on hamburger click
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  
    // Close the menu when clicking outside of it
    document.addEventListener("click", (event) => {
      if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove("show");
      }
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-in");

    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add("visible");
      }, index * 300); // Stagger the animations by 300ms
    });
  });