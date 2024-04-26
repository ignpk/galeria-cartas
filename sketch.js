// ----------------- CARTA OCULTA -----------------

document.addEventListener("DOMContentLoaded", function() {
  const elementos = document.querySelectorAll('.elemento');

  function aplicarEfecto(elemento) {
    elemento.classList.toggle('girar');
    setTimeout(() => {
      elemento.classList.toggle('oculto');
    }, 1200);
  }

  elementos.forEach(elemento => {
    elemento.addEventListener('click', function() {
      aplicarEfecto(this);
    });
  });
});

// ----------------- RESPLANDOR CARTA Y EFECTO 3D -----------------

document.addEventListener("DOMContentLoaded", function() {
  const cartas = document.querySelectorAll(".carta");

  function aplicarEfectos(elemento) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    elemento.appendChild(circle);

    elemento.addEventListener("mousemove", (event) => {
      const rect = elemento.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const xAxis = (centerX - event.clientX) / 10;
      const yAxis = (centerY - event.clientY) / 10;

      elemento.style.transform = `perspective(1000px) rotateX(${yAxis}deg) rotateY(${xAxis}deg) scale(1.6)`;

      circle.style.right = `${event.clientX - rect.left - 100}px`;
      circle.style.bottom = `${event.clientY - rect.top - 100}px`;
    });

    elemento.addEventListener("mouseenter", () => {
      elemento.style.transition = "all 0.2s ease";
      setTimeout(() => {
        elemento.style.transition = "none";
      }, 400);
    });

    elemento.addEventListener("mouseleave", () => {
      elemento.style.transition = "transform 0.2s ease";
      elemento.style.transform = "rotateY(0deg) rotateX(0deg)";
    });
  }

  cartas.forEach(aplicarEfectos);
});

// ----------------- CARTEL INICIO -----------------

document.addEventListener("DOMContentLoaded", function() {
  const cartel = document.getElementById("cartel");

  document.addEventListener("click", (event) => {
    if (event.target !== cartel && !cartel.contains(event.target)) {
      cartel.style.display = "none";
    } else {
      cartel.style.display = "block";
    }
  });
});

// ----------------- ANGULO DE ROTACIÓN Y CARTA AL AZAR -----------------

document.addEventListener("DOMContentLoaded", function() {
  const elementosCarousel = document.querySelectorAll('.carousel-item');

  function mostrarTresCartasAleatorias() {
    const indicesAleatorios = [];
    while (indicesAleatorios.length < 1) {
      const indiceAleatorio = Math.floor(Math.random() * elementosCarousel.length);
      if (!indicesAleatorios.includes(indiceAleatorio)) {
        indicesAleatorios.push(indiceAleatorio);
      }
    }

    elementosCarousel.forEach((elemento, index) => {
      if (indicesAleatorios.includes(index)) {
        elemento.style.display = 'flex';
        const inclinacion = Math.floor(Math.random() * 21) - 10;
        elemento.style.transform = `rotate(${inclinacion}deg)`;
      } else {
        elemento.style.display = 'none';
      }
    });
  }

  const boton = document.getElementById('nuevoBoton');
  boton.addEventListener('click', mostrarTresCartasAleatorias);

  mostrarTresCartasAleatorias();
});

// ----------------- FONDO DIFUMINADO -----------------

document.addEventListener("DOMContentLoaded", function() {
  const overlay = document.getElementById('overlay');
  const boton = document.getElementById('nuevoBoton');

  boton.addEventListener('mouseover', () => {
    overlay.style.opacity = '1';
  });

  boton.addEventListener('mouseout', () => {
    overlay.style.opacity = '0';
  });
});

// ----------------- BOTÓN CAMBIO DE CARTA -----------------

document.addEventListener('DOMContentLoaded', function() {
  const miDiv = document.getElementById('nuevoBoton');

  miDiv.addEventListener('click', function() {
    this.classList.add('animar');
    this.addEventListener('animationend', function() {
      this.classList.remove('animar');
    });
  });
});
