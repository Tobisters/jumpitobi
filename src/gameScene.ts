import { NUM_HORIZONTAL_TILES, NUM_VERTICAL_TILES, ORANGE, PURPLE, TILE_SIZE, TIME_BETWEEN_BEATS_IN_SECONDS, WHITE } from "./constants";


const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Game',
};

export class GameScene extends Phaser.Scene {
    private tiles: Phaser.GameObjects.Rectangle[][] = [];
    private triggerTimer: Phaser.Time.TimerEvent;
    private tilesAreOrange: boolean = true;

    constructor() {
        super(sceneConfig);
    }

    public create() {
        this.createBackground();
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

    private createBackground() {
        let color: number = WHITE;
        for (let i = 0; i < NUM_HORIZONTAL_TILES; i++) {
            this.tiles[i] = [];
            for (let m = 0; m < NUM_VERTICAL_TILES; m++) {
                this.tiles[i][m] = this.add.rectangle(TILE_SIZE / 2 + i * TILE_SIZE, TILE_SIZE / 2 + m * TILE_SIZE, TILE_SIZE, TILE_SIZE, color);
                if (color == WHITE) {
                    color = ORANGE;
                } else {
                    color = WHITE;
                }
            }

        }

        this.triggerTimer = this.time.addEvent({
            callback: this.timerEvent,
            callbackScope: this,
            delay: TIME_BETWEEN_BEATS_IN_SECONDS,
            loop: true
        });
    }

    private timerEvent() {
        for (let i = 0; i < NUM_HORIZONTAL_TILES; i++) {
            for (let m = 0; m < NUM_VERTICAL_TILES; m++) {
                if (this.tiles[i][m].fillColor == WHITE) {
                    if (this.tilesAreOrange) {
                        this.tiles[i][m].fillColor = PURPLE;
                    } else {
                        this.tiles[i][m].fillColor = ORANGE;
                    }
                } else {
                    this.tiles[i][m].fillColor = WHITE;
                }
            }

        }
        this.tilesAreOrange = !this.tilesAreOrange;
    }
}