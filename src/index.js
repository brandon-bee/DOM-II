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

// 3. Keyup event to return the color of H2
document.addEventListener('keyup', evt => {
  if(evt.key === 'p') {
    titles.forEach(title => title.style.color = '');
  }
})

// 4. Click event, with preventDefault on links to open to RickRoll links
const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
  link.addEventListener('click', (evt) => {
    evt.preventDefault();
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://rickrolled.com/');
  })
}) 

// 5. Mousedown event to change background color of H2 elements
document.addEventListener('mousedown', () => {
  titles.forEach(title => title.style.backgroundColor = 'cyan');
})

// 6. Mouseup event to revert colors and demonstrate difference between these and click event
document.addEventListener('mouseup', () => {
  titles.forEach(title => title.style.backgroundColor = '');
})

// 7. Load event, alert when page is loaded
window.addEventListener('load', () => {
  alert('Page is fully loaded. Welcome!');
})

// 8. Pointerenter event to make buttons disappear before they can be clicked
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
  btn.addEventListener('pointerenter', () => {
    btn.style.display = 'none';
  });
});

// 9. Copy event that sends a funny alert when someone copies anything on the page
document.addEventListener('copy', () => {
  alert('Trying to copy me huh? You better watch it bub.');
  alert('Seriously.');
})

// 10. Dblclick event to make the images on page disappear
const imgs = document.querySelectorAll('img');
imgs.forEach(img => {
  img.addEventListener('dblclick', () => {
    img.style.display = 'none';
  })
})