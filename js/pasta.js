const element = document.querySelector('.pasta');

let count_element = 1;
const root = document.querySelector(":root");
let colors = [
    '#00CC79',
    '#059DC6',
    '#9564FF',
    '#FF7F00',
    '#FF0624',
    '#FFB600'
]

function mostrar_element(){

    if(count_element == colors.length){
        count_element = 0;
    }

    element.innerHTML = modal_html();
    const pasta_content = document.querySelectorAll('.pasta_content');
    const content_image = document.querySelectorAll('.imagen');

    root.style.setProperty("--background-random", colors[count_element]);
    setTimeout(()=>{
        root.style.setProperty("--color-random", colors[count_element - 1]);
    }, 500)

    count_element ++;


    let count_image = 0;

    setTimeout(()=>{
        
        const view_image = setInterval(()=>{

            content_image.forEach(e=>{
                e.classList.add('d-none');
            })
    
            if(count_image == content_image.length){
                // clearInterval(view_image);
                count_image = 0;
            }
    
            content_image[count_image].classList.remove('d-none')
    
            count_image++;
        }, 200)
    }, 10)

    setTimeout(()=>{
        pasta_content.forEach(e=>{
            e.remove();
        })
    }, 5000)
    
}

function modal_html(){
    const code = `
                    <div class="pasta_content">
                        <svg class="circle imagen" width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 26.07H20.38L41 41H0V26.07ZM15.88 45.03L41 41L12.09 69.91L1.42 59.49L15.88 45.03ZM22.51 1.42L36.97 15.88L41 41L12.09 12.09L22.51 1.42ZM26.06 61.62L40.99 41V82H26.06V61.62ZM40.99 41V0H55.92V20.38L40.99 41ZM69.9 12.09L80.57 22.52L66.11 36.98L40.99 41.01L69.9 12.1V12.09ZM81.99 41V55.93H61.61L40.99 41H81.99ZM69.9 69.91L59.47 80.57L45.01 66.11L40.98 40.99L69.89 69.9L69.9 69.91Z" fill="white"/>
                        </svg>

                        <svg class="flecha imagen d-none" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_203_6)">
                            <path d="M80 74.96H65.75V14.24H5.03998V0H80V74.96Z" fill="white"/>
                            <path d="M67.8368 2.09334L-0.00305176 69.9332L10.0661 80.0024L77.906 12.1625L67.8368 2.09334Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_203_6">
                            <rect width="80" height="80" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>

                        <svg class="sonrisa imagen d-none" width="48" height="82" viewBox="0 0 48 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_203_9)">
                            <path d="M0 22.67H12.28V35.58H0V22.67ZM0 54.82H12.28V67.73H0V54.82Z" fill="white"/>
                            <path d="M31.79 82H19.96C29.8 71.16 35.85 57.98 35.85 41C35.85 24.02 29.8 10.84 19.96 0H31.79C39.65 8.04 47.05 22.94 47.05 41C47.05 59.06 39.64 73.96 31.79 82Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_203_9">
                            <rect width="47.05" height="82" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </div>
                `;
    return code;
}

export default mostrar_element;