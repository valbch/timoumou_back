const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/animals", {
  useNewUrlParser: true
});
// - Le modele
const Animal = mongoose.model("Animal", {
  name: {
    type: String,
    default: ""
  },
  photo: {
    type: String,
    default: ""
  },
  category: {
    type: String,
    default: ""
  }
});

// **Create**
// 1 création de la route qui alimente la base de donnée
app.post("/animals/create", async (req, res) => {
  // 2 créer la boucle
  for (let i = 0; i < tab.length; i++) {
    // pour creer un nouvel animal à chaque tour de boucle :
    try {
      const newAnimal = new Animal({
        name: tab[i].name,
        photo: tab[i].photo,
        category: tab[i].category
      });
      // sauvegarder dans la base de donnée:
      await newAnimal.save();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  // renvoyer le message après la boucle
  res.json({ message: "Created" });
});

// **Read** - Création de la route qui renvoie les éléments
app.get("/animals", async (req, res) => {
  try {
    // trouver tous les animaux de la collection animals:
    const animals = await Animal.find({ category: req.query.category });
    // ce que renvoi le serveur:
    res.json(animals);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server has started");
});

const tab = [
  {
    name: "Cochon",
    photo: "https://t1.ea.ltmcdn.com/fr/images/2/5/4/le_cochon_2452_4_600.jpg",
    category: "La Ferme"
  },
  {
    name: "Âne",
    photo: "https://www.cjoint.com/doc/19_08/IHBjrLJQwki_donkey.jpg",
    category: "La Ferme"
  },
  {
    name: "Poule",
    photo: "https://www.cjoint.com/doc/19_08/IHCvbOd07la_poule.jpg",
    category: "La Ferme"
  },
  {
    name: "Canard",
    photo: "https://www.cjoint.com/doc/19_08/IHCu2053QOa_canard.jpg",
    category: "La Ferme"
  },
  {
    name: "Lapin",
    photo: "https://www.cjoint.com/doc/19_08/IHCu4AJEoUa_rabbit.jpg",
    category: "La Ferme"
  },
  {
    name: "Mouton",
    photo: "https://www.cjoint.com/doc/19_08/IHCu5Kq4lia_sheep.jpg",
    category: "La Ferme"
  },
  {
    name: "Cheval",
    photo: "https://www.cjoint.com/doc/19_08/IHBjms0wqRi_cheval.jpg",
    category: "La Ferme"
  },
  {
    name: "Coq",
    photo:
      "https://www.cjoint.com/doc/19_08/IHDpkYERFzi_birds-1882626-1920.jpg",
    category: "La Ferme"
  },
  {
    name: "Chèvre",
    photo: "https://www.cjoint.com/doc/19_08/IHCu6PWxPHa_chevre.jpg",
    category: "La Ferme"
  },
  {
    name: "Vache",
    photo: "https://www.cjoint.com/doc/19_08/IHBjpVI4tpi_cow.jpg",
    category: "La Ferme"
  },
  {
    name: "Abeille",
    photo: "https://www.cjoint.com/doc/19_08/IHCu7SNVm1a_bee.jpg",
    category: "La Ferme"
  },
  {
    name: "Dindon",
    photo: "https://www.cjoint.com/doc/19_08/IHCvaJQDMVa_dindon.jpg",
    category: "La Ferme"
  },

  {
    name: "Ours",
    photo: "https://www.cjoint.com/doc/19_08/IHCvQULCm5a_bear.jpg",
    category: "Les forêts du monde"
  },
  {
    name: "Hibou",
    photo: "https://www.cjoint.com/doc/19_08/IHCvRAMeBCa_owl.jpg",
    category: "Les forêts du monde"
  },
  {
    name: "Leopard",
    photo: "https://www.cjoint.com/doc/19_08/IHCvU6K6hwa_jugle-leopard.jpg",
    category: "Les forêts du monde"
  },
  {
    name: "Raton",
    photo: "https://www.cjoint.com/doc/19_08/IHCv2byRmva_raton.jpg",
    category: "Les forêts du monde"
  },
  {
    name: "Panda",
    photo: "https://www.cjoint.com/doc/19_08/IHCv1ni7D4a_panda.jpg",
    category: "Les forêts du monde"
  },
  {
    name: "Tigre",
    photo: "https://www.cjoint.com/doc/19_08/IHCv4UqTm1a_tiger.jpg",
    category: "Les forêts du monde"
  },
  {
    name: "Cerf",
    photo: "https://www.cjoint.com/doc/19_08/IHCv6kSXKTa_red-deer.jpg",
    category: "Les forêts du monde"
  },

  {
    name: "Pivert",
    photo: "https://www.cjoint.com/doc/19_08/IHCv6Vpqgja_pivert.jpg",
    category: "Les forêts du monde"
  },
  {
    name: "Grenouille",
    photo: "https://www.cjoint.com/doc/19_08/IHCvOvJwHBa_frog.jpg",
    category: "Les forêts du monde"
  },

  {
    name: "Chien",
    photo:
      "https://sf2.viepratique.fr/wp-content/uploads/sites/8/2017/08/bouledogue-francais-750x410.jpg",
    category: "Compagnie"
  },
  {
    name: "Chat",
    photo: "https://www.cjoint.com/doc/19_08/IHBjsWq6UGi_cat.jpg",
    category: "Compagnie"
  },
  {
    name: "Furet",
    photo: "https://www.cjoint.com/doc/19_08/IHCuW2keo2a_furet.jpg",
    category: "Compagnie"
  },
  {
    name: "Souris",
    photo:
      "https://images.theconversation.com/files/265294/original/file-20190322-36283-1me4pb6.jpg",
    category: "Compagnie"
  },
  {
    name: "Hamster",
    photo:
      "https://sf2.viepratique.fr/wp-content/uploads/sites/8/2017/08/hamster-750x410.jpg",
    category: "Compagnie"
  },
  {
    name: "Chinchilla",
    photo: "https://www.cjoint.com/doc/19_08/IHCuK7RFkja_chinchilla.jpg",
    category: "Compagnie"
  },
  {
    name: "Poisson",
    photo: "https://www.cjoint.com/doc/19_08/IHCvKaF6dZa_fish-compagnie.jpg",
    category: "Compagnie"
  },
  {
    name: "Tortue",
    photo: "https://www.cjoint.com/doc/19_08/IHCvMYppHRa_tortue-compagnie.jpg",
    category: "Compagnie"
  },
  {
    name: "Perroquet",
    photo: "https://www.cjoint.com/doc/19_08/IHCvLus40ha_jungle-perroquet.jpg",
    category: "Jungle"
  },
  {
    name: "Lapin",
    photo: "https://www.cjoint.com/doc/19_08/IHCuYAfTSca_rabbit.jpg",
    category: "Compagnie"
  },
  {
    name: "Canari",
    photo: "https://www.cjoint.com/doc/19_08/IHCuJPwqa1a_canarie.jpg",
    category: "Compagnie"
  },
  {
    name: "serpent",
    photo: "https://www.cjoint.com/doc/19_08/IHBjuH2WM4i_serpent.jpg",
    category: "Jungle"
  },
  {
    name: "Crocodile",
    photo: "https://www.cjoint.com/doc/19_08/IHBjxgLkoAi_crocodile.jpg",
    category: "Jungle"
  },
  {
    name: "Singe",
    photo: "https://www.cjoint.com/doc/19_08/IHCvMfJSw2a_monkey-jungle.jpg",
    category: "Jungle"
  },

  {
    name: "Elephant",
    photo: "https://www.cjoint.com/doc/19_08/IHCrx4UNdAi_elephant.jpg",
    category: "Jungle"
  },
  {
    name: "Lion",
    photo: "https://www.cjoint.com/doc/19_08/IHCrHebS34i_lion.jpg",
    category: "Jungle"
  },
  {
    name: "Lapin",
    photo: "https://www.cjoint.com/doc/19_08/IHCvggABHva_rabbit.jpg",
    category: "La ferme"
  },
  {
    name: "Herisson",
    photo: "https://www.cjoint.com/doc/19_08/IHCwgcyiQAa_herisson.jpg",
    category: "Les forêts du monde"
  },
  {
    name: "Ecureuil",
    photo: "https://www.cjoint.com/doc/19_08/IHCwixnXFOa_ec.jpg",
    category: "Les forêts du monde"
  }
];
