let autoPage = document.getElementById("autos");



let autoliste = [
{
    "marke":"Mercedes-Benz AMG GT V8",
    "preis":"215 000",
    "fotos":[
      "../img/Mercedes-AMG-GT/1.jpg",
      "../img/Mercedes-AMG-GT/2.jpg",
      "../img/Mercedes-AMG-GT/3.jpg",
    ],
    "kraftsoff":"Benzin",

    "Basisdaten":{
      "Karosserieform":"Limousine",
      "Zustand":"Gebraucht",
      "Antriebsart":"Allrad",
      "Sitzplätze":"4",
      "Türen":"5",
    },

    "Fahrzeughistorie":{
      "Kilometerstand":"38 000",
      "Erstzulassung":"10/2020",
      "Fahrzeughalter":"1",
      "Nichtraucherfahrzeug":"Ja",
    },

    "Technische Daten":{
      "Leistung":"367 PS (270 kW)",
      "Getriebe":"Automatik",
      "Hubraum":"2 999 cm³",
    },

    "Farbe und Innenausstattung":{
      "Außenfarbe":"Weiß",
      "Innenausstattung":"Vollleder"
    },

    "Fahrzeugbeschreibung":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatem dolorum, laborum commodi itaque tenetur illum dicta quos in illo voluptate culpa. Perferendis, distinctio facilis vel necessitatibus, tempore repellat beatae autem repellendus, mollitia maiores labore accusantium libero dolores adipisci minus maxime amet sunt earum fuga id quia assumenda ipsa. Vero molestiae quae porro nam voluptatum numquam dignissimos esse dicta sint tenetur dolores aut doloremque aliquam veniam neque repellendus provident nesciunt, consectetur qui expedita. Ea sint eius omnis tempore saepe, magni suscipit mollitia eligendi officiis, aliquid doloremque natus quis reiciendis ut tempora assumenda impedit quidem earum? Accusamus vitae eum cum iusto eligendi, quo saepe. Enim sunt atque dicta quos sint, ipsam magnam, eveniet, maiores pariatur beatae recusandae alias odit deserunt provident quia nemo modi soluta! Voluptatibus, eius dolores repellendus itaque facere, reiciendis nam eaque quaerat earum ratione necessitatibus voluptates maxime perferendis? Dolorum quibusdam deserunt, blanditiis officiis quasi tenetur eum odio labore, modi illum iste soluta voluptatibus! Voluptatem iusto nemo molestiae! Voluptates eum facilis unde assumenda modi, hic iusto animi nulla, magni repellendus excepturi eius ab dolorum. Quod eligendi velit dolor rerum alias tempore dolorum mollitia labore? In et a ducimus beatae modi, culpa molestias sint soluta doloribus, vero fugit minus obcaecati.",
},
{
    "marke":"Audi rs6",
    "preis":"69 220",
    "fotos":[
      "../img/audi/1.jpg",
      "../img/audi/2.jpg",
      "../img/audi/3.jpg",
    ],
    "kraftsoff":"Benzin",

    "Basisdaten":{
      "Karosserieform":"Coupé",
      "Zustand":"Gebraucht",
      "Antriebsart":"Allrad",
      "Sitzplätze":"4",
      "Türen":"5",
    },

    "Fahrzeughistorie":{
      "Kilometerstand":"40 000",
      "Erstzulassung":"04/2021",
      "Fahrzeughalter":"2",
      "Nichtraucherfahrzeug":"Ja",
    },

    "Technische Daten":{
      "Leistung":"470 kW (639 PS)",
      "Getriebe":"Automatik",
      "Hubraum":"3 982 cm³",
    },

    "Farbe und Innenausstattung":{
      "Außenfarbe":"Schwarz",
      "Lackierung":"Metallic",
      "Innenausstattung":"Vollleder"
    },

    "Fahrzeugbeschreibung":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatem dolorum, laborum commodi itaque tenetur illum dicta quos in illo voluptate culpa. Perferendis, distinctio facilis vel necessitatibus, tempore repellat beatae autem repellendus, mollitia maiores labore accusantium libero dolores adipisci minus maxime amet sunt earum fuga id quia assumenda ipsa. Vero molestiae quae porro nam voluptatum numquam dignissimos esse dicta sint tenetur dolores aut doloremque aliquam veniam neque repellendus provident nesciunt, consectetur qui expedita. Ea sint eius omnis tempore saepe, magni suscipit mollitia eligendi officiis, aliquid doloremque natus quis reiciendis ut tempora assumenda impedit quidem earum? Accusamus vitae eum cum iusto eligendi, quo saepe. Enim sunt atque dicta quos sint, ipsam magnam, eveniet, maiores pariatur beatae recusandae alias odit deserunt provident quia nemo modi soluta! Voluptatibus, eius dolores repellendus itaque facere, reiciendis nam eaque quaerat earum ratione necessitatibus voluptates maxime perferendis? Dolorum quibusdam deserunt, blanditiis officiis quasi tenetur eum odio labore, modi illum iste soluta voluptatibus! Voluptatem iusto nemo molestiae! Voluptates eum facilis unde assumenda modi, hic iusto animi nulla, magni repellendus excepturi eius ab dolorum. Quod eligendi velit dolor rerum alias tempore dolorum mollitia labore? In et a ducimus beatae modi, culpa molestias sint soluta doloribus, vero fugit minus obcaecati.",
},
{
    "marke":"Mercedes-Benz CLA 250",
    "preis":"121 990",
    "fotos":[
      "../img/BMW-4er-Reihe-M4-Competition/1.jpg",
      "../img/BMW-4er-Reihe-M4-Competition/2.jpg",
      "../img/BMW-4er-Reihe-M4-Competition/3.jpg",
    ],
    "kraftsoff":"Benzin",

    "Basisdaten":{
      "Karosserieform":"Coupé",
      "Zustand":"Gebraucht",
      "Antriebsart":"Hinterrad",
      "Sitzplätze":"4",
      "Türen":"2",
    },

    "Fahrzeughistorie":{
      "Kilometerstand":"20 000",
      "Erstzulassung":"02/2021",
      "Fahrzeughalter":"1",
      "Nichtraucherfahrzeug":"Ja",
    },

    "Technische Daten":{
      "Leistung":"510 PS (375 kW)",
      "Getriebe":"Automatik",
      "Hubraum":"3 982 cm³",
    },

    "Farbe und Innenausstattung":{
      "Außenfarbe":"Gelb",
      "Lackierung":"Metallic",
      "Innenausstattung":"Vollleder"
    },

    "Fahrzeugbeschreibung":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatem dolorum, laborum commodi itaque tenetur illum dicta quos in illo voluptate culpa. Perferendis, distinctio facilis vel necessitatibus, tempore repellat beatae autem repellendus, mollitia maiores labore accusantium libero dolores adipisci minus maxime amet sunt earum fuga id quia assumenda ipsa. Vero molestiae quae porro nam voluptatum numquam dignissimos esse dicta sint tenetur dolores aut doloremque aliquam veniam neque repellendus provident nesciunt, consectetur qui expedita. Ea sint eius omnis tempore saepe, magni suscipit mollitia eligendi officiis, aliquid doloremque natus quis reiciendis ut tempora assumenda impedit quidem earum? Accusamus vitae eum cum iusto eligendi, quo saepe. Enim sunt atque dicta quos sint, ipsam magnam, eveniet, maiores pariatur beatae recusandae alias odit deserunt provident quia nemo modi soluta! Voluptatibus, eius dolores repellendus itaque facere, reiciendis nam eaque quaerat earum ratione necessitatibus voluptates maxime perferendis? Dolorum quibusdam deserunt, blanditiis officiis quasi tenetur eum odio labore, modi illum iste soluta voluptatibus! Voluptatem iusto nemo molestiae! Voluptates eum facilis unde assumenda modi, hic iusto animi nulla, magni repellendus excepturi eius ab dolorum. Quod eligendi velit dolor rerum alias tempore dolorum mollitia labore? In et a ducimus beatae modi, culpa molestias sint soluta doloribus, vero fugit minus obcaecati.",
},
];


