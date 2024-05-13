// Get reference to the image and modal
const videoTrigger = document.getElementById('videoTrigger');
const modal1 = document.getElementById('videoModal');
const videoFrame = document.getElementById('videoFrame');

// Add click event listener to the image
videoTrigger.addEventListener('click', function () {
  // Show the modal
  modal1.style.display = 'block';

  // Set the source of the iframe to the YouTube video link with autoplay enabled
  videoFrame.src = 'https://www.youtube.com/embed/0Ptx6Pj6Aec?autoplay=1';
});

// Get the close button
const closeButton = document.getElementsByClassName('close')[0];

// Close the modal when the close button is clicked
closeButton.addEventListener('click', function () {
  modal1.style.display = 'none';

  // Stop the video when the modal is closed
  videoFrame.src = '';
});

// Close the modal when the user clicks outside of it
window.addEventListener('click', function (event) {
  if (event.target === modal1) {
    modal1.style.display = 'none';

    // Stop the video when the modal is closed
    videoFrame.src = '';
  }
});
