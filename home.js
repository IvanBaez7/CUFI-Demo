const impact = [
  {
    id: 1,
    img: 'https://cufi.org/wp-content/uploads/2020/08/tetimonials-nikki.jpg',
    quote: `'It’s always a great thing when Americans use their voice. CUFI is
            not just the power of your voice - it’s the importance of the cause
            you have committed your voice to.'`,
    cite: '– Nikki Haley',
    title: 'Former US Ambassador to the United Nations',
  },
  {
    id: 2,
    img: 'https://cufi.org/wp-content/uploads/2020/08/tetimonials-dermer.jpg',
    quote:
      'For decades, America has been the backbone of Israel’s support in the world. Well, the backbone of that backbone is the support of millions of devout Christians across this great country. More than any other Christian organization, CUFI works year after year to make that backbone stronger and straighter than ever.',
    cite: '– Ron Dermer',
    title: "Israel's Former Ambassador to the United States",
  },
  {
    id: 3,
    img: 'https://cufi.org/wp-content/uploads/2021/12/SenJoniErnst.jpg',
    quote:
      'I want to thank you, first, for your wonderful passion and your advocacy and dedication to Israel. Christians United for Israel, you are great friends to all of us, so thank you.',
    cite: '– Joni Ernst',
    title: 'US Senator',
  },
  {
    id: 4,
    img: 'https://cufi.org/wp-content/uploads/2020/08/tetimonials-scott.jpg',
    quote:
      'Israel is our friend—our closest allies in the Middle East and a democratic beacon of hope in a region of the world that has so little actual freedom.',
    cite: '– Tim Scott',
    title: 'US Senator',
  },
  {
    id: 5,
    img: 'https://cufi.org/wp-content/uploads/2020/08/tetimonials-rivera.jpg',
    quote: 'I cannot say I am Christian and not love the Jewish people.',
    cite: '– Mariano Rivera ',
    title: 'Hall of Fame Pitcher',
  },
  {
    id: 6,
    img: 'https://cufi.org/wp-content/uploads/2021/12/SenJackyRosen.jpg',
    quote:
      'With mounting threats in the region and rising antisemitism in the US and around the globe, the bonds between the United States and Israel are more important now than they ever have been.',
    cite: '– Jacky Rosen',
    title: 'US Senator',
  },
];

const testimonialsContainer = document.querySelector('.testimonials');
const navigationContainer = document.querySelector('.navigation-buttons');
let currentIndex = 0; // Define currentIndex variable

// Function to create testimonial elements
function createTestimonialElement(testimonial) {
  const testimonialElement = document.createElement('div');
  testimonialElement.classList.add('testimonial');

  testimonialElement.innerHTML = `
    <img src="${testimonial.img}" alt="" />
    <div class="quotations">
      <blockquote>
        <q>${testimonial.quote}</q>
      </blockquote>
      <cite>${testimonial.cite}</cite>
      <h6>${testimonial.title}</h6>
    </div>
  `;

  testimonialsContainer.appendChild(testimonialElement); // Append directly to existing container

  return testimonialElement;
}

// Function to create navigation buttons
function createNavigationButton(index) {
  const button = document.createElement('button');
  button.textContent = '';
  button.addEventListener('click', () => showTestimonial(index));
  return button;
}

// Function to show a testimonial
function showTestimonial(index) {
  const testimonials = document.querySelectorAll('.testimonial');
  const buttons = document.querySelectorAll('.navigation-buttons button');

  testimonials.forEach((testimonial, i) => {
    if (i === index) {
      testimonial.classList.add('active');
      buttons[i].classList.add('active');
    } else {
      testimonial.classList.remove('active');
      buttons[i].classList.remove('active');
    }
  });
}

// Render testimonials and navigation buttons
impact.forEach((testimonial, index) => {
  createTestimonialElement(testimonial);
  navigationContainer.appendChild(createNavigationButton(index));
});

function nextTestimonial() {
  currentIndex = (currentIndex + 1) % impact.length;
  showTestimonial(currentIndex);
}

function prevTestimonial() {
  currentIndex = (currentIndex - 1 + impact.length) % impact.length;
  showTestimonial(currentIndex);
}

// Automatically change testimonial every three seconds
setInterval(nextTestimonial, 5000);

// Show the first testimonial by default
showTestimonial(0);
