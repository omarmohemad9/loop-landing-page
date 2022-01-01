let onloader = document.querySelector(".onload");
window.addEventListener("load", function() {
    onloader.classList.add("disable");
});

let navphone = document.querySelector(".navphone");
let startBtn = document.getElementById("startPh");
let closeBtn = document.getElementById("closePh");
let animation = document.querySelectorAll("#animations li");
startBtn.onclick = function() {
    navphone.classList.add("active");

    animation.forEach((e) => {
        e.classList.add("active");
    });
};
closeBtn.onclick = function() {
    navphone.classList.remove("active");
    animation.forEach((e) => {
        e.classList.remove("active");
    });
};

// notification
let closeNoti = document.getElementById("closeNoti");
let notif = document.getElementById("btnText");
let context = document.querySelector(".notification");
let Desk = document.getElementById("closeAslo");

Desk.onclick = function() {
    blockH();
};

notif.onclick = function() {
    blockH();
};

function blockH() {
    context.classList.add("active");
    setTimeout(() => {
        context.classList.remove("active");
    }, 3000);
}

closeNoti.onclick = function() {
    context.classList.remove("active");
};

// transition on scroll

let contextReal = document.querySelector(".context");
contextReal.classList.add("active");

// left img
let img = document.querySelector(".imgAndText");
let imgChild = document.querySelector(".imgAndText .leftImg");
let textChild = document.querySelector(".imgAndText .rightTextImg");

// images
let images = document.querySelectorAll(".imageSection div");

window.addEventListener("scroll", (e) => {
    // console.log(window.innerHeight);
    let offs = window.pageYOffset;
    // left img
    if (img.offsetTop - img.offsetHeight - img.offsetHeight < offs) {
        imgChild.classList.add("active");
    }
    if (textChild.offsetTop < window.pageYOffset) {
        textChild.classList.add("active");
    }
    images.forEach((ele) => {
        let offsTopEle = ele.offsetTop;
        let heightInn = ele.offsetHeight;
        if (offsTopEle - heightInn - heightInn < offs) {
            ele.classList.add("active");
        }
    });
});