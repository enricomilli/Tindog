// Create the Dog class here
import { dogs } from "./data.js";

export class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    getDogHtml() {
        return `
            <img src="${this.avatar}" alt="dog">
            <h2 class='dog-name'>${this.name}, ${this.age}</h2>
            <p class='dog-bio'>${this.bio}</p>
        `
    }
}