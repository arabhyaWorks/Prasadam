function openNav() {
  document.getElementById("mySidenav").style.width = "285px";
  document.getElementById("main").style.marginLeft = "250px";  
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
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


function loadAccordian(containerId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.text();
        })
        .then(html => {
            document.getElementById(containerId).innerHTML = html;

            // Add this to reinitialize accordion functionality after loading
            var acc = document.getElementsByClassName("accordion");
            for (let i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function() {
                    this.classList.toggle("active");
                    var panel = this.nextElementSibling;
                    if (panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                    } else {
                        panel.style.maxHeight = panel.scrollHeight + "px";
                    }
                });
            }
        })
        .catch(error => {
            console.error("There has been a problem with your fetch operation:", error);
        });
}
// Load Navbar, Header, and Shop Category components
loadComponent("navHeader", "../components/navHeader/navHeader.html");
loadComponent("sidenav", "../components/sidenav/sidenav.html");
loadAccordian("sideNavAccordian", "../components/accordian/accordian.html");
loadAccordian("sideNavAccordian", "../components/accordian/accordian.html");
loadAccordian("category-souvenir", "../components/category/category.html");
loadAccordian("products-container", "../components/products/products.html");
loadAccordian("shlok-container", "../components/shlok/shlok.html");
loadAccordian("ts-cont", "../components/templeServices/templeServices.html");
loadAccordian("footer", "../components/footer/footer.html");
loadAccordian("bd-container", "../components/breadCrumbs/breadCrumbs.html");
loadAccordian("product-overview", "../components/products/productOverview.html");
