const toggle = document.getElementById('toggle');
const menu = document.getElementById('menu');

function displayMenu() {
  console.log('this is a test');
  menu.classList.toggle('active')}

document.addEventListener('click', displayMenu);
