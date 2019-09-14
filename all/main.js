var input = document.getElementById("userInput");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("enter").click();
  }
});

var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");


var dt = new Date();
document.getElementById("myDate").innerHTML = (("0"+dt.getDate()).slice(-2)) +"."+ (("0"+(dt.getMonth()+1)).slice(-2))  +"."+ (dt.getFullYear()) + "<br>" +" "+ (("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2));
function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
	
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value)); 
	ul.appendChild(li); 
	input.value = "";
	function crossOut() {
		li.classList.toggle("done");
	}
	li.addEventListener("click",crossOut);
    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("Cancel"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
	function deleteListItem(){
		li.classList.add("delete")
	}
}


function addListAfterClick(){
	if (inputLength() >  0) {
		createListElement();
	}
}



enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

