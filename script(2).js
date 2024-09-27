let navbar=document.querySelector(".navbar")

document.querySelector("#menu-btn").onclick= () =>{
    navbar.classList.toggle('active');
     
    cart.classList.remove('active');
    search.classList.remove('active');
}
let cart=document.querySelector(".cart-item-container")

document.querySelector("#cart").onclick= () =>{
    cart.classList.toggle('active');
    navbar.classList.remove('active');
     
    search.classList.remove('active');
}
let search=document.querySelector(".search-container")

document.querySelector("#search").onclick= () =>{
    search.classList.toggle('active');
    navbar.classList.remove('active');
    cart.classList.remove('active');
   
}
window.onscroll=()=>{
    navbar.classList.remove('active');
    cart.classList.remove('active');
    search.classList.remove('active');
}

const section = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');
    window.onscroll=()=>{
        section.forEach(sec=>{
            let top=window.scrollY;
            let offset=sec.offsetTop-150;
            let height=sec.offsetHeight;
            let id=sec.Attribute('id')
            if(top>offset && top<offset+ height){
                navLinks.forEach(links=>{
                    links.classList.remove('active')
                    document.querySelector('header nav a[href*='+id+']').classList.add('active')
                    
                    
                    
                })
            }
        })
    }
     
    