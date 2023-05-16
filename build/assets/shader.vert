precision mediump float;

attribute vec2 aPosition;

varying vec2 pos;

void main() {

    pos = aPosition;
    gl_Position = vec4(aPosition * 2.0 - 1.0, 1.0, 1.0);
}