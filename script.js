var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

// return the length of the input
function inputLength() {
	return input.value.length;
}

// creates and adds elements to the list
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.classList.add("listItem");
	ul.appendChild(li);
	li.addEventListener("click", strike);
	// console.log("clicked "+li.value);
	input.value = "";

	// creates button and appends it to the list item
	var deleteBtn = document.createElement("button");
	deleteBtn.appendChild(document.createTextNode("-"));
	li.appendChild(deleteBtn);
	deleteBtn.classList.add("deleteBtn");
	deleteBtn.addEventListener("click", deleteItem);
}

// delete the item
function deleteItem(event){
	//console.log(event.target.parentElement);
	event.target.parentElement.remove();
}

// adds a strike if the item is done
function strike(event){
	event.target.classList.toggle("done");
}

// adds item if used clicks the '+' button
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

// adds item if user presses enter
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

//event listeners
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);