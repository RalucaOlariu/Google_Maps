import {ButtonType} from "./types.js";

export class Button implements ButtonType{
    name: String;
    className: String;
    tagName: String;
    constructor(name: String, className: String, tagName: String) {
        this.name=name;
        this.className=className;
        this.tagName= tagName;
    }
    createButton(): any {
        let button = document.createElement('button');
        button.textContent=this.name.toString();
        button.classList.add(this.className.toString());
        button.id=this.tagName.toString();
        return button;
    }
}