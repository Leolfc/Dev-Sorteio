const button = document.querySelector("button");
const buttonClean = document.querySelector("#cleanNumber");
const container_input = document.querySelector('.container_input')
button.addEventListener('click',()=> {
  const min = Math.ceil(document.getElementById("inputMin").value);
  const max = Math.floor(document.getElementById("inputMax").value);
const result =  Math.floor(Math.random() * (max - min + 1)) + min;
const h3 = document.createElement("h3");
container_input.appendChild(h3);
h3.innerHTML = result

h3.style.fontSize = "50px";
h3.classList.add('numeroSorteado')
h3.style.textAlign = "center";


    
})
buttonClean.addEventListener('click',()=>{
    const h3 = document.querySelector('.numeroSorteado') 
    
    h3.remove()           
})
