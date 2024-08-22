var inputBox = document.getElementById("input-box")
var listContainer = document.getElementById("list-container")
function addTask(){
  if(inputBox.value === ''){
    alert("You must write something!")
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
}
listContainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
  }
})
// var inputBox = document.getElementById("input-box");
// var text = document.querySelector(".text");
// function addTask(){
//   if(inputBox.value === ""){
//     alert("please enter Task")
//   }else{
//     var newEle = document.createElement("ul");
//     newEle.innerHTML = `${inputBox.value} <i class="fa-solid fa-trash"></i>`
//     text.appendChild(newEle);
//     inputBox.value ="";
//   }
// }
