const images=document.querySelectorAll(".gallery img");

let current=0;

function openImage(image){

    document.getElementById("lightbox").style.display="flex";

    document.getElementById("lightboxImage").src=image.src;

    current=[...images].indexOf(image);

}

function closeImage(){

    document.getElementById("lightbox").style.display="none";

}

function nextImage(){

    current++;

    if(current>=images.length){

        current=0;

    }

    document.getElementById("lightboxImage").src=images[current].src;

}

function previousImage(){

    current--;

    if(current<0){

        current=images.length-1;

    }

    document.getElementById("lightboxImage").src=images[current].src;

}