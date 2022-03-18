const imgBtn = document.getElementById('menu-icon')

imgBtn.addEventListener('click', function () {
  const menuMobile = document.getElementById('menu-mobile-items')

  if (menuMobile.style.display === 'none') {
    menuMobile.style.display = 'block'
    imgBtn.src = './images/icon-close.svg'
  } else {
    menuMobile.style.display = 'none'
    imgBtn.src = './images/icon-hamburger.svg'
  }
})
