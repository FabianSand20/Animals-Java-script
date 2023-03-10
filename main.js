const filterButtons = document.querySelectorAll('.filter-button');
const galleryItems = document.querySelectorAll('.image-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    galleryItems.forEach(item => {
      if (item.classList.contains(filter) || filter === 'all') {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});



  var cont = 0;
function info(animal) {

  var comparador = [];
  if (cont === 0) {
    comparador = animalitos.find(e => e.comun === animal);


    document.getElementById('miPopup').innerHTML = `
    <img src="${comparador.imagen}"
    <h1>Nombre Comun: ${comparador.comun} </h2>
    <h2>Nombre Cientifico: ${comparador.cientifico}</h3>
     <p>Tipo de Animal: ${comparador.tipoAnimal}</p>
     <p>Habitat: ${comparador.habitat}</p>
     <p>Reproduccion: ${comparador.reproduccion}</p>
     <p>Dieta: ${comparador.diet}</p>
     <p>Tipo de Sangre: ${comparador.blood}</p>
     `
    document.getElementById("miPopup").style.display = "flex";
    cont = 1;
  } else {
    document.getElementById('miPopup').innerHTML = ``
    comparador = [];
    cont = 0
    document.getElementById("miPopup").style.display = "none";
  }



}


class Animal {

  constructor(comun, cientifico, tipoAnimal, habitat, reproduccion, dieta, sangre, imagen) {
    this.comun = comun
    this.cientifico = cientifico
    this.tipoAnimal = tipoAnimal
    this.habitat = habitat
    this.reproduccion = reproduccion
    this.diet = dieta
    this.blood = sangre
    this.imagen = imagen
  }
}

class Mammals extends Animal {
  constructor(
    comun,
    cientifico,
    tipoAnimal,
    habitat,
    reproduccion,
    dieta,
    sangre,
    imagen,
  ) {
    super(
      comun,
      cientifico,
      tipoAnimal,
      habitat,
      reproduccion,
      dieta,
      sangre,
      imagen,
    )
  }
}

class Reptiles extends Animal {
  constructor(
    comun,
    cientifico,
    tipoAnimal,
    habitat,
    reproduccion,
    dieta,
    sangre,
    imagen,
  ) {
    super(
      comun,
      cientifico,
      tipoAnimal,
      habitat,
      reproduccion,
      dieta,
      sangre,
      imagen,
    )
  }
}

class fish extends Animal {
  constructor(
    comun,
    cientifico,
    tipoAnimal,
    habitat,
    reproduccion,
    dieta,
    sangre,
    imagen,
  ) {
    super(
      comun,
      cientifico,
      tipoAnimal,
      habitat,
      reproduccion,
      dieta,
      sangre,
      imagen,
    )
  }
}

class birds extends Animal {
  constructor(
    comun,
    cientifico,
    tipoAnimal,
    habitat,
    reproduccion,
    dieta,
    sangre,
    imagen,
  ) {
    super(
      comun,
      cientifico,
      tipoAnimal,
      habitat,
      reproduccion,
      dieta,
      sangre,
      imagen,
    )
  }
}

class amphibians extends Animal {
  constructor(
    comun,
    cientifico,
    tipoAnimal,
    habitat,
    reproduccion,
    dieta,
    sangre,
    imagen,
  ) {
    super(
      comun,
      cientifico,
      tipoAnimal,
      habitat,
      reproduccion,
      dieta,
      sangre,
      imagen,
    )
  }
}

class vertebrates extends Animal {
  constructor(
    comun,
    cientifico,
    tipoAnimal,
    habitat,
    reproduccion,
    dieta,
    sangre,
    imagen,
  ) {
    super(
      comun,
      cientifico,
      tipoAnimal,
      habitat,
      reproduccion,
      dieta,
      sangre,
      imagen,
    )
  }
}

class invertebrates extends Animal {
  constructor(
    comun,
    cientifico,
    tipoAnimal,
    habitat,
    reproduccion,
    dieta,
    sangre,
    imagen,
  ) {
    super(
      comun,
      cientifico,
      tipoAnimal,
      habitat,
      reproduccion,
      dieta,
      sangre,
      imagen,
    )
  }
}

