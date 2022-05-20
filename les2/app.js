//Oefening angry-birds
const bird = document.querySelectorAll(".bird");
let count = 0;
//var bird en count
bird.addEventListener("click", function(){
    let count = count + 5;
    //count veranderen
    bird.style.left = count + "px";
});
//styling op de bird

