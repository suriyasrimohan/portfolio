//toggle icon navbar

let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll sections
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-100;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top>=offset&&top<offset+height){
            navLinks.forEach(link=>{
                link.classList.remove('active');
                document.querySelector('header nav a[href*="' +id +'"]').classList.add('active');
            });
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }
    });
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    let footer=document.querySelector('footer');
    footer.classList.toggle('show-animate',this.innerHeight+this.scrollY>=document.scrollingElement.scrollHeight);
}




document.addEventListener("DOMContentLoaded", function () {
    const educationSection = document.querySelector(".education");

    function revealOnScroll() {
        let windowHeight = window.innerHeight;
        let sectionTop = educationSection.getBoundingClientRect().top;
        let revealPoint = 150;

        if (sectionTop < windowHeight - revealPoint) {
            educationSection.classList.add("show-animate");
        }
    }

    window.addEventListener("scroll", revealOnScroll);
});



//education
document.addEventListener("DOMContentLoaded", function() {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach(button => {
        button.addEventListener("click", function() {
            const target = document.getElementById(button.dataset.target);

            tabButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            tabContents.forEach(content => content.classList.remove("active"));
            target.classList.add("active");
        });
    });
});
