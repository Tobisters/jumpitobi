import { Scene } from "phaser";
import { Player } from "../classes/player";
import { Floor } from "../classes/floor";


const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Game',
};

export class GameScene extends Scene {
    private floor: Floor = new Floor(this);
    private player: Player = new Player(this, this.floor);

    constructor() {
        super(sceneConfig);
    }

    public preload() {
        this.load.image('player', 'src/assets/sprites/character.png')
    }

    public create() {
        this.floor.createFloor();
        this.player.createPlayer(6, 3, true);
    }

    public update() {
        const cursorKeys = this.input.keyboard.createCursorKeys();

        // if (cursorKeys.up.isDown) {
        //     this.square.body.setVelocityY(-500);
        // } else if (cursorKeys.down.isDown) {
        //     this.square.body.setVelocityY(500);
        // } else {
        //     this.square.body.setVelocityY(0);
        // }

        // if (cursorKeys.right.isDown) {
        //     this.square.body.setVelocityX(500);
        // } else if (cursorKeys.left.isDown) {
        //     this.square.body.setVelocityX(-500);
        // } else {
        //     this.square.body.setVelocityX(0);
        // }
    }
}