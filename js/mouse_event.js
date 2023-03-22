let event_x = 0;
let event_y = 0;
const cursos_element = document.querySelector('.coursor');
const enlaces = document.querySelectorAll('a');

window.onmousemove = (event) => {
    
    event_x = event.clientX;
    event_y = event.clientY;

    cursos_element.style.top = `${event_y - 5}px`;
    cursos_element.style.left = `${event_x - 5}px`;

}

if(enlaces){
    enlaces.forEach( e =>{
        e.onmouseover = () => {
            cursos_element.classList.add('active')
        }

        e.onmouseout = () => {
            cursos_element.classList.remove('active')
        }
    })
}