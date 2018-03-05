"use strict";

class InputSlider extends HTMLElement {
    constructor() {
        super();
        const slider = document.createElement('input');
        slider.setAttribute("type", "range");
        slider.setAttribute("min", this.getAttribute("data-min"));
        slider.setAttribute("max", this.getAttribute("data-max"));
        slider.setAttribute("step", this.getAttribute("data-step"));
        slider.setAttribute("value", this.getAttribute("data-value"));
        const bc = new BroadcastChannel(this.getAttribute("data-channel"));
        const attribute = this.getAttribute("data-attribute");
        slider.addEventListener("input", (evt) => {
            console.log(evt.target.value);
            bc.postMessage({ attribute: attribute, value: evt.target.value}); /* send */
        }, false);
        bc.addEventListener("message", (evt) => {
            if (evt.data.attribute === attribute) {
                slider.value = evt.data.value;
            }
        }, false);
        this.appendChild(slider);
    }
}

class InputColor extends HTMLElement {
    constructor() {
        super();
        const color = document.createElement('input');
        color.setAttribute("type", "color");
        color.setAttribute("value", this.getAttribute("data-value"));
        const bc = new BroadcastChannel(this.getAttribute("data-channel"));
        const attribute = this.getAttribute("data-attribute");
        color.addEventListener("change", (evt) => {
            console.log(evt.target.value);
            bc.postMessage({ attribute: attribute, value: evt.target.value}); /* send */
        }, false);
        bc.addEventListener("message", (evt) => {
            if (evt.data.attribute === attribute) {
                color.value = evt.data.value;
            }
        }, false);
        this.appendChild(color);
    }
}

addEventListener("load", function () {
    customElements.define('input-slider', InputSlider);
    customElements.define('input-color', InputColor);
});
