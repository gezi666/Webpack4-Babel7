
class Child2 {
	constructor(txt) {
		const child2 = document.createElement("p")
		const parent = document.querySelector(".parent")
		child2.className = "child"
		child2.innerHTML = txt
		parent.appendChild(child2)
		setTimeout(() => { console.log('hello') }, 1000)
	}
}

export default Child2
