

function ocultarMostrar(section) {
    if (section.style.display === "none") {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  }
  
  document.getElementById("nav-destrezas-idiomas").addEventListener("click", function () {
    let section1 = document.getElementById("section-destrezas-idiomas");
    ocultarMostrar(section1);
  });
  
  document.getElementById("nav-estudios-certificaciones").addEventListener("click", function () {
    let section2 = document.getElementById("section-estudios-certificaciones");
    ocultarMostrar(section2);
  });
  
  document.getElementById("nav-experiencia-laboral").addEventListener("click", function () {
    let section3 = document.getElementById("section-experiencia-laboral");
    ocultarMostrar(section3);
  });
  