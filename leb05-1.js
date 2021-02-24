function ClickText(){
    document.getElementById("a").textContent="Ahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh";
    document.getElementById("b").textContent=":-( :-( :-( :-( :-( :-( :-( :-(";
}
function ClickButton(button){
    console.log('click');
    const b = button.currentTarget;
    alert(b.textContent+" baconnnnn!");
    b.style.backgroundColor="blue";
}
const text = document.querySelector(".text");
text.addEventListener("click",ClickText);
const button = document.querySelectorAll("button").forEach(button => button.addEventListener("click",ClickButton));