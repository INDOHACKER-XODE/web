// Untuk membuat navigasi bar menjadi responsif
function toggleMenu() {
    var menu = document.getElementsByClassName("menu")[0];
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }
  
  window.addEventListener("load", function() {
    var loadingContainer = document.querySelector(".loading-container");
    var content = document.querySelector(".content");
  
    setTimeout(function() {
      loadingContainer.style.display = "none";
      content.style.display = "block";
      setTimeout(function() {
        content.style.opacity = 1;
      }, 100);
    }, 2000); // Ganti angka 2000 dengan waktu pemuatan yang diinginkan dalam milidetik
  });
  