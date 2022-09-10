let saturate = document.getElementById('saturate');
let contrast = document.getElementById('contrast');
let brightness = document.getElementById('brightness');
let sepia = document.getElementById('sepia');
let grayscale = document.getElementById('grayscale');
let blur = document.getElementById('blur');
let hueRorate = document.getElementById('hue-rorate');

let uplode = document.getElementById('uplode');
let download = document.getElementById('download');


let img = document.getElementById('img');

let reset = document.querySelector('span')
let imgBox = document.querySelector('.img-box')

// to take a copy from img to canvers for download this imge ..
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function  resetValue() {
    img.style.filter = 'none';
    saturate.value = '100';
    contrast.value = '100';
    brightness.value = '100';
    sepia.value = '0';
    grayscale.value = '0';
    blur.value = '0';
    hueRorate.value = '0';
}




window.onload = function(){
    reset.style.display = 'none';
    download.style.display = 'none';
    imgBox.style.display = 'none';
}

uplode.onchange = function(){
    resetValue()
    reset.style.display = 'block';
    download.style.display = 'block';
    imgBox.style.display = 'block';
//-----------------------------------------------------
let file = new FileReader();
file.readAsDataURL(uplode.files[0]); 
file.onload = function(){

    img.src = file.result
}
//-----------------------------------------------------
img.onload = function(){
    canvas.width = img.width ;
    canvas.height = img.height ;

    ctx.drawImage(img,0,0,canvas.width,canvas.height);
    img.style.display='none';
}


}

//filters
let filters  = document.querySelectorAll('ul li input');

filters.forEach(filter => {
    filter.addEventListener('input',function(){
        // ctx مش هتشاغل لانهاا موجده ف الفنكشن ال فوق بتااع التعريف بس ف لازم تجبهاا هناا عشان تشتغل 
        ctx.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${hueRorate.value}deg)
        `
        // ايواا هناا كدا
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
    })
} )

download.onclick = function(){
    download.href = canvas.toDataURL();
}
