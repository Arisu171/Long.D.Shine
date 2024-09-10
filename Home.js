let stringBox = {
    wTextture: 0,
    wScene: 0,
    hTexture: 0,
    sScene: 0,
    caretPosScene: []
};
textInpuptE1.innerHTML = string;
textInpuptE1.focus();

init();
createEvents();
setCaretToEndOfInput();
handleInput();
refreshText();
WebGL2RenderingContext();
function init() {
    camera = new THREE.Perspective
    Camera(45, window.innerWidth /
        window.innerHeight, .1, 10000)
    camera.position.z = 18;

    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer({
        alpha: true
    });
}