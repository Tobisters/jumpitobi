import { Scene } from "phaser";
import { ORANGE, PURPLE, TIME_BETWEEN_BEATS_IN_SECONDS, WHITE } from "../shared/constants";

export class Floor {
    static NUM_VERTICAL_TILES: number = 39;
    static NUM_HORIZONTAL_TILES: number = 39;
    static TILE_SIZE: number = 100;

    private scene: Scene;
    private tiles: Phaser.GameObjects.Rectangle[][] = [];
    private triggerTimer: Phaser.Time.TimerEvent;
    private tilesAreOrange: boolean = true;

    constructor(scene: Scene) {
        this.scene = scene;
    }

    public createFloor() {
        let color: number = WHITE;
        for (let i = 0; i < Floor.NUM_HORIZONTAL_TILES; i++) {
            this.tiles[i] = [];
            for (let m = 0; m < Floor.NUM_VERTICAL_TILES; m++) {
                this.tiles[i][m] = this.scene.add.rectangle(
                    Floor.TILE_SIZE / 2 + i * Floor.TILE_SIZE, Floor.TILE_SIZE / 2 + m * Floor.TILE_SIZE, Floor.TILE_SIZE, Floor.TILE_SIZE, color
                    );
                if (color == WHITE) {
                    color = ORANGE;
                } else {
                    color = WHITE;
                }
            }

        }

        this.triggerTimer = this.scene.time.addEvent({
            callback: this.timerEvent,
            callbackScope: this,
            delay: TIME_BETWEEN_BEATS_IN_SECONDS,
            loop: true
        });
    }

    public getTiles(): Phaser.GameObjects.Rectangle[][] {
        return this.tiles;
    }

    private timerEvent() {
        for (let i = 0; i < Floor.NUM_HORIZONTAL_TILES; i++) {
            for (let m = 0; m < Floor.NUM_VERTICAL_TILES; m++) {
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