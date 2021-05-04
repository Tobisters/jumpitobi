import { GameScene } from "src/scenes/gameScene";
import { Floor } from "./floor";
import { Movement } from "./movement";
import { Vector } from "./vector";

export class Player {
    private sprite: Phaser.GameObjects.Sprite;
    private scene: GameScene;
    private floor: Floor;
    private tilePosition: Vector;
    private movement: Movement;

    constructor(scene: GameScene, floor: Floor) {
        this.scene = scene;
        this.floor = floor;
    }

    public drawPlayer(xTile: number, yTile: number, isInteractive: boolean) {
        this.movement = new Movement(this, this.scene);
        this.tilePosition = new Vector(xTile, yTile);
        this.sprite = this.scene.add.sprite(this.floor.getTiles()[xTile][yTile].x, this.floor.getTiles()[xTile][yTile].y, 'player');
        this.sprite.setScale(0.20, 0.20);
        this.sprite.setOrigin(0.56, 0.85);
        this.sprite.play('jump');
        if (isInteractive) {
            this.sprite.setInteractive();
        }
    }

    public reactOnInput() {
        this.movement.reactOnInput();
    }

    public getCurrentTilewithOffset(xOffset: number, yOffset: number): Phaser.GameObjects.Rectangle {
        return this.getFloor().getTiles()[this.getTilePosition().x + xOffset][this.getTilePosition().y + yOffset];
    }

    public getSprite(): Phaser.GameObjects.Sprite {
        return this.sprite
    }

    public getTilePosition(): Vector {
        return this.tilePosition;
    }

    public getFloor(): Floor {
        return this.floor;
    }
}