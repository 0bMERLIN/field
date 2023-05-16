import { Vector } from "p5";

declare global {
    interface Window {
        setup(): void
        draw(): void
        keyPressed(): void
        mousePressed(): void
        preload(): void
    }
}

let frag: string
let vert: string
let mainShader: p5.Shader

window.preload = () => {
    loadStrings("shader.frag", (s) => {frag = s.join("\n")});
    loadStrings("shader.vert", (s) => {vert = s.join("\n")});
}

window.setup = () => {
    createCanvas(windowWidth, windowHeight, WEBGL);
    mainShader = createShader(vert, frag);
}

window.windowResized = () => {
    resizeCanvas(windowWidth, windowHeight);
}

window.draw = () => {
    background(0);

    noStroke();
    shader(mainShader);
    rect(0, 0, width, height);
}

window.mouseWheel = (event: any) => {
}

window.keyPressed = () => {
}

window.mousePressed = () => {
}
