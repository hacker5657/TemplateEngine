class Template {
	constructor(rootTag, html) {
		this._rootTag = rootTag;
		this._html = html;
	}

	execute(count = 1){
		this._rootTag.innerHTML = '';
		for(let i = 0; i < count; i++){	
			this._rootTag.insertAdjacentHTML("beforeend", this._html);
		}
		
	}
}