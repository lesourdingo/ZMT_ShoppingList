var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var liWrapper = document.createElement("div");
	var li = document.createElement("li");
	var btn = document.createElement("button");
	liWrapper.className = ("li-wrapper");
	btn.className = "btn-delete";
	btn.innerHTML = "DELETE";
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(liWrapper);
	liWrapper.appendChild(li);
	liWrapper.appendChild(btn);
	input.value = "";
}

function deleteItem(e) {
	if(e.target.className === 'btn-delete') {
		e.target.parentElement.remove();
	}
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function underlineItem(e) {
	if(e.target.tagName === "LI") {
		e.target.classList.toggle("done");
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", underlineItem);

ul.addEventListener("click", deleteItem);

