function clearPixels() {
    const pixels = container.querySelectorAll('div');
  
    pixels.forEach(pixel => container.removeChild(pixel));
}

let scale_submit = document.querySelector(".scale-submit-button");
let input = document.querySelector("input");
let container = document.querySelector(".sketch");

let container_height = container.clientHeight;
let container_width = container.clientWidth;
let background_color = 'white';
let brush_color = 'black';

let background_color_buttons = document.querySelectorAll(".background-colors .color-button");
let brush_color_buttons = document.querySelectorAll(".brush-colors .color-button");


scale_submit.addEventListener('click', ()=>{ // Change scale according to input
    let inp = parseInt(input.value);
    if(input.value > 0){
        clearPixels();
        let pixel_width = container_width/inp;
        let pixel_height = container_height/Math.floor(container_height/pixel_width);
        let num_pixels = inp*(Math.floor(container_height/pixel_height));
        if(inp == 1){
            pixel_width = container_width;
            pixel_height = container_height;
            num_pixels = 1;
        }else if(inp == 2){
            pixel_width = container_width/2;
            pixel_height = container_height;
            num_pixels = 2;
        }
        for(let i = 0;i < num_pixels;i++){
            let pixel = document.createElement('div');
            pixel.className = 'pixel';
            pixel.style.backgroundColor = background_color;
            pixel.style.height = `${pixel_height}px`;
            pixel.style.width = `${pixel_width}px`;
            container.appendChild(pixel);
        }
    }

});

background_color_buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        background_color = button.style.backgroundColor;
        const pixels = container.querySelectorAll('div');
        pixels.forEach(pixel => pixel.style.backgroundColor = background_color);
    });
});

brush_color_buttons.forEach((button),()=>{
    button.addEventListener('click',()=>{
        brush_color = button.style.backgroundColor;
    });
});