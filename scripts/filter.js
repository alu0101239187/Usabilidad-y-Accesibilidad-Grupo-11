const JSON = {
  places: [
    {
      name: "Catedral de San Cristóbal de La Laguna",
      description:
        "La Santa Iglesia Catedral de San Cristóbal de La Laguna o Santa Iglesia Catedral de Nuestra Señora de Los Remedios es una catedral neogótica en su cuerpo principal y neoclásica en la fachada, sede de la Diócesis de San Cristóbal de La Laguna.",
      img_name: "catedral.png",
      type: "culture",
    },
    {
      name: "Teatro Leal",
      description:
        "El Teatro Leal es un edificio situado en la calle Obispo Rey Redondo en la ciudad de San Cristóbal de La Laguna. Fue construido por orden de Antonio Leal en 1915, con planos del arquitecto Antonio Pintor Ocete.",
      img_name: "teatro_leal.png",
      type: "culture",
    },
    {
      name: "Parroquia Matriz de Nuestra Señora de la Concepción",
      description:
        "Su emplazamiento en ese lugar lo estableció el Adelantado Fernández de Lugo tras la celebración de la festividad del Corpus en 1496. Fundada en 1511, es la parroquia matriz de la isla de Tenerife, pues de ella salieron todas las demás.",
      img_name: "concepcion.png",
      type: "culture",
    },
    {
      name: "Museo de Historia y Antropología de Tenerife",
      description:
        "El Museo de Historia y Antropología de Tenerife pertenece al Organismo Autónomo de Museos y Centros del Cabildo de Tenerife. Fue inaugurado en diciembre de 1993 en el inmueble conocido como Casa Lercaro, en la calle San Agustín de San Cristóbal de La Laguna.",
      img_name: "museo_de_historia_y_antropologia.jpg",
      type: "culture",
    },
    {
      name: "Museo de La Ciencia y El Cosmos",
      description:
        "El museo de las Ciencias y el Cosmos pertenece al Organismo Autónomo de Museos y Centros del Cabildo de Tenerife. Fue inaugurado en 1993 por iniciativa del propio Cabildo y del Instituto de Astrofísica de Canarias.",
      img_name: "museo_de_la_ciencia_y_el_cosmos.jpg",
      type: "culture",
    },
    {
      name: "Real Santuario del Santísimo Cristo de La Laguna",
      description:
        "El Real Santuario es el Convento Franciscano de San Miguel de las Victorias y tiene la categoría de Bien de Interés Cultural. Junto al Real Santuario se encuentra la Plaza del Cristo de La Laguna.",
      img_name: "santuario_del_cristo.jpg",
      type: "culture",
    },
    {
      name: "Cafetería Zumería Bachata",
      description:
        "Comida de comer como papas fritas, hamburguesas y bocadillos.\n\nHorario:\n    Lunes a sábado: 9:00 - 23:00\nDomingo: 11:00 - 23:00",
      img_name: "bachata.jpg",
      type: "hostelry",
    },
    {
      name: "Restaurante Patio Canario La Laguna",
      description:
        "Restaurante en una casa del S. XVIII con detalles de piedra y madera, y platos típicos canarios.\n\nHorario:\n Miércoles a lunes: 10:00 - 23:30\nDomingo: 10:00 - 18:00",
      img_name: "patio_canario.jpg",
      type: "hostelry",
    },
    {
      name: "Restaurante La Cocretería",
      description:
        "Croquetas.\n\nHorario:\n Miércoles a viernes: 13:00 - 16:30, 20:00 - 22:30\nSábado: 12:00 - 23:30\nDomingo: 12:00 - 22:30",
      img_name: "cocreteria.jpg",
      type: "hostelry",
    },
    {
      name: "Restaurante Gulagú",
      description:
        "Tapas, carnes, hamburguesas, postres y vinos en un restaurante lleno de plantas y de ambiente desenfadado.\n\nHorario:\nJueves a martes: 13:00 - 16:30, 20:00 - 23:30",
      img_name: "gulagu.jpg",
      type: "hostelry",
    },
    {
      name: "La Crepería Les Îles",
      description:
        "Crepes y otras cosas.\n\nHorario:\n Domingo a jueves: 10:00 - 22:30\nViernes y sábado: 10:00 - 23:00",
      img_name: "creperia_les_iles.jpg",
      type: "hostelry",
    },
    {
      name: "Restaurante Limón y Sal",
      description:
        "Restaurante de comida mexicana de México.\n\nHorario:\nTodos los días: 12:00 - 1:00",
      img_name: "limon_y_sal.jpg",
      type: "hostelry",
    },
    {
      name: "Mirador Pico del Inglés",
      description:
        "El mirador Pico del Inglés tiene unas vistas impresionantes del Parque Rural de Anaga hacia un lado y de la isla de Tenerife hacia el otro. Es aconsejable ir un día despejado aunque eso en Tenerife pronto aprendes que es imposible de predecir pues el tiempo cambia a cada rato.",
      img_name: "pico_del_ingles.jpg",
      type: "nature",
    },
    {
      name: "Punta del Hidalgo",
      description:
        "Punta del Hidalgo está situada al noroeste del macizo de Anaga, estando asentada en su mayor parte sobre una plataforma costera creada hace unos cien mil años por la erupción del conocido como volcán de El Morro o de Las Rozas. ​ También es la punta más saliente de la isla de Tenerife.",
      img_name: "punta_del_hidalgo.jpg",
      type: "nature",
    },
    {
      name: "Parque Rural de Anaga",
      description:
        "El parque rural de Anaga es un espacio natural protegido localizado en el Macizo de Anaga, en la isla de Tenerife, Canarias que fue declarado el 9 de junio de 2015 Reserva de la Biosfera y es el lugar que cuenta con mayor cantidad de endemismos de Europa.​",
      img_name: "anaga.jpg",
      type: "nature",
    },
    {
      name: "Parque La Vega",
      description:
        "El Parque de La Vega es uno de los más famosos de la ciudad de La Laguna, declarada Patrimonio Histórico de la Humanidad por la Unesco. Muchos laguneros acuden, sobre todo los fines de semana, para disfrutar de un agradable día entre árboles, plantas exóticas y zonas de recreo infantiles y deportivas.",
      img_name: "parque_la_vega.jpg",
      type: "nature",
    },
    {
      name: "Sendero de los Sentidos",
      description:
        "Se trata de un tipo de bosque nuboso subtropical, propio de zonas húmedas, cálidas y normalmente sin heladas, con grandes árboles y plantas trepadoras.",
      img_name: "sendero_de_los_sentidos.jpg",
      type: "nature",
    },
    {
      name: "Mirador de la Cruz del Carmen",
      description:
        "El mirador de la Cruz del Carmen es el más importante del Parque Rural de Anaga, pues es el punto de partida de las distintas rutas de senderismo que hay señalizadas dentro de este parque natural.",
      img_name: "cruz_del_carmen.jpg",
      type: "nature",
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
        counter = 0;
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
  img.src = `../assets/images/places/${place.img_name}`;
  img.alt = place.name;
  card.appendChild(img);

  const card_body = document.createElement("div");
  card_body.className = "card-body";
  card.appendChild(card_body);

  const card_title = document.createElement("h5");
  card_title.className = "card-title text-center align-text-top";
  card_title.innerText = place.name;
  card_body.appendChild(card_title);

  const description = document.createElement("p");
  description.className = "card-text justified-text";
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
  addPlaces("nature");
  ALL_FILTER.className = "btn";
  CULTURE_FILTER.className = "btn";
  HOSTELRY_FILTER.className = "btn";
  NATURE_FILTER.className = "btn btn-soft-purple rounded-pill";
});
