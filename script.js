var ul = document.getElementsByTagName("ul")[0];
var input =document.getElementById("userinput");
var bt =document.getElementById("enter");

function getItemLength(){
	return input.value.length;
}
function addList(){
	if(getItemLength()>0){
	var li=document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.addEventListener('click', toggleDone);
	ul.appendChild(li);}
	input.value="";
	//adds delete button 
	var delBtn= document.createElement("button");
	var delX= document.createElement("i");
	delX.classList.add("fas", "fa-times");
	delBtn.classList.add("delBtn");
	delBtn.appendChild(delX);
	delBtn.addEventListener("click", delItem);
	li.append(delBtn);

	function toggleDone(){
	li.classList.toggle('done');
	}
	function delItem(){
	li.remove();
	}
}
function addClick() {
  if(addItemLength() > 0) {
    createListItem();
  }
}

bt.addEventListener("click",addList);