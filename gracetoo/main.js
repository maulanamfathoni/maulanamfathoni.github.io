//Sidebar
function openNav() {
    document.getElementById("mySidebar").style.width="250px";
}
function closeNav() {
      document.getElementById("mySidebar").style.width = "0";
  }

//Clone Rename Class
const sourceElement = document.querySelector('.js-clone-nav');
const destination = document.querySelector('.site-mobile-menu-body');
        
const copy = document.importNode(sourceElement, true);
copy.setAttribute('class', 'site-nav-wrap');
destination.appendChild(copy);

//dropdrop
    var dropdown = document.getElementsByClassName("fa-chevron-down");
    var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("rotate");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
    








