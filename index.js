class Template {
	constructor(rootTag, content){
		this._rootTag = rootTag;
		this._content = content;
	}

	execute(count = 1) {
		for(let i = 0; i < count; i++) {
			let contentCopy = this._content.cloneNode(true);
			this._rootTag.appendChild(contentCopy);
		}
	}
}
