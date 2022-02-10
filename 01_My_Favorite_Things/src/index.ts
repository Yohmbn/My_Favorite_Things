import express from "express";
import nunjucks from "nunjucks";

const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.set("view engine", "njk");

app.get("/", (request, response) => {
  response.render("home"); // 🔎 See? "home"!
});

app.get("/product", (request, response) => {
  const product = {
    name: "My Awesome Product",
    price: 2000,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    image: "https://my-ecommerce/product.png",
  };

  response.render("product", { product });
});

app.get("/MyThings/:Thing", (request, response) => {
  const routeParameters = request.params;

  const collectionOfMusics = [
    {
      name: "Strawberry Skies",
      date: 2020,
      artist: "Kid Travis",
      image: "insert adresse image album",
    },
    {
      name: "Formula",
      date: 2018,
      artist: "Labrinth",
      image: "insert adress image album",
    },
    {
      name: "Distance",
      date: 2019,
      artist: "Arma Jackson",
      image: "insert adress image album",
    },
  ];

  const collectionOfBooks = [
    {
      name: "Tara Duncan: Le continent interdit",
      date: 2007,
      auteur: "Sophie Audouin Mamikonian",
      image: "insert adress image album",
    },
    {
      name: "Le Bro Code",
      date: 2011,
      auteur: "Barney Stinson",
      image: "insert adress image album",
    },
    {
      name: "La quete d'Ewilan : Les frontières de glace",
      date: 2006,
      auteur: "Pierre Bottero",
      image: "insert adress image album",
    },
  ];

  const chosenThing = routeParameters.Thing;
  let sentThing = [{}];

  if (chosenThing === "collectionOfMusics") {
    sentThing = collectionOfMusics;
    response.render("MyThings", { sentThing });
  } else if (chosenThing === "collectionOfBooks") {
    sentThing = collectionOfBooks;
    response.render("MyThings", { sentThing });
  } else {
    response.status(404).render("not-found", { error: "Music not found" });
  }
});

app.listen(2000, () => {
  console.log("Server started on http://localhost:2000");
});
