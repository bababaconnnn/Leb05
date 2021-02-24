function add(){
    const text = document.createTextNode(document.querySelector('input').value);
    let bin = document.createElement("img");
    bin.src= "https://i.pinimg.com/originals/f3/af/2b/f3af2b16637864256e0a75efdb071bfe.png";
    bin.classList.add("bin");
    let list = document.createElement("div");
    const span = document.createElement("span");
    list.classList.add("list");
    span.appendChild(text);
    list.appendChild(bin);
    list.appendChild(span);
    document.body.appendChild(list);
    bin.addEventListener("click",deleteList);
    list.addEventListener("click",dolist);
}
function dolist(text){
    console.log("click");
    let t = text.currentTarget;
    t.querySelector("span").innerHTML = "<s>"+t.querySelector("span").innerHTML+"</s>";
}
function deleteList(){
    let n = this.parentNode;
    n.parentNode.removeChild(n);
}
const button = document.querySelector("button");
button.addEventListener("click",add);
