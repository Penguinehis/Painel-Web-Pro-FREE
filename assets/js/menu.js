  const check = document.getElementById('check');
  const sideBar = document.querySelector('.side_bar');
  const cancelButton = document.querySelector('.cancel');
  const cancelButtonIcon = cancelButton.querySelector('i');

  check.addEventListener('change', function() {
    sideBar.classList.toggle('expanded');
    cancelButton.style.display = sideBar.classList.contains('expanded') ? 'block' : 'none';
  });

  document.addEventListener('click', function(event) {
    if (event.target !== check && !sideBar.contains(event.target)) {
      sideBar.classList.remove('expanded');
      check.checked = false;
      cancelButton.style.display = 'none';
    }
  });

  check.addEventListener('click', function(event) {
    if (check.checked) {
      cancelButton.style.display = 'block';
    } else {
      cancelButton.style.display = 'none';
    }
  });
  

