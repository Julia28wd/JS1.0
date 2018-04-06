class options {
	constructor (text, height, width, bg, fontSize, textAlign) {
		this.text = text;
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}
	createDiv() {
		var newDiv = document.createElement('div');
		var body = document.getElementsByTagName('body')[0];
		body.appendChild(newDiv);
		newDiv.innerHTML = this.text;
		newDiv.style.cssText = `height: ${this.height}; width: ${this.width}; background-color: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign};`;
	}
}

const newObj = new options ('Some text', '300px', '200px', 'red', '16px', 'center');
newObj.createDiv();
console.log(newObj);
