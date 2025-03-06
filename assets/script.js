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

const idImage = document.getElementById("image")
const arrowLeft = document.getElementById("arrowLeft")
const arrowRight = document.getElementById("arrowRight") 

function afficheImage() {
	idImage.src = "./assets/images/slideshow/" + slides[indexImage].image;
	document.querySelector("#banner p").innerHTML = slides[indexImage].tagLine
}

arrowRight.addEventListener("click", function() {
	if (indexImage < slides.length -1) {
		indexImage++
		afficheImage()
	}
	else {
		indexImage = 0
		afficheImage()
	}
})

arrowLeft.addEventListener("click", function() {
	if (indexImage > 0) {
		indexImage--
		afficheImage()
	}
	else {
		indexImage = slides.length - 1
		afficheImage()
	}
})

afficheImage()