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
    'Viv??paro',
    'Carnivoros',
    'Caliente',
    'img/Jaguar1.webp'
  ),
  new Mammals(
    'Oso pardo',
    'Ursus arctos arctos',
    'Mamifero',
    'habitan un paisaje humanizado, un mosaico de bosques, matorrales, pastos y pueblos habitados.',
    'Viv??paro',
    'Omn??voros',
    'Caliente',
    'img/oso01.jpg'
  ),
  new Mammals(
    'Jirafa',
    'Giraffa camelopardalis',
    'Mamifero',
    'habita exclusivamente en ??frica, en las zonas de sabana, pastizales y bosques abiertos.',
    'Viv??paro',
    'Herbivoros',
    'Caliente',
    'img/Jirafa01.jpg'
  ),
  new Reptiles(
    'Camaleon',
    'Chamaeleonidae',
    'Reptil',
    'La mayor parte de los camaleones habitan en ??frica y en Madagascar',
    'Ov??paro',
    'insect??vora',
    'Fria',
    'img/camaleon1.jpg'
  ),
  new Reptiles(
    'Serpiente Loro',
    'Bothriechis lateralis',
    'Reptil',
    'es principalmente conformado de bosques h??medos',
    'Ov??paro',
    'Carnivora',
    'Fria',
    'img/serpe02.jpg'
  ),
  new Reptiles(
    'Cocodrilo',
    'Crocodylidae',
    'Reptil',
    'viven en las regiones tropicales de ??frica, Asia, Am??rica y Australia.',
    'Ov??paro',
    'Carnivoro',
    'Fria',
    'img/cocodrilo01.jpg'
  ),
  new fish(
    'Pez Betta',
    'Betta splendens',
    'Pez',
    'es una especie de pez enorme de r??os densos deficientes de ox??geno',
    'Carnivoro',
    'Omnivoro',
    'Fria',
    'img/pez01.jpg'
  ),
  new fish(
    'Pez Leon',
    'Pterois antennata',
    'Pez',
    'las lagunas costeras y arrecifes del oc??ano',
    'Ov??paro',
    'Carnivoro',
    'Fria',
    'img/pez02.webp'
  ),
  new fish(
    'Arapaima',
    'Arapaima gigas',
    'Pez',
    'es una especie de pez de agua dulce',
    'Ov??paro',
    'Omnivoro',
    'Fria',
    'img/Arapaima.jpg'
  ),
  new birds(
    'Tucan',
    'Ramphastidae',
    'Ave',
    'las selvas tropicales de Sudam??rica',
    'Ov??paro',
    'Herb??voros',
    'Caliente',
    'img/tucan1.jpg'
  ),
  new birds(
    'Guacamaya',
    'Ara ararauna',
    'Ave',
    'selvas lluviosas y las tierras pantanosas',
    'Ov??paro',
    'Omn??voros',
    'Caliente',
    'img/Guaca2.jpg'
  ),
  new birds(
    'Quetzal',
    'Pharomachrus',
    'Ave',
    'bosques tropicales y subtropicales',
    'Ov??paro',
    'Herb??voros',
    'Caliente',
    'img/Quezal01.jpg'
  ),
  new amphibians(
    'Salamandra',
    'Urodela',
    'Anfibio',
    'zonas h??medas o umbr??as con vegetaci??n mojada',
    'Ovoviv??paras',
    'Carnivoro',
    'Fria',
    'img/salamandra01.jpeg'
  ),
  new amphibians(
    'Rana verde',
    'Agalychnis callidryas',
    'Anfibio',
    'tierras bajas tropicales del sur de M??xico,',
    'Ov??paro',
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