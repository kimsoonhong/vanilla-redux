const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("span");

let count = 1;

number.innerText = count;

const updateText = () => {
	number.innerText = count;
};

const handleAdd = () => {
	count = count + 1;
	console.log(count);
	updateText();
};
const handleminus = () => {
	count = count - 1;
	console.log(count);
	updateText();
};

add.addEventListener("click", handleAdd);

minus.addEventListener("click", handleminus);