var animalitos = [
  new Mammals(
    'Jaguar',
    'Panthera onca',
    'Mamifero',
    'Cuenca del Amazonas',
    'Vivíparo',
    'Carnivoros',
    'Caliente',
    'img/Jaguar1.webp'
  ),
  new Mammals(
    'Oso pardo',
    'Ursus arctos arctos',
    'Mamifero',
    'habitan un paisaje humanizado, un mosaico de bosques, matorrales, pastos y pueblos habitados.',
    'Vivíparo',
    'Omnívoros',
    'Caliente',
    'img/oso01.jpg'
  ),
  new Mammals(
    'Jirafa',
    'Giraffa camelopardalis',
    'Mamifero',
    'habita exclusivamente en África, en las zonas de sabana, pastizales y bosques abiertos.',
    'Vivíparo',
    'Herbivoros',
    'Caliente',
    'img/Jirafa01.jpg'
  ),
  new Reptiles(
    'Camaleon',
    'Chamaeleonidae',
    'Reptil',
    'La mayor parte de los camaleones habitan en África y en Madagascar',
    'Ovíparo',
    'insectívora',
    'Fria',
    'img/camaleon1.jpg'
  ),
  new Reptiles(
    'Serpiente Loro',
    'Bothriechis lateralis',
    'Reptil',
    'es principalmente conformado de bosques húmedos',
    'Ovíparo',
    'Carnivora',
    'Fria',
    'img/serpe02.jpg'
  ),
  new Reptiles(
    'Cocodrilo',
    'Crocodylidae',
    'Reptil',
    'viven en las regiones tropicales de África, Asia, América y Australia.',
    'Ovíparo',
    'Carnivoro',
    'Fria',
    'img/cocodrilo01.jpg'
  ),
  new fish(
    'Pez Betta',
    'Betta splendens',
    'Pez',
    'es una especie de pez enorme de ríos densos deficientes de oxígeno',
    'Carnivoro',
    'Omnivoro',
    'Fria',
    'img/pez01.jpg'
  ),
  new fish(
    'Pez Leon',
    'Pterois antennata',
    'Pez',
    'las lagunas costeras y arrecifes del océano',
    'Ovíparo',
    'Carnivoro',
    'Fria',
    'img/pez02.webp'
  ),
  new fish(
    'Arapaima',
    'Arapaima gigas',
    'Pez',
    'es una especie de pez de agua dulce',
    'Ovíparo',
    'Omnivoro',
    'Fria',
    'img/Arapaima.jpg'
  ),
  new birds(
    'Tucan',
    'Ramphastidae',
    'Ave',
    'las selvas tropicales de Sudamérica',
    'Ovíparo',
    'Herbívoros',
    'Caliente',
    'img/tucan1.jpg'
  ),
  new birds(
    'Guacamaya',
    'Ara ararauna',
    'Ave',
    'selvas lluviosas y las tierras pantanosas',
    'Ovíparo',
    'Omnívoros',
    'Caliente',
    'img/Guaca2.jpg'
  ),
  new birds(
    'Quetzal',
    'Pharomachrus',
    'Ave',
    'bosques tropicales y subtropicales',
    'Ovíparo',
    'Herbívoros',
    'Caliente',
    'img/Quezal01.jpg'
  ),
  new amphibians(
    'Salamandra',
    'Urodela',
    'Anfibio',
    'zonas húmedas o umbrías con vegetación mojada',
    'Ovovivíparas',
    'Carnivoro',
    'Fria',
    'img/salamandra01.jpeg'
  ),
  new amphibians(
    'Rana verde',
    'Agalychnis callidryas',
    'Anfibio',
    'tierras bajas tropicales del sur de México,',
    'Ovíparo',
    'Carnivoro',
    'Fria',
    'img/rana01.jpg'
  ),
  new amphibians(
    'Ajolote',
    'Ambystoma mexicanum',
    'Anfibio',
    'Arroyos y canales',
    'Oviparo',
    'Carnivoro',
    'Fria',
    'img/guajolote01.jpg'
  ),
]