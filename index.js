const burst = new mojs.Burst({
    radius: {
        0: 360
    },
    children: {
        shape: 'rect',
        stroke: "teal",
        strokeWidth: {
            6: 0
        },
        angle: {
            360: 0
        },
        radius: {
            30: 5
        },
        duration: 3000,

    }
}).play();