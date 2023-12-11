const images = [
	"https://img.freepik.com/free-psd/delicious-burger-food-menu-social-media-banner-template_106176-573.jpg",
	"https://img.freepik.com/premium-vector/social-media-post-design-template-restaurant-square-shape-panipuri-collection_841992-31.jpg",
	"https://img.freepik.com/vektoren-premium/social-media-post-design-vorlage-fuer-restaurant-in-quadratischer-form-eiskollektion_841992-24.jpg",
	"https://img.freepik.com/premium-vector/social-media-post-design-template-restaurant-square-shape-ice-cream-collection_841992-28.jpg",
	"https://img.freepik.com/premium-psd/psd-delicious-delights-exploring-savory-world-turkish-cuisine_859479-44.jpg",
	"https://img.freepik.com/premium-vector/food-menu-restaurant-social-media-post-design-template_614249-662.jpg?w=2000",
 
];
let currentIndex = 0;
const currentImage = document.getElementById("currentImage");
function updateImage() {
 currentImage.src = images[currentIndex];
 currentImage.alt = `images ${currentIndex + 1}`;
 currentImage.width = 500;
 currentImage.height = 500; 
}
function nextImage() {
 currentIndex = (currentIndex + 1) % images.length;
 updateImage();
}
function prevImage() {
 currentIndex = (currentIndex - 1 + images.length) % images.length;
 updateImage();
}
document.addEventListener("keydown", function (e) {
 if (e.key === "ArrowRight") {
 nextImage();
 } else if (e.key === "ArrowLeft") {
 prevImage();
 }
});

updateImage();

