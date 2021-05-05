import { Scene } from "phaser";

export class Disco {
    static NUM_VERTICAL_TILES: number = 200;
    static NUM_HORIZONTAL_TILES: number = 200;
    static TILE_SIZE: number = 70;

    private scene: Scene;
    private triggerTimer: Phaser.Time.TimerEvent;

    constructor(scene: Scene) {
        this.scene = scene;
    }

    public drawDisco() {
        // create the Tilemap
        const map: Phaser.Tilemaps.Tilemap = this.scene.make.tilemap({ key: 'tilemap' });
        const tileset: Phaser.Tilemaps.Tileset = map.addTilesetImage('disco_tileset', 'disco_tiles');
        map.createLayer('layer1', tileset);

        // USEFUL FOR LATER
        // let color: number = WHITE;
        // for (let i = 0; i < Disco.NUM_HORIZONTAL_TILES; i++) {
        //     this.tiles[i] = [];
        //     for (let m = 0; m < Disco.NUM_VERTICAL_TILES; m++) {
        //         this.tiles[i][m] = this.scene.add.rectangle(
        //             Disco.TILE_SIZE / 2 + i * Disco.TILE_SIZE, Disco.TILE_SIZE / 2 + m * Disco.TILE_SIZE, Disco.TILE_SIZE, Disco.TILE_SIZE, color
        //         );
        //         if (color == WHITE) {
        //             color = ORANGE;
        //         } else {
        //             color = WHITE;
        //         }
        //     }
        // }

        // this.triggerTimer = this.scene.time.addEvent({
        //     callback: this.timerEvent,
        //     callbackScope: this,
        //     delay: TIME_BETWEEN_BEATS_IN_SECONDS,
        //     loop: true
        // });
    }

    public getXPositionOfTile(xTile: number): number {
        return xTile * Disco.TILE_SIZE;
    }

    public getYPositionOfTile(yTile: number): number {
        return yTile * Disco.TILE_SIZE;
    }

    // private timerEvent() {
    //     for (let i = 0; i < Disco.NUM_HORIZONTAL_TILES; i++) {
    //         for (let m = 0; m < Disco.NUM_VERTICAL_TILES; m++) {
    //             if (this.tiles[i][m].fillColor == WHITE) {
    //                 if (this.tilesAreOrange) {
    //                     this.tiles[i][m].fillColor = PURPLE;
    //                 } else {
    //                     this.tiles[i][m].fillColor = ORANGE;
    //                 }
    //             } else {
    //                 this.tiles[i][m].fillColor = WHITE;
    //             }
    //         }

    //     }
    //     this.tilesAreOrange = !this.tilesAreOrange;
    // }
}