let range = document.querySelector('input');

range.oninput = function () {
  document.documentElement.style.setProperty('--value', `${range.value}px`);
  // console.log(range.value)
}

window.onload = function () {
  document.documentElement.style.setProperty('--value', `${range.value}px`);
}