import './less/index.less'

// Your code goes here!

// 1. Mouseover event, color change on logo
const logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseover', evt => {
  evt.target.style.color = 'orange';
  setTimeout(() => {
    evt.target.style.color = '';
  }, 500);
})

// 2. Keydown event, change H2 color to pink
const titles = document.querySelectorAll('h2');
document.addEventListener('keydown', evt => {
  if(evt.key === 'p') {
    titles.forEach(title => title.style.color = 'pink');
  }
})

// 3. Click event, with preventDefault on links to open to RickRoll links
const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
  link.addEventListener('click', (evt) => {
    evt.preventDefault();
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://rickrolled.com/');
  })
})

// 4. 

// 5. 

// 6. 

// 7. 

// 8. 

// 9. 

// 10. 