import { Scene } from "phaser";
import { Floor } from "../classes/floor";


const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Game',
};

export class GameScene extends Scene {
    private character: Phaser.GameObjects.Sprite;
    private floor: Floor = new Floor(this);

    constructor() {
        super(sceneConfig);
    }

    public preload() {
        // this.load.image('character', 'src/assets/sprites/character.png')
    }

    public create() {
        this.floor.createFloor();
        // this.character = this.add.sprite(this.tiles[2][4].x, this.tiles[2][4].y, 'character').setScale(0.23, 0.23).setOrigin(0.56, 0.85).setInteractive();
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