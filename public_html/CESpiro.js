"use strict";

class Spiro extends CECanvas {
    constructor() {
        // Always call super first in constructor
        super({lx: -1.0, by: -1.0, rx: 1.0, ty: 1.0});
        this.ring = this.getInt('data-ring', 96);
        this.appendChild(this.canvas);
        this.s = spiro(this.canvas, this.bgcolor, this.fgcolor, this.win);
    }
    draw(wiel, fgcolor, gat, startpos) {
        this.s.show(this.ring, wiel, fgcolor, gat, startpos);
    }
}

class SpiroFig extends HTMLElement {
    constructor() {
        super();
        this.updateRendering();
    }
    updateRendering() {
        const
            wiel = this.getAttribute("data-wiel")
            , fgcolor = this.getAttribute("data-color")
            , gat = this.getAttribute("data-gat")
            , startpos = this.getAttribute("data-startpos")
            ;

        this.parentElement.draw(wiel, fgcolor, gat, startpos);
    }
}



addEventListener("load", function () {
    customElements.define('canvas-spiro', Spiro);
    customElements.define('canvas-spiro-fig', SpiroFig);
});
