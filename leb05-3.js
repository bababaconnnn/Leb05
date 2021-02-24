function ActivateNight(){
    document.getElementById("good").textContent="GOOD NIGHT";
    document.getElementById("time").textContent="This is night time!";
    document.getElementById("mode").textContent="day";
    document.getElementById("click").textContent="day";
    word.classList.remove("wordDay");
    word.classList.add("wordNight");
    div.classList.remove("black");
    div.classList.add("white");
    title.classList.remove("black");
    title.classList.add("white");
    title2.classList.remove("black");
    title2.classList.add("white");
    bg.classList.remove("bgDAY");
    bg.classList.add("bgNIGHT");
    button.removeEventListener("click",ActivateNight);
    button.addEventListener("click",ActivateDay);
}
function ActivateDay(){
    console.log('click');
    document.getElementById("good").textContent="GOOD MORNING";
    document.getElementById("time").textContent="This is day time!";
    document.getElementById("mode").textContent="night";
    document.getElementById("click").textContent="night";
    word.classList.remove("wordNight");
    word.classList.add("wordDay");
    div.classList.remove("white");
    div.classList.add("black");
    title.classList.remove("white");
    title.classList.add("black");
    title2.classList.remove("white");
    title2.classList.add("black");
    bg.classList.remove("bgNight");
    bg.classList.add("bgDAY");
    button.removeEventListener("click",ActivateDay);
    button.addEventListener("click",ActivateNight);
}
const button = document.querySelector("button");
button.addEventListener("click",ActivateNight);
const word = document.querySelector(".wordDay");    
const div = document.querySelector("div");    
const title = document.getElementById("good");    
const title2 = document.getElementById("time");    
const bg = document.querySelector("body");