const botonPeticion = document.getElementById('peticion');
const textoUrl = document.getElementById("textoUrl");
const animalType = document.getElementById("animalType");
const amount = document.getElementById("amount");

botonPeticion.addEventListener("click", () => {
  fetch("https://cat-fact.herokuapp.com/facts/random?" + new URLSearchParams({
    ...(animalType.value != "" && { animal_type: animalType.value }),
    ...(amount.value != "" && { amount: amount.value })
  }))
    .then(data => {
      textoUrl.innerHTML = "<b>URL:</b><br/>" + data.url;
      return data.json();
    })
    .then(res => {
      const tbodyActual = document.getElementById("tbodyResultados");
      const tbodyNuevo = document.createElement("tbody");
      

      (res.length ? res : [res]).map(fact => {
        const tr = document.createElement("tr");

        tr.append(...[
          Object.assign(document.createElement("td"), { innerHTML: fact._id }),
          Object.assign(document.createElement("td"), { innerHTML: fact.type }),
          Object.assign(document.createElement("td"), { innerHTML: fact.text }),
          Object.assign(document.createElement("td"), { innerHTML: fact.user }),
          Object.assign(document.createElement("td"), { innerHTML: fact.createdAt }),
          Object.assign(document.createElement("td"), { innerHTML: fact.updatedAt })
        ]);

        tbodyNuevo.appendChild(tr);
      })

      tbodyNuevo.id = "tbodyResultados";
      tbodyResultados.parentNode.replaceChild(tbodyNuevo, tbodyActual);
    })
})

