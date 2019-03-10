document.addEventListener('DOMContentLoaded', function() {
    // Dropdown element
    var dropdown = document.querySelectorAll('.dropdown-trigger');
    // Mobile Menu element (Sidenav)
    var sidenav = document.querySelectorAll('.sidenav');

    // Dropdown event
    var dropdownInstance = M.Dropdown.init(dropdown);
    // Sidenav event
    var sidenavInstance = M.Sidenav.init(sidenav);
  });