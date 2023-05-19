'use strict';

// const cursor = document.querySelector('.cursor');
// document.addEventListener('mousemove', e => {
//   let x = e.pageX;
//   let y = e.pageY;

//   cursor.style.top = y + 'px';
//   cursor.style.left = x + 'px';
// });
document.body.style.cursor = 'none';
if (window.outerWidth > 600) {
  const cursor = document.querySelector('.cursor');
  let isScrolling = false;

  document.addEventListener('mousemove', e => {
    let x = e.clientX;
    let y = e.clientY;

    cursor.style.top = y + 'px';
    cursor.style.left = x + 'px';
  });

  document.addEventListener('scroll', () => {
    if (window.outerWidth > 600) {
      isScrolling = true;
      clearTimeout(isScrolling);
    }
    cursor.style.display = 'none';

    setTimeout(() => {
      const scrollX = window.scrollX || window.pageXOffset;
      const scrollY = window.scrollY || window.pageYOffset;

      cursor.style.top = scrollY + 'px';
      cursor.style.left = scrollX + 'px';

      cursor.style.display = 'block';
      isScrolling = false;
    }, 100);
  });
}

const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.contact');
const OpenContact = function () {
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
};
const closeContact = function () {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

document.getElementById('contact').addEventListener('click', OpenContact);
document.getElementById('contactME').addEventListener('click', OpenContact);

overlay.addEventListener('click', closeContact);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeContact();
  }
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Intersecting');
      entry.target.classList.add('show');
    }
  });
});

const heads = document.querySelectorAll('.head-left');
heads.forEach(el => observer.observe(el));

const project = document.querySelectorAll('.head-left-pro');
project.forEach(p => observer.observe(p));

const headRight = document.querySelectorAll('.head-right');
headRight.forEach(h => observer.observe(h));

//Responsive Menu
const ham = document.getElementById('ham-icon');
const menu = document.querySelector('.menu-responsive');
const cross = document.getElementById('close');
const items = document.getElementById('menu-list');
const openMenu = function () {
  menu.classList.remove('hidden');
};
const closeMenu = function () {
  menu.classList.add('hidden');
};

ham.addEventListener('click', openMenu);
cross.addEventListener('click', closeMenu);
items.addEventListener('click', closeMenu);
