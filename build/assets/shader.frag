precision mediump float;

varying vec2 pos;

void main() {

    vec3 color = vec3(pos.xy, 0.0);
    gl_FragColor = vec4(color, 1.0);
}