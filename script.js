//nav bar color change

let navBar = document.querySelector('.header');
let scrollTracker = document.querySelector('.scrolltracker');

let homePage = document.querySelector('.home');
let aboutPage = document.querySelector('.about');
let projectPage = document.querySelector('.projects');
let homebtn = document.querySelector('.homebtn');

console.log(scrollTracker.offsetHeight);
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


// console.log(aboutPage.offsetTop);

// window.addEventListener('scroll', () => {
//   if(aboutPage.offsetTop > window.scrollY){
//     console.log('1');
//     // homebtn.classList.add('active1')
//   }

//   if(projectPage.offsetTop + aboutPage.offsetTop > window.scrollY){
//     console.log('2');
//   }


//   // if(window.scrollY < projectPage.offsetTop){
//   //   console.log('hello world');
//   //   homebtn.classList.remove('activescrollbtn')
//   // }

//   // else{
//   //   homebtn.classList.remove('activescrollbnt');
//   // }

// });













// scroll effects

// projects hover function

// let imgProject1 = document.querySelector('.imgprj1');
// let imgProject2 = document.querySelector('.imgprj2');
// let imgProject3 = document.querySelector('.imgprj3');

// let imgProjectbtn1 = document.querySelector('.prjbtn1');
// let imgProjectbtn2 = document.querySelector('.prjbtn2');
// let imgProjectbtn3 = document.querySelector('.prjbtn3');

// let project1 = document.querySelector('.prj1');
// let project2 = document.querySelector('.prj2');
// let project3 = document.querySelector('.prj3');

// project1.addEventListener("mouseover", function(){
//     imgProjectbtn1.classList.add('active')
// });

// project2.addEventListener("mouseover", function(){
//     imgProjectbtn2.classList.add('active')
// });

// project3.addEventListener("mouseover", function(){
//     imgProjectbtn3.classList.add('active')
// });

// project1.addEventListener("mouseout", function(){
//     imgProjectbtn1.classList.remove('active')
// });

// project2.addEventListener("mouseout", function(){
//     imgProjectbtn2.classList.remove('active')
// });

// project3.addEventListener("mouseout", function(){
//     imgProjectbtn3.classList.remove('active')
// });

// tajarib

// const prjBtns = document.querySelectorAll(".prjbtns");

// hadchi khedam
// prjCntainer.forEach(prj => {
//     prj.addEventListener('click', function(){

//     })

// });
