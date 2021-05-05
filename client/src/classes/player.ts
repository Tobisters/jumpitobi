import { GameScene } from "src/scenes/gameScene";
import { Disco } from "./disco";
import { Movement } from "./movement";
import { Vector } from "./vector";

export class Player {
    private sprite: Phaser.GameObjects.Sprite;
    private scene: GameScene;
    private disco: Disco;
    private tilePosition: Vector;
    private movement: Movement;

    constructor(scene: GameScene, disco: Disco) {
        this.scene = scene;
        this.disco = disco;
    }

    public drawPlayer(xTile: number, yTile: number, isInteractive: boolean) {
        this.movement = new Movement(this, this.scene);
        this.tilePosition = new Vector(xTile, yTile);
        this.sprite = this.scene.add.sprite(this.disco.getXPositionOfTile(xTile), this.disco.getYPositionOfTile(yTile), 'player');
        this.sprite.setScale(0.15, 0.15);
        this.sprite.setOrigin(-0.03, 0.36);
        this.sprite.play('jump');
        if (isInteractive) {
            this.sprite.setInteractive();
        }

        this.scene.cameras.main.startFollow(this.sprite, true);
    }

    public reactOnInput() {
        this.movement.reactOnInput();
    }

    public getCurrentTilePositionwithOffset(xOffset: number, yOffset: number): Vector {
        const xPosition = this.disco.getXPositionOfTile(this.getTilePosition().x + xOffset);
        const yPosition = this.disco.getYPositionOfTile(this.getTilePosition().y + yOffset);
        return new Vector(xPosition, yPosition);
    }

    public getSprite(): Phaser.GameObjects.Sprite {
        return this.sprite
    }

    public getTilePosition(): Vector {
        return this.tilePosition;
    }

    public setTilePosition(x: number, y: number) {
        this.tilePosition.set(x, y);
    }

    public getDisco(): Disco {
        return this.disco;
    }
}