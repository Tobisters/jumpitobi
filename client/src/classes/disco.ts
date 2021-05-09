import { Scene } from "phaser";
import { FLOOR_SIZE } from "../shared/constants";

export class Disco {
    static NUM_VERTICAL_TILES = 200;
    static NUM_HORIZONTAL_TILES = 200;
    private scene: Scene;
    // contains tiles that indicate where the player may not jump onto
    private collisionTiles: Phaser.Tilemaps.Tile[];

    constructor(scene: Scene) {
        this.scene = scene;
    }

    public drawDisco() {
        // create the Tilemap
        let map: Phaser.Tilemaps.Tilemap = this.scene.make.tilemap({ key: 'tilemap' });
        map.addTilesetImage('borders', 'borders');
        map.addTilesetImage('floors', 'floors');
        map.addTilesetImage('walls', 'walls');
        map.addTilesetImage('conference', 'conference');
        map.addTilesetImage('music', 'music');
        map.addTilesetImage('npc', 'npc');
        map.addTilesetImage('npc2', 'npc2');
        map.addTilesetImage('npc3', 'npc3');
        map.addTilesetImage('npc4', 'npc4');
        map.addTilesetImage('stairs', 'stairs');
        map.addTilesetImage('hospital', 'hospital');
        map.addTilesetImage('generic', 'generic');
        map.addTilesetImage('basement', 'basement');
        map.addTilesetImage('bathroom', 'bathroom');

        map.createLayer('Background', ['borders', 'floors', 'walls']);
        // save tiles where the player may not jump onto
        const layer = map.createLayer('Collision', ['walls']);
        this.collisionTiles = layer.getTilesWithin(undefined, undefined, undefined, undefined, { isNotEmpty: true });
        map.createLayer('Furniture1', ['conference', 'music', 'hospital', 'generic', 'bathroom', 'basement']);
        map.createLayer('Character', ['npc', 'npc2', 'npc3', 'npc4', 'hospital']);
        map.createLayer('Stair', ['stairs', 'hospital']);
        map.createLayer('Furniture2', ['conference', 'music', 'hospital', 'generic', 'bathroom', 'basement']);
        map.createLayer('Furniture3', ['music', 'basement']);
        map.createLayer('Furniture4', ['music']);
    }

    public getXPositionOfFloor(xTile: number): number {
        return xTile * FLOOR_SIZE;
    }

    public getYPositionOfFloor(yTile: number): number {
        return yTile * FLOOR_SIZE;
    }

    public getCollisionTiles(): Phaser.Tilemaps.Tile[] {
        return this.collisionTiles;
    }
}