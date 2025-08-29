const button = document.querySelector("button");
const buttonClean = document.querySelector("#cleanNumber");
const container_input = document.querySelector('.container_input')

button.addEventListener('click', ()=> {
  const rawMin = document.getElementById("inputMin").value.trim();
  const rawMax = document.getElementById("inputMax").value.trim();

  const min = Number(rawMin);
  const max = Number(rawMax);

  // valida antes de calcular
  if (rawMin === "" || rawMax === "" || isNaN(min) || isNaN(max)) {
    alert('Os valores devem ser números!!');
  
    return;
  }

  if (min > max) {
    alert('O valor mínimo deve ser menor ou igual ao máximo!');
    return;
  }

  const result = Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);

  const h3 = document.createElement("h3");
  h3.textContent = result;
  h3.style.fontSize = "50px";
  h3.style.textAlign = "center";
  h3.classList.add('numeroSorteado');

  // remove resultado anterior (opcional) antes de adicionar
  const prev = container_input.querySelector('.numeroSorteado');
  if (prev) prev.remove();

  container_input.appendChild(h3);
})

buttonClean.addEventListener('click',()=>{
    const h3 = document.querySelector('.numeroSorteado') 
    if (h3) h3.remove()           
})
