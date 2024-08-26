// js/main.js

function openNav() {
  document.getElementById("mySidenav").style.width = "285px";
  document.getElementById("main").style.marginLeft = "250px";  
}



function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
//   document.body.style.backgroundColor = "white";
}

// Function to load a component from a file into a specified container
function loadComponent(containerId, filePath) {
  fetch(filePath)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.text();
    })
    .then((html) => {
      document.getElementById(containerId).innerHTML = html;
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
}

// Load Navbar, Header, and Shop Category components
loadComponent("navHeader", "../components/navHeader/navHeader.html");
loadComponent("sidenav", "../components/sidenav/sidenav.html");
// loadComponent("carousel", "../components/carousel/carousel.html");

// loadComponent("navbar-container", "../components/navbar/navbar.html");

// loadComponent("header-container", "../components/header/header.html");
