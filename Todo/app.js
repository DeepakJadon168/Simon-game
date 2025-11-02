let h1= document.querySelector("h1");
let inp= document.querySelector("input");
let btn= document.querySelector("button");
let ul= document.querySelector("ul");

btn.addEventListener("click",function(){
    let li= document.createElement("li");
    li.innerText=inp.value;

    let delBtn= document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete");

    ul.appendChild(li);
    li.appendChild(delBtn);
    inp.value="";
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
    }
})


// ul.addEventListener("click",function(event){
//     if(event.target.nodeName =="BUTTON"){
//         let listItem = event.target.parentElement;
//         listItem.remove();
//     }
// });

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         par.remove();
//     })
// }