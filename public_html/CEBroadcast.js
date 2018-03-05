"use strict";

class CEBroadcast extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
        const channel = this.getAttribute("data-channel");
        const destination = this.getAttribute("data-destination");
        const elements = destination.split(/[ ]+/).map(name => document.getElementById(name));
        new BroadcastChannel(channel).addEventListener("message", (ev) => {
            const data = ev.data;

            for (const element of elements) {
                if (element && data.attribute && data.value ) {
                    element.setAttribute(data.attribute, data.value);
                }
            }
        }, false);
    }
}

addEventListener("load", function () {
    customElements.define('broadcast-forwarder', CEBroadcast);
});
