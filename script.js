const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function page4Animation() {
    var hoverImage = document.querySelector("#fixed-image")
    var elemContainer = document.querySelector("#elem-container")
    elemContainer.addEventListener("mouseenter", function () {
        hoverImage.style.display = "block";
    });
    elemContainer.addEventListener("mouseleave", function () {
        hoverImage.style.display = "none"
    });
    var elems = document.querySelectorAll(".elem");
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image");
            hoverImage.style.backgroundImage = `url(${image})`; // Template literal bolte hai iss backtick vale syntax ko, interview mai puch lete hai
        })
    })
}
function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}
function menuAnimation() {
    var menu = document.querySelector("nav");
    var fullscr = document.querySelector("#full-scr");
    var nav_image = document.querySelector("nav img");
    var flag = 0;
    menu.addEventListener("click", function () {
        if (flag == 0) {
            fullscr.style.top = 0;
            nav_image.style.opacity = 0;
            flag = 1;
        }
        else {
            fullscr.style.top = "-100%";
            nav_image.style.opacity = 1;
            flag = 0;
        }
    });
}
function loaderAnimation() {
    var loader = document.querySelector("#loader");
    setTimeout(() => {
        loader.style.top = "-100%";
    }, 3700);
}

function page4Top(){
    let para = ['Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.','Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.', 'We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.'];
    let src = ['https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15e1_Project-p-1080.jpg', 'https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d0_Project.webp', 'https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15cd_Execution-p-1080.jpg']
    let p = document.querySelector("#content");
    let img = document.querySelector(".topright img");
    let project = document.querySelector("#project");
    let design = document.querySelector("#design");
    let execution = document.querySelector("#execution");
    document.querySelector(".topleft #design").addEventListener("click", function(){
        p.textContent = para[0];
        img.setAttribute("src", src[0]);
        design.style.borderLeft = "3px solid #fe320a";
        project.style.borderLeft = "3px solid #4F4A45";
        execution.style.borderLeft = "3px solid #4F4A45";
        design.style.color = "#fff";
        project.style.color = "#4F4A45";
        execution.style.color = "#4F4A45";
        p.classList.add("fade");
        setTimeout(() => {
            p.classList.remove("fade");
        }, 1000);
        img.classList.add("fade");
        setTimeout(() => {
            img.classList.remove("fade");
        }, 1000);
    })
    document.querySelector(".topleft #project").addEventListener("click", function(){
        p.textContent = para[1];
        img.setAttribute("src", src[1]);
        project.style.borderLeft = "3px solid #fe320a";
        design.style.borderLeft = "3px solid #4F4A45";
        execution.style.borderLeft = "3px solid #4F4A45";
        project.style.color = "#fff";
        design.style.color = "#4F4A45";
        execution.style.color = "#4F4A45";
        p.classList.add("fade");
        setTimeout(() => {
            p.classList.remove("fade");
        }, 1000);
        img.classList.add("fade");
        setTimeout(() => {
            img.classList.remove("fade");
        }, 1000);
    })
    document.querySelector(".topleft #execution").addEventListener("click", function(){
        p.textContent = para[2];
        img.setAttribute("src", src[2]);
        execution.style.borderLeft = "3px solid #fe320a";
        design.style.borderLeft = "3px solid #4F4A45";
        project.style.borderLeft = "3px solid #4F4A45";
        execution.style.color = "#fff";
        design.style.color = "#4F4A45";
        project.style.color = "#4F4A45";
        p.classList.add("fade");
        setTimeout(() => {
            p.classList.remove("fade");
        }, 1000);
        img.classList.add("fade");
        setTimeout(() => {
            img.classList.remove("fade");
        }, 1000);
    })
}
page4Animation();
swiperAnimation();
menuAnimation();
loaderAnimation();
page4Top();