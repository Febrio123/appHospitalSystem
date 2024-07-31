const dropdownButton = document.getElementById('dropdownButton');
const dropdownMenu = document.getElementById('dropdownMenu');

dropdownButton.addEventListener('click', function() {
  dropdownMenu.classList.toggle('hidden')
});

const dropdownItems = document.querySelectorAll('.dropdown-item');
dropdownItems.forEach(item => {
    item.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});


window.addEventListener('click', function(event) {
  if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.classList.add('hidden');
  }
});

/* <div class="dropdown">
<button id="dropdownButton" class="dropdown-button">Dropdown</button>
<div id="dropdownMenu" class="dropdown-menu hidden">
    <a href="#" class="dropdown-item">Item 1</a>
    <a href="#" class="dropdown-item">Item 2</a>
    <a href="#" class="dropdown-item">Item 3</a>
</div>
</div> */