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
  
  function toggleTheme() {
    var body = document.body;
    body.classList.toggle("dark-theme");
    
    // Simpan preferensi tema pada local storage
    if (body.classList.contains("dark-theme")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }
  
  // Set tema berdasarkan preferensi yang disimpan pada local storage
  var savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }
  
  const sliderImages = document.querySelectorAll('.slider img');
let currentSlide = 0;

function showSlide() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].classList.remove('active');
  }
  sliderImages[currentSlide].classList.add('active');
  currentSlide = (currentSlide + 1) % sliderImages.length;
}

setInterval(showSlide, 3000);
