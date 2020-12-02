let weight = document.querySelector("#weight");
let height = document.querySelector("#level");
let show = document.querySelector(".bmi");
let sub = document.querySelector("button");
let w,bmi ;
let h ;

weight.addEventListener("change",()=>{
    w = weight.value;
    console.log(w);
});

height.addEventListener("change",()=>{
    h= height.value;
    console.log(h);
});

sub.addEventListener("click",()=>{
    
    show.textContent = cal(w,h);
});

function cal(w,h){
    bmi = w / (h * h) ;
    return bmi ;
    
}

