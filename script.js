const linkText = document.querySelector('.link-text');
const linkImage = document.querySelector('.link-image');

function showImgContent(e) {
  x = e.clientX;
  y = e.clientY;
  linkImage.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  linkText.style.setProperty('--x',(x)+'px');
  linkText.style.setProperty('--y',(y)+'px');
}
setTimeout(() => {
    document.getElementById('mySound').play();
  }, 500)
document.addEventListener('mousemove', showImgContent);