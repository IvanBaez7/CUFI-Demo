const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');
const submenuItems = document.querySelectorAll('.submenu');

// ******** NAV BAR ******* //
// ******** NAV BAR ******* //
// ******** NAV BAR ******* //
// ******** NAV BAR ******* //
// Variable to hold the current new sidebar
let newSidebar = null;

// Toggle sidebar visibility on button click
toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('show-sidebar');
});

// Close sidebar when close button is clicked
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
});

// Handle hover events for submenu items
submenuItems.forEach((menuItem) => {
  const submenu = menuItem.querySelector('.links2');

  // Show new sidebar on mouse enter
  menuItem.addEventListener('mouseenter', () => {
    // Check if there's an existing new sidebar; remove it if needed
    if (newSidebar) {
      document.body.removeChild(newSidebar);
      newSidebar = null; // Reset newSidebar
    }

    newSidebar = document.createElement('aside');
    newSidebar.classList.add('new-sidebar');
    newSidebar.innerHTML = `
      <ul class="new-links">
        ${submenu.innerHTML}
      </ul>
    `;

    // Position new sidebar beside the existing sidebar
    const sidebarRect = sidebar.getBoundingClientRect();
    newSidebar.style.top = `${sidebarRect.top}px`;
    newSidebar.style.left = `${sidebarRect.right}px`;

    document.body.appendChild(newSidebar);

    // Close new sidebar when mouse leaves it
    newSidebar.addEventListener('mouseleave', () => {
      document.body.removeChild(newSidebar);
      newSidebar = null; // Reset newSidebar
    });
  });

  // Remove new sidebar on mouse leave
  menuItem.addEventListener('mouseleave', (event) => {
    const relatedTarget = event.relatedTarget;

    // Check if the mouse is over submenu or new-sidebar
    if (
      !isMouseOver(submenu, relatedTarget) &&
      newSidebar &&
      !isMouseOver(newSidebar, relatedTarget)
    ) {
      document.body.removeChild(newSidebar);
      newSidebar = null; // Reset newSidebar
    }
  });

  // Handle click events on submenu parent links
  menuItem.addEventListener('click', (event) => {
    const parentSubmenu = menuItem.querySelector('.links2');

    // Toggle display of submenu and adjust font size on small screens
    if (window.matchMedia('(max-width: 675px)').matches) {
      if (parentSubmenu) {
        const submenuLinks = parentSubmenu.querySelectorAll('a');

        // Toggle display of submenu
        parentSubmenu.style.display =
          parentSubmenu.style.display === 'block' ? 'none' : 'block';

        // Adjust font size of submenu links
        submenuLinks.forEach((submenuLink) => {
          submenuLink.style.fontSize =
            parentSubmenu.style.display === 'block' ? '1rem' : 'inherit';
        });

        // Prevent default link behavior and stop event propagation
        event.preventDefault();
        event.stopPropagation();
        submenuLinks.forEach((submenuLink) => {
          submenuLink.addEventListener('click', (e) => {
            // Navigate to the target URL
            const targetUrl = submenuLink.href;
            window.location.href = targetUrl;
          });
        });
      }
    }
  });
});

// Function to check if mouse is over an element or its descendants
function isMouseOver(element, target) {
  return element.contains(target);
}
// ******** NAV BAR ******* //
// ******** NAV BAR ******* //
// ******** NAV BAR ******* //
// ******** NAV BAR ******* //

function updateTitle() {
  const titleContainer = document.getElementById('titleContainer');
  const screenWidth = window.innerWidth;

  console.log('Screen width:', screenWidth);

  let titleContent;
  if (screenWidth <= 768) {
    titleContent = `
      <h1 class="title">CUFI</h1>
      <p>Christians United For Israel</p>
    `;
  } else {
    titleContent = `
      <h1 class="title">Christians United For Israel</h1>
    `;
  }

  console.log('Title content:', titleContent);

  // Update the titleContainer with the appropriate content
  titleContainer.innerHTML = titleContent;
}

// Initial call to updateTitle to set the correct title on page load
updateTitle();

// Event listener for window resize to update the title dynamically
window.addEventListener('resize', () => {
  // Update the title based on screen width
  updateTitle();

  // Check iframe visibility and play in fullscreen if visible
});

// ******** FOOTER ******* //
// ******** FOOTER ******* //
// ******** FOOTER ******* //
// ******** FOOTER ******* //
// Get modal elements
const modal = document.getElementById('navModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const openModalBtn = document.getElementById('openModalBtn');

// Function to open the modal
function openModal() {
  if (modal) {
    modal.style.display = 'flex'; // Use 'flex' to center modal content
  }
}

// Function to close the modal
function closeModal() {
  if (modal) {
    modal.style.display = 'none';
  }
}

// Event listener to open the modal when clicking on the open modal button
if (openModalBtn) {
  openModalBtn.addEventListener('click', openModal);
}

// Event listener to close the modal when clicking on the close button
if (closeModalBtn) {
  closeModalBtn.addEventListener('click', closeModal);
}

// Event listener to close the modal when clicking outside of the modal
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Event listener to close the modal when pressing the Esc key
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

// scroll to top
// Select the back-to-top link
const topLink = document.querySelector('.top-link');

// Add click event listener to the back-to-top link
topLink.addEventListener('click', (event) => {
  event.preventDefault();

  // Scroll to the top of the page smoothly
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
// Show/hide back-to-top button based on scroll position
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    topLink.style.display = 'block';
  } else {
    topLink.style.display = 'none';
  }
});

// Function to open the popup
function openPopup() {
  const popup = document.getElementById('popupContainer');
  popup.style.display = 'block';
}

// Function to close the popup
function closePopup() {
  const popup = document.getElementById('popupContainer');
  popup.style.display = 'none';
}

// Close the popup when clicking on the close button (X)
const closePopBtn = document.getElementById('closePopup');
if (closePopBtn) {
  closePopBtn.addEventListener('click', closePopup);
}

// set open timer
setTimeout(openPopup, 1000);

// Get the current year
const currentYear = new Date().getFullYear();

// Select all elements with class 'year'
const yearElements = document.querySelectorAll('.year');

// Update the content of each element with the current year
yearElements.forEach((element) => {
  element.textContent = currentYear;
});
// ******** FOOTER ******* //
// ******** FOOTER ******* //
// ******** FOOTER ******* //
// ******** FOOTER ******* //
