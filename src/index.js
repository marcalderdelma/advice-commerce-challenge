document.addEventListener('DOMContentLoaded', function() {
    // elemento de dropdown
    var dropdown = document.querySelectorAll('.dropdown-trigger');
    var sidenav = document.querySelectorAll('.sidenav');
    var dropdownInstance = M.Dropdown.init(dropdown);
    var sidenavInstance = M.Sidenav.init(sidenav);
  });