var btn = document.getElementbyClassName("btn");
var gallery = document.getElementById("gallery");

var images = new Array(
    "images/pic1.jpg",
    "images/pic2.jpg",
    "images/pic3.jpg",
    "images/pic4.jpg"
);

for(let i = 0; i < btn.length; i++){
    btn[i].onclick = function(){
        gallery.src = images[i];
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
    }
}