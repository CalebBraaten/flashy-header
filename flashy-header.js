/*
    Thank you to Thomas C. Haflich from whom all the CSS code was derived from. 
    You can read the article here: https://dev.to/tchaflich/how-to-actually-animate-a-text-gradient-in-css-3a33
    Or visit the Codepen here: https://codepen.io/tchaflich/pen/mZWoOe
*/

class FlashyHeader extends HTMLElement{
    constructor(){
        super();

        // Make a template from the markup function
        let template = document.createElement('template');
        template.innerHTML = this.markup();

        // Attach the template to a ShadowDOM
        this.attachShadow({mode: 'open'}).append(template.content.cloneNode(true));
    }

    markup(){
        return `
            <style>
                .styles {
                    color: white;
                    background-image: linear-gradient(90deg, #ff218c, #ffd800, #21b1ff, #ff218c, #ffd800, #21b1ff, #ff218c);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-position-x: 0;
                    background-position-y: 0;
                    background-size: 200% 100%;
                    animation-name: whoosh;
                    animation-duration: 5000ms;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                }
                @keyframes whoosh {
                    0% {
                        background-position-x: 0;
                    }
                    100% {
                        background-position-x: 100%;
                    }
                }
            </style>
            <h1 class="styles"><slot></slot></h1>
        `
    }
}

customElements.define('flashy-header', FlashyHeader)