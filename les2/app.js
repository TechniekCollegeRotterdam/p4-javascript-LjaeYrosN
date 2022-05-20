 //Oefening angry-birds
 const bird = document.querySelectorAll(".bird");
 let count = 0;
 //var bird en count
//  bird.addEventListener("click", function(){
//      let count = count + 50;
//      //count veranderen
//     bird.style.left = count + "px";
// });
// //styling op de bird
  window.addEventListener("keydown", function(e){
console.log(e);
if(e.key == "ArrowRight"){
    count -= 50;
    bird.style.right = count + "px";

}
if(e.key == "ArrowUp"){
    count = count + 50;
    bird.style.top = count + "px";

}
if(e.key == "ArrowDown"){
    count = count + 50;
    bird.style.bottom = count + "px";

}
if(e.key == "ArrowLeft"){
    count = count + 50;
    bird.style.left = count + "px";

}
  })