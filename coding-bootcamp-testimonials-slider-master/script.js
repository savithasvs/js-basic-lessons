let slideIndex = 1

showDivs(slideIndex)

// eslint-disable-next-line no-unused-vars
function plusDivs (n) {
  showDivs(slideIndex += n)
}

function showDivs (n) {
  let i
  const x = document.getElementsByClassName('slide')
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none'
  }
  x[slideIndex - 1].style.display = 'flex'
}
