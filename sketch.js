function setup() {
    createCanvas(1200, 800);
    background('#19535f');
}

function draw() {
    for (let i = 20; i < width; i += 50) {
        ellipse(i, 20, 10, 10);

    }
}