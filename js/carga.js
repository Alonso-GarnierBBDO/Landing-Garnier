// Importaciones

import mostrar_element from "./pasta.js";

// Variables globales

const root = document.querySelector(":root");

const element_number = document.querySelector('.number');
const element_scroll = document.querySelector('.scroll');
const loading = document.querySelector('.loading_class');
let colors = [
    '#00CC79',
    '#059DC6',
    '#9564FF',
    '#FF7F00',
    '#FF0624',
    '#FFB600'
  ]
let count_interval = 0;

root.style.setProperty("--color-random", colors[0]);

const loading_page = setInterval(()=>{
    element_number.textContent = `${count_interval}%`;
    element_scroll.style.width = `${count_interval}%`;
    if(count_interval == 100){
        clearInterval(loading_page);
        loading.classList.add('remove');
        setTimeout(()=>{
            loading.remove();
        }, 550)
    }

    count_interval ++;

}, 1000)


window.onload = () => {

    const element_number = document.querySelector('.number');

    clearInterval(loading_page);

    let count_info = parseInt(element_number.textContent);

    let count_change = setInterval(()=>{

        element_number.textContent = `${count_info}%`
        element_scroll.style.width = `${count_info}%`;

        if(count_info == 100){
            clearInterval(count_change);
            setTimeout(()=>{
                loading.classList.add('remove');
                setTimeout(()=>{
                    loading.remove();

                    setInterval(()=>{
                        create_pasta();
                    }, 10000)

                }, 550)
            }, 1000)
        }

        count_info ++
    },10)

};

function create_pasta(){
        mostrar_element();
}