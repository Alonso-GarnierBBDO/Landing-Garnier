let element_circular = document.querySelector('.content_circular h1');
let circle_array = element_circular.textContent.split("");
element_circular.innerHTML = '';

for(var i = 0; i < circle_array.length; i++){

    document.querySelector('.content_circular h1').innerHTML += `<span style="transform:rotate(${i * 9.5}deg)">${circle_array[i]}</span>`

}