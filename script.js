const createbtn=document.getElementById("createbtn");
const card=document.querySelector(".card");
const notes=document.querySelector(".notes");
let image;

createbtn.onclick=function(){
    let newnote = document.createElement("p");
    image = document.createElement("img");
    newnote.classList.add("newnote");
    newnote.setAttribute("contenteditable","true");
    image.classList.add("imgclass");
    image.src="delete.png";
    notes.appendChild(newnote).appendChild(image);
}

notes.addEventListener("click",(e)=>{
if(e.target.tagName==="IMG"){
   e.target.parentElement.remove();
}
});

// local storage must be implemented 
// delete icon should be fixed





