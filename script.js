//nav bar color change

let navBar = document.querySelector('.header');
let scrollTracker = document.querySelector('.scrolltracker');

let homePage = document.querySelector('.home');
let aboutPage = document.querySelector('.about');
let projectPage = document.querySelector('.projects');
let homebtn = document.querySelector('.homebtn');

// console.log(scrollTracker.offsetHeight);

// console.log(navBar.offsetTop);

window.addEventListener('scroll', () => {
    if(window.scrollY > scrollTracker.offsetHeight){
        navBar.classList.add('activescroll');
    }
    else{
        navBar.classList.remove('activescroll');
    }

});

// about me btn scroll

let abtMeBtn = document.querySelector("#abtmebtn");
let abtMe = document.querySelector(".about");

abtMeBtn.addEventListener("click", () => {
  abtMe.scrollIntoView({ behavior: "smooth", block: "center" });
});

const prjCntainer = document.querySelectorAll(".project");

let imgProjectbtn1 = document.querySelector(".prjbtn1");
let imgProjectbtn2 = document.querySelector(".prjbtn2");
let imgProjectbtn3 = document.querySelector(".prjbtn3");

prjCntainer.forEach((prj) => {
  prj.addEventListener("mouseover", function () {
    if (prj.classList.contains("prj1")) {
      imgProjectbtn1.classList.add("active");
    }

    if (prj.classList.contains("prj2")) {
      imgProjectbtn2.classList.add("active");
    }

    if (prj.classList.contains("prj3")) {
      imgProjectbtn3.classList.add("active");
    }
  });
});

prjCntainer.forEach((prj) => {
  prj.addEventListener("mouseout", function () {
    if (prj.classList.contains("prj1")) {
      imgProjectbtn1.classList.remove("active");
    }

    if (prj.classList.contains("prj2")) {
      imgProjectbtn2.classList.remove("active");
    }

    if (prj.classList.contains("prj3")) {
      imgProjectbtn3.classList.remove("active");
    }
  });
});

//nav bar icon functions

let navBaIcon = document.querySelector('.navbaricon');
let navBarUl = document.querySelector('.navBarul');



navBaIcon.addEventListener('click', function(){
  if (navBarUl.classList.contains('navbarclick')){
    navBarUl.classList.remove('navbarclick');
  }
  else{
    navBarUl.classList.add('navbarclick');
  }

});

navBarUl.addEventListener('click', function(){
  navBarUl.classList.remove('navbarclick');
});



 