
class Child1 {
	constructor(txt) {
		const child1 = document.createElement("p")
		const parent = document.querySelector(".parent")
		child1.className = "child"
		child1.innerHTML = txt
		parent.appendChild(child1)
	}
}

export default Child1