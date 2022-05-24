var randomNumber1 = Math.floor(Math.random()*6)+1; // To generate a number between 1 and 6
var randomImage = "dice"+randomNumber1+".png";  // to generate a random image between dice1.png - dice6.png
var randomImageSource = "/images"+"/"+randomImage;   // generate a random image source between /images/dice1.png - /images/dice6.png
 
// now we will change the attribute of src all the time
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "dice"+randomNumber2+".png";
var randomImageSource2 = "/images"+"/"+randomImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="First player wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Second player wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}

