let homeDecorDesc = document.getElementById("homeDecorDesc");
let fashionAccDesc = document.getElementById("fashionAccDesc");
let artCraftDesc = document.getElementById("artCraftDesc");
let giftColDesc = document.getElementById("giftColDesc");
let copyright = document.getElementById("copyright");






let currentYear = new Date().getFullYear();
copyright.innerHTML = "Copyright © " + currentYear;




let descHeadEle = document.querySelectorAll(".descHead")

console.log(descHeadEle)

function changeDesc(e){
    // console.log(e.target.id);
    // let descEleText = descEle.id;
    // // console.log(descEleText)
    let descEle = e.target;
    let descEleId = e.target.id;
    let descEles = document.querySelectorAll(".descHead");
    let descBodyEle = document.querySelectorAll(".desc-body-ele");
    // console.log(descBodyEle);
    descEles.forEach(function(element){
        element.classList.remove("active");
    })
    descBodyEle.forEach(function(element){
        element.classList.add("d-none");
    })
    if(descEleId == "homeDecor"){
        homeDecorDesc.classList.remove("d-none");
        descEle.classList.add("active");
    }else if(descEleId == "fashionAcc"){
        fashionAccDesc.classList.remove("d-none");
        descEle.classList.add("active");
    }else if(descEleId == "artCraft"){
        artCraftDesc.classList.remove("d-none");
        descEle.classList.add("active");
    }else if(descEleId == "giftCol"){
        giftColDesc.classList.remove("d-none");
        descEle.classList.add("active");
    }
    // showDesc();
    // function showDesc(){
        
        
    //     console.log(descEleId)
    // }
    
}


descHeadEle.forEach(function(element){
    element.addEventListener("click", changeDesc)

}) 


// let click1 = console.log(changeDesc);






// SlideShow 
let slideIndex = 0;
      showSlides();

      function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        // let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
          slideIndex = 1;
        }
        // for (i = 0; i < dots.length; i++) {
        //   dots[i].classList.remove("active");
        // }
        slides[slideIndex - 1].style.display = "unset";
        // dots[slideIndex - 1].classList.add("active");
        setTimeout(showSlides, 5000); // Change image every 2 seconds
        console.log(slides.length);
        // showSlides();
      }