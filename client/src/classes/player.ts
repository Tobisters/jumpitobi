import { GameScene } from "src/scenes/gameScene";
import { Disco } from "./disco";
import { Movement } from "./movement";
import { Vector } from "./vector";

export class Player {
    private sprite: Phaser.GameObjects.Sprite;
    private scene: GameScene;
    private disco: Disco;
    private floorPosition: Vector;
    private movement: Movement;

    constructor(scene: GameScene, disco: Disco) {
        this.scene = scene;
        this.disco = disco;
    }

    public drawPlayer(xTile: number, yTile: number, isInteractive: boolean) {
        this.movement = new Movement(this, this.scene);
        this.floorPosition = new Vector(xTile, yTile);
        this.sprite = this.scene.add.sprite(this.disco.getXPositionOfFloor(xTile), this.disco.getYPositionOfFloor(yTile), 'player');
        this.sprite.setFrame(3);
        this.sprite.setOrigin(-0.5, 0.4);
        if (isInteractive) {
            this.sprite.setInteractive();
        }

        this.scene.cameras.main.startFollow(this.sprite, true);
        this.createAnimations();
    }

    public reactOnInput() {
        this.movement.reactOnInput();
    }

    public getCurrentTilePositionwithOffset(xOffset: number, yOffset: number): Vector {
        const xPosition = this.disco.getXPositionOfFloor(this.getTilePosition().x + xOffset);
        const yPosition = this.disco.getYPositionOfFloor(this.getTilePosition().y + yOffset);
        return new Vector(xPosition, yPosition);
    }

    public getSprite(): Phaser.GameObjects.Sprite {
        return this.sprite
    }

    public getTilePosition(): Vector {
        return this.floorPosition;
    }

    public setFloorPosition(x: number, y: number) {
        this.floorPosition.set(x, y);
    }

    public getDisco(): Disco {
        return this.disco;
    }

    private createAnimations() {
        this.scene.anims.create({
            key: 'jump_down',
            frames: this.scene.anims.generateFrameNumbers('player_jump', { start: 18, end: 20 })
                .concat(this.scene.anims.generateFrameNumbers('player', { start: 3, end: 3 })),
            frameRate: 12,
        });
        this.scene.anims.create({
            key: 'jump_up',
            frames: this.scene.anims.generateFrameNumbers('player_jump', { start: 6, end: 8 })
                .concat(this.scene.anims.generateFrameNumbers('player', { start: 1, end: 1 })),
            frameRate: 9,
        });
        this.scene.anims.create({
            key: 'jump_right',
            frames: this.scene.anims.generateFrameNumbers('player_jump', { start: 0, end: 2 })
                .concat(this.scene.anims.generateFrameNumbers('player', { start: 3, end: 3 })),
            frameRate: 15,
        });
        this.scene.anims.create({
            key: 'jump_left',
            frames: this.scene.anims.generateFrameNumbers('player_jump', { start: 12, end: 14 })
                .concat(this.scene.anims.generateFrameNumbers('player', { start: 3, end: 3 })),
            frameRate: 15,
        });
    }
}