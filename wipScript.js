const images = ['/images/LD.jpeg', '/images/b1.jpg', 'b2.jpg'];
const imageElement = document.getElementById('ldimage');

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    randomImage = images[randomIndex];
    imageElement.src = randomImage;
}

getRandomImage();
