

const input = document.querySelector('input');
const log = document.getElementById('values');

input.addEventListener('input', updateValue);

function updateValue(e) {
  let inputValue = e.target.value;
  document.getElementById("borderRadiusText").innerHTML = e.target.value;
  document.getElementById('iceCubeArt').style.borderRadius = inputValue + 'px';
}

