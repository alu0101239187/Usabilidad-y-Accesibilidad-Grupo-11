const JSON = {
  places: [
    {
      name: "Catedral de La Laguna",
      description: "Catedral de La Laguna",
      img_name: "catedral1.png",
      type: "culture",
    },
    {
      name: "Teatro Leal",
      description: "Teatro Leal",
      img_name: "teatroleal.png",
      type: "culture",
    },
    {
      name: "Parroquia Matriz de Nuestra Señora de la Concepción",
      description:
        "Su emplazamiento en ese lugar lo estableció el Adelantado Fernández de Lugo tras la celebración de la festividad del Corpus en 1496. Fundada en 1511, es la parroquia matriz de la isla de Tenerife, pues de ella salieron todas las demás.",
      img_name: "concepcion2.png",
      type: "culture",
    },
    {
      name: "Museo de Historia y Antropología de Tenerife",
      description:
        "El Museo de Historia y Antropología de Tenerife pertenece al Organismo Autónomo de Museos y Centros del Cabildo de Tenerife. Fue inaugurado en diciembre de 1993 en el inmueble conocido como Casa Lercaro, en la calle San Agustín de San Cristóbal de La Laguna.",
      img_name: "20210306_161646_HDR.jpg",
      type: "culture",
    },
    {
      name: "Museo de La Ciencia y El Cosmos",
      description:
        "El museo de las Ciencias y el Cosmos pertenece al Organismo Autónomo de Museos y Centros del Cabildo de Tenerife. Fue inaugurado en 1993 por iniciativa del propio Cabildo y del Instituto de Astrofísica de Canarias.",
      img_name: "IMG_20220716_171348.jpg",
      type: "culture",
    },
    {
      name: "Real Santuario del Santísimo Cristo de La Laguna",
      description:
        "El Real Santuario es el Convento Franciscano de San Miguel de las Victorias y tiene la categoría de Bien de Interés Cultural. Junto al Real Santuario se encuentra la Plaza del Cristo de La Laguna.",
      img_name: "La_Laguna_BW_1.jpg",
      type: "culture",
    },
  ],
};

const ALL_FILTER = document.getElementById("all-filter");
const CULTURE_FILTER = document.getElementById("culture-filter");
const HOSTELRY_FILTER = document.getElementById("hostelry-filter");
const NATURE_FILTER = document.getElementById("nature-filter");

function addPlaces(place_type) {
  deletePlaces();
  const div = document.getElementById("places");
  var counter = 0;
  var row = document.createElement("div");
  row.className = "row";
  JSON.places.forEach((place) => {
    if (place.type === place_type || place_type === "all") {
      if (counter === 3) {
        div.appendChild(row);
        row = document.createElement("div");
        row.className = "row";
      }
      addCardToRow(row, place);
      counter++;
    }
  });
  div.appendChild(row);
}

function deletePlaces() {
  var rows = document.querySelectorAll(".row");

  Array.prototype.slice.call(rows).forEach((row) => {
    row.remove();
  });
}

function addCardToRow(row, place) {
  const col = document.createElement("div");
  col.className = "col";
  row.appendChild(col);

  const card = document.createElement("div");
  card.className = "card";
  col.appendChild(card);

  const img = document.createElement("img");
  img.className = "card-img-top img-fluid";
  img.src = `../assets/images/places_explorer/${place.img_name}`;
  img.alt = place.name;
  card.appendChild(img);

  const card_body = document.createElement("div");
  card_body.className = "card-body";
  card.appendChild(card_body);

  const title = document.createElement("h5");
  title.className = "card-title justified";
  title.innerText = place.name;
  card_body.appendChild(title);

  const description = document.createElement("p");
  description.className = "card-text justified";
  description.innerText = place.description;
  card_body.appendChild(description);

  const button = document.createElement("a");
  button.className = "btn btn-primary block-dark-purple";
  button.innerText = "Más información...";
  button.href = "#";
  card_body.appendChild(button);
}

ALL_FILTER.addEventListener("click", (event) => {
  addPlaces("all");
  ALL_FILTER.className = "btn btn-soft-purple rounded-pill";
  CULTURE_FILTER.className = "btn";
  HOSTELRY_FILTER.className = "btn";
  NATURE_FILTER.className = "btn";
});

CULTURE_FILTER.addEventListener("click", (event) => {
  addPlaces("culture");
  ALL_FILTER.className = "btn";
  CULTURE_FILTER.className = "btn btn-soft-purple rounded-pill";
  HOSTELRY_FILTER.className = "btn";
  NATURE_FILTER.className = "btn";
});

HOSTELRY_FILTER.addEventListener("click", (event) => {
  addPlaces("hostelry");
  ALL_FILTER.className = "btn";
  CULTURE_FILTER.className = "btn";
  HOSTELRY_FILTER.className = "btn btn-soft-purple rounded-pill";
  NATURE_FILTER.className = "btn";
});

NATURE_FILTER.addEventListener("click", (event) => {
  addPlaces("entertainment");
  ALL_FILTER.className = "btn";
  CULTURE_FILTER.className = "btn";
  HOSTELRY_FILTER.className = "btn";
  NATURE_FILTER.className = "btn btn-soft-purple rounded-pill";
});
