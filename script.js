const openMenu = document.querySelector('.sideMenu #open');
const closeMenu = document.querySelector('.sideMenu #close');

openMenu.addEventListener('click', () => {
  document.querySelector('.menu').classList.toggle('active');
  openMenu.style.display = 'none';
  closeMenu.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('active');
    closeMenu.style.display = 'none';
    openMenu.style.display = 'block';
})
