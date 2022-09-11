function toggleText() {
  let myText = document.querySelector('#text');
  let button = document.querySelector('.toggle-text-button');

  button.addEventListener('click', () => {
    if (!myText.hidden) {
      myText.hidden = true;
    } else {
      myText.hidden = false;
    }
  });
}
