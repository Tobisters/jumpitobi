import { GameScene } from "src/scenes/gameScene";
import { Disco } from "./disco";
import { Player } from "./player";

export class Movement {
    private player: Player;
    private scene: GameScene;
    private movementBlocked = false;

    constructor(player: Player, scene: GameScene) {
        this.player = player;
        this.scene = scene;
    }

    public reactOnInput() {
        let cursorKeys = this.scene.getCursorKeys();
        if (!cursorKeys.up.isDown && !cursorKeys.down.isDown && !cursorKeys.right.isDown && !cursorKeys.left.isDown) {
            this.movementBlocked = false;
            return;
        }

        if (!this.movementBlocked) {
            if (cursorKeys.up.isDown) {
                this.move('up');
            } else if (cursorKeys.down.isDown) {
                this.move('down');
            } else if (cursorKeys.right.isDown) {
                this.move('right');
            } else if (cursorKeys.left.isDown) {
                this.move('left');
            }
        }
        this.movementBlocked = true
    }

    private move(direction: 'up' | 'down' | 'right' | 'left') {
        this.player.getSprite().anims.play('jump');
        let xOffset = 0;
        let yOffset = 0;
        if (direction === 'up') {
            xOffset = 0;
            yOffset = -1;
            this.playUpTween(xOffset, yOffset);
        } else if (direction === 'down') {
            xOffset = 0;
            yOffset = 1;
            this.playDownTween(xOffset, yOffset);
        } else if (direction === 'right') {
            xOffset = 1;
            yOffset = 0;
            this.player.getSprite().flipX = false;
            this.player.getSprite().setOrigin(-0.03, 0.36);
            this.playHorizontalTween(xOffset, yOffset);
        } else if (direction === 'left') {
            xOffset = -1;
            yOffset = 0;
            this.player.getSprite().flipX = true;
            this.player.getSprite().setOrigin(-0.12, 0.36);
            this.playHorizontalTween(xOffset, yOffset);
        } else {
            return;
        }

        this.player.setTilePosition(this.player.getTilePosition().x + xOffset, this.player.getTilePosition().y + yOffset);
    }

    private playHorizontalTween(xOffset: number, yOffset: number) {
        let XTween: Phaser.Tweens.Tween = this.scene.tweens.create({
            targets: this.player.getSprite(),
            x: { value: this.player.getCurrentTilePositionwithOffset(xOffset, yOffset).x, duration: 200, ease: 'Linear' },
            repeat: 0,
        });
        let YTween: Phaser.Tweens.Tween = this.scene.tweens.create({
            targets: this.player.getSprite(),
            y: { value: this.player.getCurrentTilePositionwithOffset(0, 0).y - Disco.TILE_SIZE / 2, duration: 100, ease: 'Expo' },
            repeat: 0,
            yoyo: true
        });

        XTween.on('start', () => YTween.play());
        XTween.play();
    }

    private playUpTween(xOffset: number, yOffset: number) {
        const overjump = Disco.TILE_SIZE / 2;
        let YTween1: Phaser.Tweens.Tween = this.scene.tweens.create({
            targets: this.player.getSprite(),
            y: { value: this.player.getCurrentTilePositionwithOffset(xOffset, yOffset).y - overjump, duration: 200, ease: 'Quad' },
            repeat: 0,
        });
        let YTween2: Phaser.Tweens.Tween = this.scene.tweens.create({
            targets: this.player.getSprite(),
            y: { value: this.player.getCurrentTilePositionwithOffset(xOffset, yOffset).y, duration: 100, ease: 'Linear' },
            repeat: 0,
        });

        YTween1.on('complete', () => YTween2.play());
        YTween1.play();
    }

    private playDownTween(xOffset: number, yOffset: number) {
        const overjump = Disco.TILE_SIZE / 4;
        let YTween1: Phaser.Tweens.Tween = this.scene.tweens.create({
            targets: this.player.getSprite(),
            y: { value: this.player.getCurrentTilePositionwithOffset(0, 0).y - overjump, duration: 50, ease: 'Linear' },
            repeat: 0,
        });
        let YTween2: Phaser.Tweens.Tween = this.scene.tweens.create({
            targets: this.player.getSprite(),
            y: { value: this.player.getCurrentTilePositionwithOffset(xOffset, yOffset).y, duration: 250, ease: 'Quad' },
            repeat: 0,
        });

        YTween1.on('complete', () => YTween2.play());
        YTween1.play();
    }
}