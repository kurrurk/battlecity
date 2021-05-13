export default class Game {
    constructor({world, view, levels}) {
        this.world = world;
        this.view = view;
        this.levels = levels;
        this.loop = this.loop.bind(this);
    }

    start() {
        requestAnimationFrame(this.loop);
    }

    loop() {
        console.log('LOOP')
        //get input
        //update world
        this.world.update();
        //update view
        this.view.update();

        requestAnimationFrame(this.loop);
    }
}