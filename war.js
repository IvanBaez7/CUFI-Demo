// const { header } = require('express/lib/request');

// function to handle news carosel

const news = [
  {
    id: 1,
    img: 'id1.jpeg',
    header:
      'Activists say Iran launched crackdown on dissent unrest as Israel tensions spiraled',
    content:
      'The same day Iran launched its first-ever direct attack on Israel, it embarked on a less-noticed confrontation at home, ordering police in several cities to take to the streets to arrest women accused of flouting its strict Islamic dress code.',
    more: `<a href='https://www.timesofisrael.com/activists-say-iran-launched-crackdown-on-dissent-unrest-as-israel-tensions-spiraled/'>Times Of Israel</a>`,
  },
  {
    id: 2,
    img: 'id2.jpeg',
    header:
      'Yale police arrest 47 anti-Israel protesters as ‘Gaza solidarity encampments’ spread',
    content:
      'Yale University police arrested 47 anti-Israel protesters for trespassing on Monday morning, as “Gaza solidarity encampments” continue to disrupt college campuses across the country.',
    more: `<a href='https://www.jns.org/yale-police-arrest-47-anti-israel-protesters-as-gaza-solidarity-encampments-spread/'>Jewish News Syndicate</a>`,
  },
  {
    id: 3,
    img: 'id3.png',
    header:
      'IDF strikes vehicle in southern Lebanon, kills two senior Hezbollah officials',
    content:
      'IDF strikes vehicle in southern Lebanon, kills two senior Hezbollah officials',
    more: `<a href='https://www.jpost.com/breaking-news/article-798330'>The Jerusalem Post</a>`,
  },
  {
    id: 4,
    img: 'id4.jpeg',
    header:
      'Palestinian man arrested on suspicion of killing Israeli teen in West Bank attack',
    content:
      'A West Bank Palestinian was arrested overnight on suspicion of killing an Israeli teen earlier this month in what authorities described as a terror attack, security officials said Monday.',
    more: `<a href='https://www.timesofisrael.com/palestinian-man-arrested-on-suspicion-of-killing-israeli-teen-in-west-bank-attack/'>Times Of Israel</a>`,
  },
];

const img = document.getElementById('person-img');
const header = document.getElementById('news-header');
const content = document.getElementById('content');
const more = document.getElementById('read-more');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
  showNews(currentItem);
});

function showNews() {
  const item = news[currentItem];
  img.src = item.img;
  header.textContent = item.header;
  content.textContent = item.content;

  try {
    const moreLinkHtml = item.more;
    const parser = new DOMParser();
    const doc = parser.parseFromString(moreLinkHtml, 'text/html');
    const linkElement = doc.querySelector('a');

    if (linkElement) {
      const href = linkElement.href;
      const domainName = linkElement.textContent.trim();

      // Construct the "Read more" link with the extracted URL and website name
      const formattedLink = `<a href="${href}" target="_blank">Read more: ${domainName}</a>`;
      more.innerHTML = formattedLink;
    } else {
      throw new Error('Anchor tag not found in more HTML');
    }
  } catch (error) {
    console.error('Error constructing "Read more" link:', error);
    more.innerHTML = ''; // Clear the content in case of an error
  }
}

nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > news.length - 1) {
    currentItem = 0;
  }
  showNews();
});

prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem < news.length - 1;
  }
  showNews();
});
