const photos = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg"
];

const message = `
إلى رانيا ❤️

منذ 28/06/2022...

وأنتِ أجمل شيء حدث في حياتي.

إذا أخطأت في حقك...

فأنا أعتذر من كل قلبي.

قد لا تكفي كلمة "آسف"...

لكن حبي لك أكبر من أي كلمة.

أحبك...

وسأظل أختارك كل يوم.

رضا ❤️
`;

let index = 0;
let slider;
let i = 0;

function start() {

    document.getElementById("music").play();

    document.querySelector(".welcome").style.display = "none";
    document.getElementById("gallery").style.display = "block";

    slider = setInterval(() => {

        index++;

        if (index >= photos.length) {
            index = 0;
        }

        const photo = document.getElementById("photo");

photo.classList.remove("fade");

setTimeout(()=>{
    photo.src = photos[index];
    photo.classList.add("fade");
},100);

    }, 3000);

    setTimeout(() => {

        clearInterval(slider);

        document.getElementById("gallery").style.display = "none";
        document.getElementById("message").style.display = "block";

        typeWriter();

        updateCounter();

    }, 22000);
}

function typeWriter() {

    const text = document.getElementById("text");

    text.innerHTML = "";

    i = 0;

    const timer = setInterval(() => {

        if (i < message.length) {

            if (message.charAt(i) === "\n") {
                text.innerHTML += "<br>";
            } else {
                text.innerHTML += message.charAt(i);
            }

            i++;

        } else {

            clearInterval(timer);

            document.getElementById("loveBtn").style.display = "inline-block";

        }

    }, 45);
}

setInterval(() => {

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}, 400);

function updateCounter() {

    const startDate = new Date("2022-06-28");
    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const counter = document.getElementById("counter");

    if (counter) {
        counter.innerHTML =
            "❤️ منذ 28/06/2022 ❤️<br><br>" +
            days +
            " يوم معًا";
    }
}

setInterval(updateCounter, 1000);

function showLove() {

    document.getElementById("loveBtn").style.display = "none";

    document.getElementById("finalMessage").style.display = "block";

setTimeout(() => {
    document.getElementById("signature").style.display = "block";
}, 2000);

document.body.style.background =
"linear-gradient(180deg,#000,#3b0764,#000)";
 
 setTimeout(() => {

    document.getElementById("restartBtn").style.display = "inline-block";

},3000);

setTimeout(() => {

    document.getElementById("signature").style.display = "none";

    document.getElementById("goodbye").style.display = "block";

},7000);
 
 setTimeout(() => {

    document.getElementById("finalMessage").style.display = "none";

    document.getElementById("signature").style.display = "none";

    document.getElementById("restartBtn").style.display = "none";

    document.getElementById("lastWish").style.display = "block";

},5000);

 for (let j = 0; j < 100; j++) {

        const heart = document.createElement("div");

        heart.className = "heart";
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (20 + Math.random() * 35) + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }
}

for(let s=0;s<120;s++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";
    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=Math.random()*2+"s";

    document.body.appendChild(star);

}

window.onload = function(){

setTimeout(()=>{

document.getElementById("loading").style.display="none";

},3000);

}