let para = document.getElementById("para");
let inputs = document.getElementById("inputs");
let submit = document.getElementById("submit");

submit.addEventListener("click", () => {
	if (inputs.value === "") {
		alert("Enter some item");
	} else {
		let li = document.createElement("li");
		li.textContent = inputs.value;
		li.className = "list";
		para.appendChild(li);

		let remove = document.createElement("a");
		remove.textContent = "Delete";
		remove.href = "javascript:void(0)";
		remove.className = "remove";
		li.appendChild(remove);
		// let pos =
		// let pos =
		let pos = para.firstElementChild;
		console.log(pos);

		if (pos == null) {
			para.append(li);
		} else {
			para.insertBefore(li, pos);
		}
		remove.addEventListener("click", (e) => {
			let rem = e.target.parentNode;
			rem.remove();
		});
	}
	inputs.value = "";
});
