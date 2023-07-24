// ==UserScript==
// @name         RPlace 2023
// @namespace    https://yaso09.github.io/
// @version      1.2
// @description  Discord: @yaso09 ve @yasocuk, Github: https://github.com/yaso09/rplace-2023
// @author       okunamayanad
// @match        https://garlic-bread.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// @license MIT
// @downloadURL        https://github.com/okunamayanad/rplace-2023/raw/main/eskisi.js
// @updateURL        https://github.com/okunamayanad/rplace-2023/raw/main/eskisi.js 
// ==/UserScript==
console.log("1");
if (window.top !== window.self) {
    console.log("2");
    // console.log("3");
    // Load the image
    const image = document.createElement("img");
    var d = new Date();
    image.src = "https://cdn.discordapp.com/attachments/1132704106650288201/1132704197909950514/turkey-and-ataturk.png?" + d.getTime();
    image.onload = () => {
        image.style = `position: absolute; left: 0; top: 0; width: ${image.width / 3}px; height: ${image.height / 3}px; image-rendering: pixelated; z-index: 1`;
    };

    // Add the image as overlay
    const camera = document.querySelector("garlic-bread-embed").shadowRoot.querySelector("garlic-bread-camera");
    const canvas = camera.querySelector("garlic-bread-canvas");
    const container = canvas.shadowRoot.querySelector('.container')
    container.appendChild(image);

    console.log("container", container);

    // Add a style to put a hole in the pixel preview (to see the current or desired color)
    const waitForPreview = setInterval(() => {
        const preview = camera.querySelector("garlic-bread-pixel-preview");
        if (preview) {
            clearInterval(waitForPreview);
            const style = document.createElement('style')
            style.innerHTML = '.pixel { clip-path: polygon(-20% -20%, -20% 120%, 37% 120%, 37% 37%, 62% 37%, 62% 62%, 37% 62%, 37% 120%, 120% 120%, 120% -20%); }'
            preview.shadowRoot.appendChild(style);
        }
    }, 100);
}
