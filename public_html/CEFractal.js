"use strict";

class Kronkel extends CECanvas {
    constructor() {
        // Always call super first in constructor
        super({lx: -0.5, by: -0.5, rx: 1.5, ty: 1.5});
        this.n = this.getInt('data-n', 6);
        this.m = this.getObject('data-m',
                [
                    {x: 0.5, y: 0.5},
                    {x: 1.0, y: 0.0}
                ]);
        this.b = this.getObject('data-b',
                [
                    {x: 0.0, y: 0.0},
                    {x: 1.0, y: 0.0},
                    {x: 1.0, y: 1.0},
                    {x: 0.0, y: 1.0},
                    {x: 0.0, y: 0.0}
                ]);
        this.appendChild(this.canvas);
        this.updateRendering();
    }
    updateRendering() {
        const k = kronkel();
        k.show(this.canvas, this.bgcolor, this.fgcolor, this.win, this.n, this.m, this.b);
    }
}

class Mira extends CECanvas {
    constructor() {
        // Always call super first in constructor
        super({lx: -9.0, by: -10.5, rx: 12.0, ty: 6.5});
        this.i = this.getInt('data-i', 100000);
        this.x = this.getFloat('data-x', 4.0);
        this.y = this.getFloat('data-y', 0.0);
        this.a = this.getFloat('data-a', -0.48);
        this.b = this.getFloat('data-b', 0.94);
        this.appendChild(this.canvas);
        this.updateRendering();
    }
    static get observedAttributes() { return CECanvas.observedAttributes.concat('data-i', 'data-x', 'data-y', 'data-a', 'data-b'); }
    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "data-i":
                this.i = newValue;
                break;
            case "data-x":
                this.x = newValue;
                break;
            case "data-y":
                this.y = newValue;
                break;
            case "data-a":
                this.a = newValue;
                break;
            case "data-b":
                this.b = newValue;
                break;
            default:
                super.attributeChangedCallback(name, oldValue, newValue);
                return;
        }
        this.updateRendering();
    }
    updateRendering() {
        const m = mira();
        m.show(this.canvas, this.bgcolor, this.fgcolor, this.win, this.i, this.x, this.y, this.a, this.b);
    }
}

class Stof extends CECanvas {
    constructor() {
        // Always call super first in constructor
        super({lx: -0.9, by: -0.7, rx: 1.5, ty: 1.1});
        this.n = this.getInt('data-n', 12);
        this.a = this.getFloat('data-a', 0.6);
        this.b = this.getFloat('data-b', 0.6);
        this.c = this.getFloat('data-c', 0.53);
        this.d = this.getFloat('data-d', 0.0);
        this.appendChild(this.canvas);
        this.updateRendering();
    }
    static get observedAttributes() { return CECanvas.observedAttributes.concat('data-n', 'data-a', 'data-b', 'data-c', 'data-d'); }
    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "data-n":
                this.n = newValue;
                break;
            case "data-a":
                this.a = newValue;
                break;
            case "data-b":
                this.b = newValue;
                break;
            case "data-c":
                this.c = newValue;
                break;
            case "data-d":
                this.d = newValue;
                break;
            default:
                super.attributeChangedCallback(name, oldValue, newValue);
                return;
        }
        this.updateRendering();
    }
    updateRendering() {
        const s = stof();
        s.show(this.canvas, this.bgcolor, this.fgcolor, this.win, this.n, this.a, this.b, this.c, this.d);
    }
}

class Henon extends CECanvas {
    constructor() {
        // Always call super first in constructor
        super({lx: -1.2, by: -1.2, rx: 1.2, ty: 1.2});
        this.n = this.getInt('data-n', 10000);
        this.appendChild(this.canvas);
        this.updateRendering();
    }
    updateRendering() {
        const h = henon();
        h.show(this.canvas, this.bgcolor, this.fgcolor, this.win, this.n);
    }
}

addEventListener("load", function () {
    customElements.define('canvas-fractal-kronkel', Kronkel);
    customElements.define('canvas-fractal-mira', Mira);
    customElements.define('canvas-fractal-stof', Stof);
    customElements.define('canvas-fractal-henon', Henon);
});
