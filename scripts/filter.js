const json = {
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
      name: "Iglesia de La Concepción",
      description: "La Concepción",
      img_name: "concepcion2.png",
      type: "culture",
    },
    {
      name: "Catedral de La Laguna 2",
      description: "Catedral de La Laguna 2",
      img_name: "catedral1.png",
      type: "hostelry",
    },
    {
      name: "Teatro Leal 2",
      description: "Teatro Leal 2",
      img_name: "teatroleal.png",
      type: "hostelry",
    },
    {
      name: "Iglesia de La Concepción 2",
      description: "La Concepción 2",
      img_name: "concepcion2.png",
      type: "entertainment",
    },
  ],
};

function addPlaces(place_type) {
  deletePlaces();
  const div = document.getElementById("places");
  var counter = 0;
  var row = document.createElement("div");
  row.className = "row";
  json.places.forEach((place) => {
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
  })
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
  title.className = "card-title";
  title.innerText = place.name;
  card_body.appendChild(title);

  const description = document.createElement("p");
  description.className = "card-text";
  description.innerText = place.description;
  card_body.appendChild(description);

  const button = document.createElement("a");
  button.className = "btn btn-primary block-translucid-dark-purple";
  button.innerText = "Más información...";
  button.href = "#";
  card_body.appendChild(button);
}

document.getElementById("all-filter").addEventListener("click", (event) => {
  addPlaces("all");
});

document.getElementById("culture-filter").addEventListener("click", (event) => {
  addPlaces("culture");
});

document.getElementById("hostelry-filter").addEventListener("click", (event) => {
  addPlaces("hostelry");
});

document.getElementById("entertainment-filter").addEventListener("click", (event) => {
  addPlaces("entertainment");
});


