// Función asincrónica que obtiene personajes de la API de Rick and Morty según la página indicada
const apiRick = async (pagina) => {
  // Construye la URL con la página seleccionada
  const url = "https://rickandmortyapi.com/api/character/?page=" + pagina;

  // Realiza la solicitud a la API y espera la respuesta
  const api = await fetch(url);

  // Convierte la respuesta a formato JSON
  const data = await api.json();

  // Muestra los datos en consola para depuración
  console.log(data);

  // Selecciona el contenedor donde se mostrarán los personajes
  const divRes = document.querySelector("#resultado");

  // Limpia el contenido previo antes de insertar nuevos personajes
  divRes.innerHTML = "";

  // Recorre cada personaje en la respuesta
  data.results.map((item) => {
    // Crea un nuevo div para cada personaje
    const divItem = document.createElement("div");

    // Inserta en el div una tarjeta con los datos del personaje
    divItem.innerHTML = `
      <div class="card m-2 shadow-sm" style="width: 18rem; border-radius: 20px;">
        <img src="${item.image}" class="card-img-top" alt="${item.name}" style="border-radius: 20px;">
        <div class="card-body">
          <h5 class="card-title"><b>${item.name}</b></h5>
          <p class="card-text"><b>Estado:</b> ${item.status}</p>
          <p class="card-text"><b>Ubicación:</b> ${item.location.name}</p>
          <p class="card-text"><b>Especie:</b> ${item.species}</p>
          <p class="card-text"><b>Género:</b> ${item.gender}</p>
        </div>
      </div>
    `;

    // Agrega la tarjeta al contenedor principal
    divRes.appendChild(divItem);
  });
};

// Llama a la función al cargar la página, mostrando los personajes de la página 1
apiRick(1);
