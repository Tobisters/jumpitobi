import { Scene } from "phaser";
import { Floor } from "./floor";
import { Vector } from "./vector";

export class Player {
    private sprite: Phaser.GameObjects.Sprite;
    private scene: Scene;
    private floor: Floor;
    private tilePosition: Vector;

    constructor(scene: Scene, floor: Floor) {
        this.scene = scene;
        this.floor = floor;
    }

    public createPlayer(xTile: number, yTile: number, isInteractive: boolean) {
        this.tilePosition = new Vector(xTile, yTile);
        this.sprite = this.scene.add.sprite(this.floor.getTiles()[xTile][yTile].x, this.floor.getTiles()[xTile][yTile].y, 'player').setScale(0.23, 0.23).setOrigin(0.56, 0.85);
        if (isInteractive) {
            this.sprite.setInteractive();
        }
    }

    public move(xTile: number, yTile: number) {
        this.tilePosition.set(xTile, yTile);
        this.sprite.setPosition(this.floor.getTiles()[xTile][yTile].x, this.floor.getTiles()[xTile][yTile].y);
    }

    public moveUp() {
        this.move(this.tilePosition.x, this.tilePosition.y - 1);
    }

    public moveRight() {
        this.move(this.tilePosition.x + 1, this.tilePosition.y);
    }

    public moveDown() {
        this.move(this.tilePosition.x, this.tilePosition.y + 1);
    }

    public moveLeft() {
        this.move(this.tilePosition.x - 1, this.tilePosition.y);
    }



}