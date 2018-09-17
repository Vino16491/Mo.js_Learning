const burst = new mojs.Burst({
    radius: {0: 50},
    count: 45,
    children: {
        shape: {'cricle': 'cross'},
        stroke: {'grey':'cyan'},
        angle: {720: 0},
        radius: {15: 2},
        duration: 3000,
        x:-45,
        y:-180

    }
})

const burst2 = new mojs.Burst({
    radius: {0: 180},
    count: 45,
    children: {
        shape: {'rect': 'cross'},
        stroke: {'grey':'cyan'},
        strokeSize:10,
        angle: {360: 0},
        radius: {10: 2},
        duration: 1000,
        delay:2000,
    }
})


const circ = new mojs.Shape({
    fill:{'white' : 'cyan'},
    opacity:{1:0}, 
    radius:{0:40},  
    duration: 1500,
    delay:1500,
})

const circ2 = new mojs.Shape({
    fill:{'cyan' : 'whitesmoke'}, 
    radius:{0:90}, 
    delay:1000,  
    duration: 1500,
    opacity:{1:0}, 

})

const circ3 = new mojs.Shape({
    fill:{'white' : 'cyan'},
    opacity:{1:0}, 
    radius:{0:140},  
    duration: 2000,
    delay:2000,
})

const timeline = new mojs.Timeline({
    repeat:999
}).add(burst, circ, burst2, circ2, circ3).play();