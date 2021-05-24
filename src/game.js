export default class Game {
    constructor({world, view, levels}) {
        this.world = world;
        this.view = view;
        this.levels = levels;
        this.isMoving = false;


        this.loop = this.loop.bind(this);
    }

    async init() {
        this.view.init();

        document.addEventListener('keydown', ({code}) => {
            switch (code) {
                case 'ArrowUp':
                case 'ArrowRight':
                case 'ArrowDown':
                case 'ArrowLeft':
                    this.isMoving = true;
                    break;
                case 'Space':
                case 'Enter':
            }
            this.key = code;
        })

        document.addEventListener('keyup', ({code}) => {
            switch (code) {
                case 'ArrowUp':
                case 'ArrowRight':
                case 'ArrowDown':
                case 'ArrowLeft':
                    this.isMoving = false;
                case 'Space':
                case 'Enter':
            }
            this.key = '';
        })
    }

    start() {
        requestAnimationFrame(this.loop);
    }

    loop() {
        //console.log('LOOP')
        //get input
        this.world.update(this.key, this.isMoving);
        this.view.update(this.world);

        requestAnimationFrame(this.loop);
    }
}