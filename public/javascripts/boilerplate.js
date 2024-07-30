const navLink = document.querySelectorAll('#sidebarLink');

navLink.forEach(x => {
  x.addEventListener('click', () => {
      navLink.forEach(y => { // Loop through all buttons
      y.classList.remove('border-amber-600');
      y.classList.remove('bg-[rgba(0,0,0,0.1)]');  // Remove 'selected' from all
    });
    x.classList.add('border-amber-600'); // Add 'selected' to the clicked button
    x.classList.add('bg-[rgba(0,0,0,0.1)]')
  });
});
