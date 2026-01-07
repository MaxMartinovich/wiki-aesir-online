const categorias = document.querySelectorAll(".side-div");

categorias.forEach((categoria) => {
  categoria.addEventListener("click", () => {
    categorias.forEach((c) => {
      const ul = c.nextElementSibling;
      if (ul && ul.classList.contains("alinhamento")) {
        ul.style.display = "none";
      }
    });

    const lista = categoria.nextElementSibling;
    if (lista) lista.style.display = "block";
  });
});