function einlogen(){
  if (benutzername.value == 'admin' && benutzerpasword.value == '1234') {
    btnClose.click();
    window.open("../XML/autoliste.xml","_blank");
  }else{
    einlogenFehlerMeldung.textContent = 'Ungültige eingaben...'
  }
};


function autosZeigen(){
  autoPage.innerHTML = '';
  for (let j = 0; j < 10; j++) {
    for (let i = 0; i < autoliste.length; i++) {
    autoPage.innerHTML += `
          <div class="row car" index="${i}">
            <div class="col-md-12">
              <div class="row bg-white pt-2 pb-2">
                <div class="col-12 col-md-4">
                  <img
                    class="link"
                    marke="${i}"
                    src="${autoliste[i].fotos[0]}"
                    alt=${autoliste[i].marke}
                    width="100%"
                    onclick="autoDeteils(this.getAttribute('marke'));"
                  />
                </div>
                <div class="col-12 col-md-4 d-flex flex-column">
                  <h3 class=" ">${autoliste[i].marke}</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Saepe nam cupiditate animi ut quaerat, laudantium
                    nostrum repellendus rem rerum non voluptatem expedita
                    vitae dolor iste reprehenderit. Reprehenderit doloremque
                    totam incidunt.
                  </p>
                </div>

                <div
                  class="col-12 col-md-4 d-flex flex-column justify-content-between"
                >
                  <div class="row"><h3>${autoliste[i].preis}$</h3></div>
                  <div class="row">
                    <div class="container-fluid d-flex flex-column">
                      <button class="btn btn-danger">Merken</button>
                      <button class="btn btn-dark mt-2">Kaufen</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
    
   }
  }
   
}



function autoDeteils(index){
  let auto = autoliste[index];

  autoPage.innerHTML = `<div class="container">
  <div class="row py-3">
    <!-- SIDEBAR START  -->
    <div class="col-12 col-md-4 order-2 py-5" id="sticky-sidebar">
      <div class="sidebar-stop">
        <div class="nav flex-column">
          <h3>Preis <span class="preis fw-bold">€ ${auto.preis},-</span> </h3>
          <p class="text text-secondary">Ratezahlung möglich</p>
          <table class="table my-5">
            <tbody>
              <tr>
                <th class="text-secondary">
                  Kilometerstand
                </th>
                <td>
                  ${auto.Fahrzeughistorie.Kilometerstand} km
                </td>
              </tr>
              <tr>
                <th class="text-secondary">
                  Kraftstoff
                </th>
                <td>
                  ${auto.kraftsoff}
                </td>
              </tr>
              <tr>
                <th class="text-secondary">
                  Leistung
                </th>
                <td>
                  ${auto["Technische Daten"].Leistung}
                </td>
              </tr>
              <tr>
                <th class="text-secondary">
                  Erstzulassung
                </th>
                <td>
                  ${auto.Fahrzeughistorie.Erstzulassung}
                </td>
              </tr>
            </tbody>
          </table>
          <!-- ANFRAGE BTN  -->
          <a class="btn btn-danger " href="mailto:serghei_pascal@gmail.com">Anfrage</a>
          <!-- ANRUFEN BTN  -->
          <a href="tel:+4733378901" class="btn btn-dark mt-2">Anrufen</a>
        </div>
      </div>
    </div>
    <!-- SIDEBAR END  -->


    <div class="col" id="main">
      <h1>${auto.marke}</h1>


        <!-- CAROUSEL START  -->
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" data-bs-interval="false">

        <!-- indicators  -->
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1">
            <img src="${auto.fotos[0]}" class="d-block w-100" alt="...">
          </button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">
            <img src="${auto.fotos[1]}" class="d-block w-100" alt="...">
          </button>
          
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">
            <img src="${auto.fotos[2]}" class="d-block w-100" alt="...">
          </button>
        </div>
        <!-- indicators end  -->

        <div class="carousel-inner col-12 col-md-6">
          <div class="carousel-item active">
            <a href="#"><img src="${auto.fotos[0]}" alt="..." width="100%"></a>
            
          </div>
          <div class="carousel-item">
            <a href="#"><img src="${auto.fotos[1]}" alt="..." width="100%"></a>
            
          </div>
          <div class="carousel-item">
            <a href="#"><img src="${auto.fotos[2]}" width="100%" alt="..."></a>
            
          </div>
        </div>
      </div>
      <!-- CAROUSEL ENDE -->


      <!-- ACCORDION start -->
      <div id="accordion">

        <div class="card">
          <div class="card-header">
            <a class="btn" data-bs-toggle="collapse" href="#collapseOne">
              Basisdaten
            </a>
          </div>
          <div id="collapseOne" class="collapse show" data-bs-parent="#accordion">
            <div class="card-body">
              <table class="table table-borderless">
                <tr>
                  <td class="text-secondary">Karosserieform</td>
                  <td>${auto.Basisdaten.Karosserieform}</td>
                </tr>
                <tr>
                  <td class="text-secondary">Zustand</td>
                  <td>${auto.Basisdaten.Zustand}</td>
                </tr>
                <tr>
                  <td class="text-secondary">Antriebsart</td>
                  <td>${auto.Basisdaten.Antriebsart}</td>
                </tr>
                <tr>
                  <td class="text-secondary">Sitzplätze</td>
                  <td>${auto.Basisdaten.Sitzplätze}</td>
                </tr>
                <tr>
                  <td class="text-secondary">Türen</td>
                  <td>${auto.Basisdaten.Türen}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      
        <div class="card">
          <div class="card-header">
            <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseTwo">
              Fahrzeughistorie
            </a>
          </div>
          <div id="collapseTwo" class="collapse" data-bs-parent="#accordion">
            <div class="card-body">
              <table class="table table-borderless">
                <tr>
                  <td class="text-secondary">Kilometerstand</td>
                  <td>
                    ${auto.Fahrzeughistorie.Kilometerstand}</td>
                </tr>
                <tr>
                  <td class="text-secondary">Erstzulassung</td>
                  <td>
                    ${auto.Fahrzeughistorie.Erstzulassung}</td>
                </tr>
                <tr>
                  <td class="text-secondary">Fahrzeughalter</td>
                  <td>${auto.Fahrzeughistorie.Fahrzeughalter}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      
        <div class="card">
          <div class="card-header">
            <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseThree">
              Technische Daten
            </a>
          </div>
          <div id="collapseThree" class="collapse" data-bs-parent="#accordion">
            <div class="card-body">
              <table class="table table-borderless">
                <tr>
                  <td class="text-secondary">Leistung</td>
                  <td>${auto["Technische Daten"].Leistung}</td>
                </tr>
                <tr>
                  <td class="text-secondary">Getriebe</td>
                  <td>${auto["Technische Daten"].Getriebe}</td>
                </tr>
                <tr>
                  <td class="text-secondary">Hubraum</td>
                  <td>${auto["Technische Daten"].Hubraum}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      
        <div class="card">
          <div class="card-header">
            <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseFour">
              Farbe und Innenausstattung
            </a>
          </div>
          <div id="collapseFour" class="collapse" data-bs-parent="#accordion">
            <div class="card-body">
              <table class="table table-borderless">
                <tr>
                  <td class="text-secondary">Außenfarbe</td>
                  <td>${auto["Farbe und Innenausstattung"].Außenfarbe}</td>
                </tr>
                <tr>
                  <td class="text-secondary">Lackierung</td>
                  <td>${auto["Farbe und Innenausstattung"].Lackierung}</td>
                </tr>
                <tr>
                  <td class="text-secondary">Innenausstattung</td>
                  <td>${auto["Farbe und Innenausstattung"].Innenausstattung}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      
        <div class="card">
          <div class="card-header">
            <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseFive">
              Fahrzeugbeschreibung
            </a>
          </div>
          <div id="collapseFive" class="collapse" data-bs-parent="#accordion">
            <div class="card-body">
              ${auto.Fahrzeugbeschreibung}
            </div>
          </div>
        </div>

      </div>
      <!-- ACCORDION end -->



    </div>
  </div>
</div>`;

  
}



inputMarke.onchange = function () {
  removeDisabled(inputModel);
  addOptions();
};

function removeDisabled(id) {
  id.removeAttribute("disabled");
}

function addOptions() {
  inputModel.innerHTML = '<option selected disabled value="0">Marke auswählen</option>';
  inputErstzulassung.innerHTML = '<select data-qa-selector="step-builtDates" class="active focus"><option disabled="" value="0">Erstzulassung auswählen</option><option value="2022">2022</option><option value="2021">2021</option><option value="2020">2020</option><option value="2019">2019</option><option value="2018">2018</option></select>';
  switch (inputMarke.value) {
    case 'audi':
      inputModel.innerHTML =
        '<select data-qa-selector="step-modell" class="active focus"><option disabled="" value="0">Modell auswählen</option><option value="100">100</option><option value="200">200</option><option value="80">80</option><option value="90">90</option><option value="A1">A1</option><option value="A1 citycarver">A1 citycarver</option><option value="A2">A2</option><option value="A3">A3</option><option value="A3 Limousine">A3 Limousine</option><option value="A4">A4</option><option value="A4 Allroad">A4 Allroad</option><option value="A5">A5</option><option value="A5 Sportback">A5 Sportback</option><option value="A6">A6</option><option value="A6 Allroad">A6 Allroad</option><option value="A7">A7</option><option value="A8">A8</option><option value="Allroad">Allroad</option><option value="Cabriolet">Cabriolet</option><option value="Coupe">Coupe</option><option value="Q2">Q2</option><option value="Q3">Q3</option><option value="Q3 Sportback">Q3 Sportback</option><option value="Q4">Q4</option><option value="Q4 Sportback">Q4 Sportback</option><option value="Q5">Q5</option><option value="Q5 Sportback">Q5 Sportback</option><option value="Q7">Q7</option><option value="Q8">Q8</option><option value="Quattro">Quattro</option><option value="R8">R8</option><option value="RS 3">RS 3</option><option value="RS 4">RS 4</option><option value="RS 5">RS 5</option><option value="RS 6">RS 6</option><option value="RS 7">RS 7</option><option value="RS Q3">RS Q3</option><option value="RS Q3 Sportback">RS Q3 Sportback</option><option value="RS Q8">RS Q8</option><option value="S1">S1</option><option value="S2">S2</option><option value="S3">S3</option><option value="S4">S4</option><option value="S5">S5</option><option value="S6">S6</option><option value="S7">S7</option><option value="S8">S8</option><option value="SQ2">SQ2</option><option value="SQ5">SQ5</option><option value="SQ5 Sportback">SQ5 Sportback</option><option value="SQ7">SQ7</option><option value="SQ8">SQ8</option><option value="TT">TT</option><option value="TT RS">TT RS</option><option value="TTS">TTS</option><option value="V8">V8</option><option value="e-tron">e-tron</option><option value="e-tron GT">e-tron GT</option><option value="e-tron Sportback">e-tron Sportback</option></select>';
        removeDisabled(inputErstzulassung);
      break;
    case 'bmw':
    inputModel.innerHTML =
      '<option disabled="" value="0">Modell auswählen</option><option value="1er">1er</option><option value="2er">2er</option><option value="3er">3er</option><option value="4er">4er</option><option value="5er">5er</option><option value="6er">6er</option><option value="7er">7er</option><option value="8er">8er</option><option value="X1">X1</option><option value="X2">X2</option><option value="X3">X3</option><option value="X4">X4</option><option value="X5">X5</option><option value="X6">X6</option><option value="X7">X7</option><option value="Z1">Z1</option><option value="Z3">Z3</option><option value="Z4">Z4</option><option value="Z8">Z8</option><option value="i3">i3</option><option value="i8">i8</option><option value="iX">iX</option><option value="iX3">iX3</option></select>';
      removeDisabled(inputErstzulassung);
      break;
    case 'mercedes':
    inputModel.innerHTML =
      '<option disabled="" value="0">Modell auswählen</option><option value="123">123</option><option value="190/190 E">190/190 E</option><option value="A-Klasse">A-Klasse</option><option value="A-Klasse Limousine">A-Klasse Limousine</option><option value="AMG GT">AMG GT</option><option value="AMG GT 4-door">AMG GT 4-door</option><option value="B-Klasse">B-Klasse</option><option value="C-Klasse">C-Klasse</option><option value="CL-Coupe">CL-Coupe</option><option value="CLA-Klasse">CLA-Klasse</option><option value="CLC-Klasse">CLC-Klasse</option><option value="CLK-Klasse">CLK-Klasse</option><option value="CLS-Klasse">CLS-Klasse</option><option value="Citan">Citan</option><option value="E-Klasse">E-Klasse</option><option value="E-Klasse All-Terrain">E-Klasse All-Terrain</option><option value="EQA">EQA</option><option value="EQC">EQC</option><option value="EQV">EQV</option><option value="G-Klasse">G-Klasse</option><option value="GL-Klasse">GL-Klasse</option><option value="GLA-Klasse">GLA-Klasse</option><option value="GLB-Klasse">GLB-Klasse</option><option value="GLC-Klasse">GLC-Klasse</option><option value="GLE-Klasse">GLE-Klasse</option><option value="GLK-Klasse">GLK-Klasse</option><option value="GLS-Klasse">GLS-Klasse</option><option value="M-Klasse">M-Klasse</option><option value="MB 100">MB 100</option><option value="R-Klasse">R-Klasse</option><option value="S-Klasse">S-Klasse</option><option value="SL-Klasse">SL-Klasse</option><option value="SLC-Klasse">SLC-Klasse</option><option value="SLK-Klasse">SLK-Klasse</option><option value="SLS AMG">SLS AMG</option><option value="Sprinter">Sprinter</option><option value="Strich Acht">Strich Acht</option><option value="T1 Transporter">T1 Transporter</option><option value="V-Klasse">V-Klasse</option><option value="V-Klasse Marco Polo">V-Klasse Marco Polo</option><option value="Vaneo">Vaneo</option><option value="Viano">Viano</option><option value="Vito">Vito</option><option value="Vito Tourer">Vito Tourer</option><option value="X-Klasse">X-Klasse</option></select>';
      removeDisabled(inputErstzulassung);
      break;
  }
}






