let frag;
let vert;
let mainShader;
window.preload = () => {
    loadStrings("shader.frag", (s) => { frag = s.join("\n"); });
    loadStrings("shader.vert", (s) => { vert = s.join("\n"); });
};
window.setup = () => {
    createCanvas(windowWidth, windowHeight, WEBGL);
    mainShader = createShader(vert, frag);
};
window.windowResized = () => {
    resizeCanvas(windowWidth, windowHeight);
};
window.draw = () => {
    background(0);
    noStroke();
    shader(mainShader);
    rect(0, 0, width, height);
};
window.mouseWheel = (event) => {
};
window.keyPressed = () => {
};
window.mousePressed = () => {
};
export {};
//# sourceMappingURL=sketch.js.map