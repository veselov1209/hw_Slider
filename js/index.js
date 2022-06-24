let sliderImage = document.querySelectorAll('img');
let sliderText = document.querySelectorAll('p');

function removeClass() {
    sliderImage.forEach(el => {
    el.classList.remove('activeImage');
    el.classList.add('img');  
    })
}

function removeClass2() {
    this.classList.add('activeImage');
    this.classList.remove('img');
}

sliderImage.forEach(el => {
    el.addEventListener('click', removeClass);
    el.addEventListener('click', removeClass2);  
})

function removeClassP() {
    sliderText.forEach(el => {
    el.classList.remove('activeText');
    el.classList.add('imgText'); 
    })   
}

function removeClassP2() {
    this.lastElementChild.classList.add('imgText');   
    this.lastElementChild.classList.add('activeText');
}

sliderText.forEach(el => {
    el.parentElement.addEventListener('click', removeClassP);
    el.parentElement.addEventListener('click', removeClassP2);
})
