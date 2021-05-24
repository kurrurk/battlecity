import Tank from "./tank.js";

export default class World {
    grid = [];
    player1Tank = new Tank();
    player2Tank = null;
    enemyTanks = [];

    update(key, isMoving) {
        if (isMoving) {
            switch (key) {
                case 'ArrowUp':
                    this.player1Tank.y = (this.player1Tank.y) ? this.player1Tank.y - 1 : this.player1Tank.y;
                    break;
                case 'ArrowRight':
                    this.player1Tank.x = (this.player1Tank.x < 480) ? this.player1Tank.x + 1: this.player1Tank.x;
                    break;
                case 'ArrowDown':
                    this.player1Tank.y = (this.player1Tank.y < 480) ? this.player1Tank.y + 1: this.player1Tank.y;
                    break;
                case 'ArrowLeft':
                    this.player1Tank.x = (this.player1Tank.x) ? this.player1Tank.x - 1: this.player1Tank.x;
                    break;
                case 'Space':
                case 'Enter':
            }
        }
    }
}