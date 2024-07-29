s1 = document.getElementById("more_hover")
s2 = document.getElementById("more_hoverr")


// s1.style.display = "none";
let l = 0;

s2.addEventListener("click",function(){
    s1.style.display = "block";
    l = 1;
})
s1.addEventListener("mouseleave",function(){
    s1.style.display = "none";
   
})

var r = document.querySelector(':root');



s2.addEventListener("mouseleave",function(){
    // s1.style.display = "none";
    if(s1.addEventListener("mouseleave",function(){
        s1.style.display = "none";
       
    }) == true){
        pass
    }
    else{
        setTimeout(() => {
            s1.style.display = "none";
        },2000);
    }
    
})

s3 = document.getElementById("earth_hover");
s4 = document.getElementById("earth")
// s3.style.display = "none";
s4.addEventListener("mouseenter",function(){
    s3.style.display = "block";
    setInterval(() =>{
        s3.style.display = 'none' 
    }
        , 3000
    )    
    
})
s3.addEventListener("mouseleave",function(){
    s3.style.display = "none";

   
})
// s4.addEventListener('click',()=>{
//     s3.style.display= 'none';
// })

let s5 = document.getElementById("off");
let s6 = document.getElementById("on_");
let s7 = document.getElementById("off_");
let s8 = document.getElementById("on__");
let both = document.getElementById("both")
both.style.backgroundImage = ' url(php-marquee-starter-lg-bg.webp)'

s5.style.display = "none"
s6.addEventListener('click',()=>{
    document.documentElement.style.setProperty('--background-color', 'gray');
    s6.style.display = "none";
    s5.style.display = "block";
    both.style.backgroundImage = 'none'
   
    //  if()
   
   
    
    // document.getElementById("buzz2").style.background =""

    // document.getElementById("buzz3").style.background =""
    // document.getElementById("buzz4").style.background =""

})

s5.addEventListener('click',()=>{
    document.documentElement.style.setProperty('--background-color', 'white');
    s5.style.display = 'none';
    s6.style.display = "block"
    both.style.backgroundImage = ' url(php-marquee-starter-lg-bg.webp)'
   
})



s8.addEventListener('click',()=>{
    document.documentElement.style.setProperty('--background-color', 'gray');
    s8.style.display = "none";
    s7.style.display = "block";
    both.style.backgroundImage = 'none'
   
    //  if()
   
   
    
    // document.getElementById("buzz2").style.background =""

    // document.getElementById("buzz3").style.background =""
    // document.getElementById("buzz4").style.background =""

})

s7.addEventListener('click',()=>{
    document.documentElement.style.setProperty('--background-color', 'white');
    s7.style.display = 'none';
    s8.style.display = "block"
    both.style.backgroundImage = ' url(php-marquee-starter-lg-bg.webp)'
   
})

let toggle_click = document.getElementById("toggle-click")
let cross = document.getElementById("cross")
let hamburger = document.getElementById("toggle")
hamburger.addEventListener('click', ()=>{
    toggle_click.style.display = "block"
    cross.style.display = "block"
    hamburger.style.display = "none"
})

cross.addEventListener('click', ()=>{
    toggle_click.style.display = "none"
    cross.style.display = "none"
    hamburger.style.display = "block"
    
})

