//SELECT
const select = document.querySelector("#select");
const select2 = document.querySelector("#select2");
const select3 = document.querySelector("#select3");

//OPTIONS
const opciones = document.querySelector("#opciones");
const opciones2 = document.querySelector("#opciones2");
const opciones3 = document.querySelector("#opciones3");

//CONTENT SELECT
const contenidoSelect = document.querySelector("#select > .contenido-select");
const contenidoSelect2 = document.querySelector("#select2 > .contenido-select");

//BUTTOM SELECT
const hiddenInput = document.querySelector("#inputSelect");
const hiddenInput2 = document.querySelector("#inputSelect2");
const hiddenInput3 = document.querySelector("#inputSelect3");

const Brands = document.createElement("div");
const Years = document.createElement("div");

//primer select
select.addEventListener("click", () => {
  select.classList.toggle("active");
  opciones.classList.toggle("active");
});

/* le digo al DOM que busque el elemento 'opciones' y que obtenga el elemento 'hijo' que contiene la class 'opcion'
y le agregamos un bucle. por cada elemento 'opción'(elemento hijo) que contenga 'opciones' (elemento padre) realizará la función*/
document.querySelectorAll("#opciones > .opcion").forEach((opcion) => {
  opcion.addEventListener("click", (e) => {
    //por cada elemento 'opción' agregamos una función click
    e.preventDefault(); //eliminamos la funcion por defecto del enlace
    contenidoSelect.innerHTML = e.currentTarget.innerHTML; //básicamente le digo al título que es hijo de contenido select, que va a ser igual al título del enlace
    opciones.classList.toggle("active");
    select.classList.toggle("active");

    hiddenInput.value = e.currentTarget.querySelector(".title").innerText;
    ModelData(hiddenInput.value);
  });
});
//hola gente
const brands = [
  {
    name: "Honda",
    models: [
      {
        name: "Accord",
        years: [
          {
            year: "2017"
          },
          {
            year: "2017 Sport touring"
          },
          {
            year: "2017-2016 LX-S"
          },
          {
            year: "2017-2014 LX"
          },
        ]

      },
      {
        name: "Civic"
      },
      {
        name: "CR-V"
      },
      {
        name: "Odyssey"
      },
      {
        name: "Pilot"
      },
      {
        name: "Ridgeline"
      }
    ]
  },
  {
    name: "Toyota",
    models: [
      {
        name: "corolla"
      }
    ]
  }
]

let selectedBrand = null;


const generateOption = (name) =>
  `<a href="#" class="opcion">
  <div class="contenido-opcion">
    <div class="texto">
      <h2 class="title">${name}</h2>
    </div>
  </div>
</a>`;

//segundo selectBox
function ModelData(Branddata) {
  if (Branddata == "Honda") {
    $("#select2").bind("click", () => {
      select2.classList.toggle("active");
      opciones2.classList.toggle("active");
      Brands.innerHTML = "";

      //accedo al arreglo brands y le pido que me devuelva la propiedad name que sea igual a la marca que seleccioné en el primer select
      selectedBrand = brands.find(brand => brand.name == Branddata); //la condición se cumple y se guarda el OBJETO en la variable selectedBrand

      //accedo a la propiedad models (que es un arreglo) y le digo que haga un bucle por cada elemento en él
      selectedBrand.models.forEach((model) => {
        Brands.innerHTML += generateOption(model.name);//por ultimo le digo a mi generateOption la propiedad
      })
      opciones2.appendChild(Brands);
      optionEvent2();

    })
  }
}

let selectedModel = null;

const generateOption2 = (name) =>
  `<a href="#" class="opcion">
<div class="contenido-opcion">
  <div class="texto">
    <h2 class="title">${name}</h2>
  </div>
</div>
</a>`

//tercer selectBox
function yearData(modeldata) {
  if (modeldata == "Accord") {
    $("#select3").bind("click", () => {

      select3.classList.toggle("active");
      opciones3.classList.toggle("active");

      selectedModel = selectedBrand.models.find(model => model.name == modeldata);
      selectedModel.years.forEach((years) => {
        Years.innerHTML += generateOption2(years.year);

      })

      opciones3.appendChild(Years);
      optionEvent3();
    })

  }


}

//Evento select2
function optionEvent2() {
  this.document.querySelectorAll("#opciones2 > div > .opcion").forEach(function (opcion) {
    opcion.addEventListener("click", function (e) {
      e.preventDefault();
      Years.innerHTML = ""; //restableciendo opciones y no se dupliquen
      contenidoSelect2.innerHTML = e.currentTarget.innerHTML;
      hiddenInput2.value = e.currentTarget.querySelector(".title").innerText;
      select2.classList.toggle("active");
      opciones2.classList.toggle("active");
      yearData(hiddenInput2.value);
    });
  });
}
//Evento select3
function optionEvent3() {
  this.document.querySelectorAll("#opciones3 > div > .opcion").forEach((opcion) => {
    opcion.addEventListener("click", (e) => {
      e.preventDefault();

      select3.classList.toggle("active");
      opciones3.classList.toggle("active");
      select3.innerHTML = e.currentTarget.innerHTML;
      hiddenInput3.value = e.currentTarget.querySelector(".title").innerText;
      img(hiddenInput.value, hiddenInput2.value, hiddenInput3.value);
    });
  });
}

