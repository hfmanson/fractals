// Create a class for the element
class XProduct extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();

        // Create a shadow root
        var shadow = this.attachShadow({mode: 'open'});

        // Create a standard img element and set it's attributes.
        var img = document.createElement('img');
        img.alt = this.getAttribute('data-name');
        img.src = this.getAttribute('data-img');
        img.width = '150';
        img.height = '150';
        img.className = 'product-img';

        // Add the image to the shadow root.
        shadow.appendChild(img);

        // Add an event listener to the image.
        img.addEventListener('click', () => {
            window.location = this.getAttribute('data-url');
        });

        // Create a link to the product.
        var link = document.createElement('a');
        link.innerText = this.getAttribute('data-name');
        link.href = this.getAttribute('data-url');
        link.className = 'product-name';

        // Add the link to the shadow root.
        shadow.appendChild(link);
    }
}

/* this is not going to happen https://github.com/w3c/webcomponents/issues/509#issuecomment-230700060
class PlasticButton extends HTMLButtonElement {
    constructor() {
        super();

        this.addEventListener("click", () => {
            alert('ok');
        });
    }
}
*/
// Define the new element
addEventListener("load", function () {
    customElements.define('x-product', XProduct);
    //this is not going to happen https://github.com/w3c/webcomponents/issues/509#issuecomment-230700060
//    customElements.define("plastic-button", PlasticButton, {extends: "button"});
});
