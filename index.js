const burst = new mojs.Burst({
    radius: {0: 360},
    count: 8,
    children: {
        shape: 'cross',
        stroke: 'cyan',
        strokeWidth: {6: 0},
        angle: {220: 0},
        radius: {10: 2},
        duration: 3000,

    }
})

const burst2 = new mojs.Burst({
    radius: {0: 360},
    count: 6,
    children: {
        shape: 'zigzag',
        points:5,
        stroke: {'orange':'cyan'},
        strokeWidth: {6: 0},
        angle: {'-180': 0},
        radius: {15: 2},
        opacity:{1:0},
        duration: 2500,

    }
})

const timeline = new mojs.Timeline({
    repeat:999
}).add(burst, burst2).play();