var area = document.getElementById('insert-links');
var boton = document.getElementById('save');
var lista = document.getElementById('container-links');

boton.addEventListener('click',function(event) {
  // console.log(event.target);
  if(area.value) { //verificando que no este vacio
    var li = document.createElement('li');
    var link = document.createElement('a');
    link.textContent = area.value;
    link.setAttribute('href','#');
    li.appendChild(link);
    lista.appendChild(li);
    area.value = '';
  }
  else {
    boton.disabled = true;
  }
})
