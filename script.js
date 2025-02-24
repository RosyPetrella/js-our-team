// Dato un array di oggetti rappresentante un team di un’azienda,
// creare una pagina dedicata in cui mostrare una card per ciascun componente.
// (trovate l’array del team all’interno della cartella in allegato)
// Bonus
// Rendere l’esercizio responsive, mandando a capo le card
// Aggiungere un form di agginta membri che permetta di visualizzare il nuovo membro sulla pagina

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./assets 2/img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./assets 2/img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./assets 2/img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./assets 2/img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./assets 2/img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./assets 2/img/female3.png",
  },
];

const cardsEl = document.getElementById("cards");

function getmemberMarkup(memberObj) {
  const { name, role, email, img } = memberObj;
  console.log(name, role, email, img);

  const markup = `
    <div class="card  mb-3  " style="max-width: 540px;">
            <div class="row  ">
              <div class="col-md-4 gx-3 ">
                <img src="${img}" class="img-fluid" alt="...">
              </div>
              <div class="col-md-8 bg-black">
                <div class="card-body pr-0">
                  <h5 class="card-title text-light">${name}</h5>
                  <p class="card-text text-light">${role}</p>
                  <p class="card-text "><small class="text-primary">${email}</small></p>
                </div>
              </div>
            </div>
          </div>
    `;
  return markup;
}

function renderTeamMembers(membersArray, domEl) {
  for (let i = 0; i < membersArray.length; i++) {
    const thisMember = membersArray[i];

    console.log(thisMember);

    const markup = getmemberMarkup(thisMember);

    domEl.innerHTML += markup;
  }
}

renderTeamMembers(teamMembers, cardsEl);
