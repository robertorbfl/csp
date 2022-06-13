let pics = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];

function changePic(pic) {
    document.querySelector(".image-banner").src = "carrossel/" + pics[pic]
}

let firstPic = 0;
changePic(firstPic);

setInterval(function(){
    firstPic++;
    if(firstPic > 3){
        firstPic = 0;
    }
changePic(firstPic);
}, 5000)

