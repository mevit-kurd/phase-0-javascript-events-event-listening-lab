function addingEventListener() {
  const input = document.querySelector('input');
    function clickAlert() {
    alert('I was clicked!');
   }

input.addEventListener('click', clickAlert);

}

addingEventListener()