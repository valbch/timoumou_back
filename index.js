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
    photo: "https://t1.ea.ltmcdn.com/fr/images/2/5/4/l_ane_2452_6_600.jpg",
    category: "La Ferme"
  },
  {
    name: "Poule",
    photo: "https://t1.ea.ltmcdn.com/fr/images/2/5/4/la_poule_2452_1_600.jpg",
    category: "La Ferme"
  },
  {
    name: "Canard",
    photo: "https://t1.ea.ltmcdn.com/fr/images/2/5/4/le_canard_2452_2_600.jpg",
    category: "La Ferme"
  },
  {
    name: "Lapin",
    photo: "https://t1.ea.ltmcdn.com/fr/images/2/5/4/le_lapin_2452_3_600.jpg",
    category: "La Ferme"
  },
  {
    name: "Mouton",
    photo: "https://t1.ea.ltmcdn.com/fr/images/2/5/4/le_mouton_2452_5_600.jpg",
    category: "La Ferme"
  },
  {
    name: "Cheval",
    photo: "https://t2.ea.ltmcdn.com/fr/images/2/5/4/le_cheval_2452_7_600.jpg",
    category: "La Ferme"
  },
  {
    name: "Chèvre",
    photo: "https://t1.ea.ltmcdn.com/fr/images/2/5/4/la_chevre_2452_8_600.jpg",
    category: "La Ferme"
  },
  {
    name: "Vache",
    photo: "https://t2.ea.ltmcdn.com/fr/images/2/5/4/la_vache_2452_9_600.jpg",
    category: "La Ferme"
  },
  {
    name: "Abeille",
    photo:
      "https://t1.ea.ltmcdn.com/fr/images/2/5/4/les_abeilles_2452_10_600.jpg",
    category: "La Ferme"
  },
  {
    name: "Dinde",
    photo: "https://t1.ea.ltmcdn.com/fr/images/2/5/4/la_dinde_2452_11_600.jpg",
    category: "La Ferme"
  },

  {
    name: "Ours brun",
    photo: "https://t2.ea.ltmcdn.com/fr/images/1/7/4/ours_brun_2471_1_600.jpg",
    category: "Les forêts du monde"
  },
  {
    name: "Hibou",
    photo: "https://t1.ea.ltmcdn.com/fr/images/1/7/4/hibou_2471_2_600.jpg",
    category: "Les forêts du monde"
  },
  {
    name: "Jaguar",
    photo: "https://t2.ea.ltmcdn.com/fr/images/1/7/4/jaguar_2471_3_600.jpg",
    category: "Les forêts du monde"
  },
  {
    name: "Raton laveur",
    photo:
      "https://t1.ea.ltmcdn.com/fr/images/1/7/4/raton_laveur_2471_4_600.jpg",
    category: "Les forêts du monde"
  },
  {
    name: "Panda",
    photo:
      "https://t2.ea.ltmcdn.com/fr/images/1/7/4/panda_geant_2471_5_600.jpg",
    category: "Les forêts du monde"
  },
  {
    name: "Tigre",
    photo: "https://t1.ea.ltmcdn.com/fr/images/1/7/4/tigre_2471_6_600.jpg",
    category: "Les forêts du monde"
  },
  {
    name: "Cerf",
    photo: "https://t2.ea.ltmcdn.com/fr/images/1/7/4/cerf_2471_7_600.jpg",
    category: "Les forêts du monde"
  },
  {
    name: "Lynx",
    photo: "https://t2.ea.ltmcdn.com/fr/images/1/7/4/lynx_2471_8_600.jpg",
    category: "Les forêts du monde"
  },
  {
    name: "Pic vert et noir",
    photo:
      "https://t2.ea.ltmcdn.com/fr/images/1/7/4/pic_vert_et_noir_2471_9_600.jpg",
    category: "Les forêts du monde"
  },
  {
    name: "Gorille",
    photo: "https://t1.ea.ltmcdn.com/fr/images/1/7/4/gorille_2471_10_600.jpg",
    category: "Les forêts du monde"
  },
  {
    name: "Diable de Tasmanie",
    photo:
      "https://t2.ea.ltmcdn.com/fr/images/1/7/4/diable_de_tasmanie_2471_11_600.jpg",
    category: "Les forêts du monde"
  },
  {
    name: "Grenouille",
    photo:
      "https://t1.ea.ltmcdn.com/fr/images/1/7/4/grenouille_des_bois_2471_12_600.jpg",
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
    photo:
      "https://sf2.viepratique.fr/wp-content/uploads/sites/8/2017/08/chaton-souriant-750x410.jpg",
    category: "Compagnie"
  },
  {
    name: "Furet",
    photo: "https://static.mmzstatic.com/wp-content/uploads/2013/10/furet.jpg",
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
    photo:
      "https://media.nationalgeographic.org/assets/photos/833/289/3eb0926f-9f4b-430f-a0eb-fb06c119ca29.jpg",
    category: "Compagnie"
  },
  {
    name: "Poisson",
    photo:
      "https://www.generatepattern.com/wp-content/uploads/2019/04/willpower-pic-of-fish-what-does-fish-shaped-stand-for-in-first-aid-free.png"
  },
  {
    name: "Tortue",
    photo:
      "https://beautemondeanimal.files.wordpress.com/2013/12/happy_birthday_liz_part_l_by_silvervulpine-d6voeb2.jpg",
    category: "Compagnie"
  },
  {
    name: "Perroquet",
    photo:
      "http://www.waouo.com/wp-content/uploads/2012/03/perroquetmulticolore.jpg",
    category: "Compagnie"
  },
  {
    name: "Lapin",
    photo:
      "http://img.over-blog-kiwi.com/0/55/52/96/20150204/ob_5e4918_shutterstock-3306198.jpg",
    category: "Compagnie"
  },
  {
    name: "Canari",
    photo:
      "https://t2.ea.ltmcdn.com/fr/images/6/0/3/mon_canari_ne_chante_plus_306_600.jpg",
    category: "Compagnie"
  }
];
