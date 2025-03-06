const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


let indexImage = 0;

const idImage = document.getElementById("image");
const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight") ;
const dots = document.querySelector('.dots');
const dotElements = document.getElementsByClassName("dot");


function main() {
	nextSlide();
	prevSlide();
	createDots()
}

main();


function createDots() {
	for (let i = 0; i < slides.length; i++) {
		let div = document.createElement("div");
		div.classList.add("dot");
		dots.appendChild(div);
		if (i == indexImage) div.classList.add("dot_selected");
	}
}

function setActiveDot() {
	const selectedDot = document.querySelector(".dot_selected");
	if (selectedDot) {
		selectedDot.classList.remove("dot_selected");
	}
	dotElements[indexImage].classList.add("dot_selected");
}

function nextSlide() {
	arrowRight.addEventListener("click", function() {
		if (indexImage < slides.length -1) {
			indexImage++;	
		}
		else {
			indexImage = 0;	
		}
		setActiveDot();
		updateSlide();
	
	})
}


function prevSlide() {
	arrowLeft.addEventListener("click", function() {
		if (indexImage > 0) {
			indexImage--;			
		}
		else {
			indexImage = slides.length - 1;			
		}
		setActiveDot();
		updateSlide()
	})
}



function updateSlide() {
	idImage.src = "./assets/images/slideshow/" + slides[indexImage].image;
	document.querySelector("#banner p").innerHTML = slides[indexImage].tagLine;
}