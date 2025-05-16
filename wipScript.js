var imagesArray = ["/images/LD.jpeg", "b1.jpg", "b2.jpg"];

function displayImage(){

    //the first statement should generate a random number in the range 0 to 6 (the subscript values of the image file names in the imagesArray)
    var num = Math.floor(Math.random() * (imagesArray.length+1));
    //the second statement display the random image from the imagesArray array in the canvas image using the random number as the subscript value
    document.canvas.src = imagesArray[num];

}
