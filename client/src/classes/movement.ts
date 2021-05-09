import { GameScene } from "src/scenes/gameScene";
import { Player } from "./player";

export class Movement {
    static OVERJUMP_IN_PIXELS = 50;
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
        let xOffset = 0;
        let yOffset = 0;
        if (direction === 'up') {
            xOffset = 0;
            yOffset = -1;
            this.player.getSprite().setFrame(1);
            this.player.getSprite().play('jump_up');
            this.playUpTween(xOffset, yOffset);
        } else if (direction === 'down') {
            xOffset = 0;
            yOffset = 1;
            this.player.getSprite().setFrame(3);
            this.player.getSprite().play('jump_down');
            this.playDownTween(xOffset, yOffset);
        } else if (direction === 'right') {
            xOffset = 1;
            yOffset = 0;
            this.player.getSprite().setFrame(0);
            this.player.getSprite().play('jump_right');
            this.playHorizontalTween(xOffset, yOffset);
        } else if (direction === 'left') {
            xOffset = -1;
            yOffset = 0;
            this.player.getSprite().setFrame(2);
            this.player.getSprite().play('jump_left');
            this.playHorizontalTween(xOffset, yOffset);
        } else {
            return;
        }

        this.player.setFloorPosition(this.player.getTilePosition().x + xOffset, this.player.getTilePosition().y + yOffset);
    }

    private playHorizontalTween(xOffset: number, yOffset: number) {
        let XTween: Phaser.Tweens.Tween = this.scene.tweens.create({
            targets: this.player.getSprite(),
            x: { value: this.player.getCurrentTilePositionwithOffset(xOffset, yOffset).x, duration: 200, ease: 'Quad' },
            repeat: 0,
        });
        let YTween: Phaser.Tweens.Tween = this.scene.tweens.create({
            targets: this.player.getSprite(),
            y: { value: this.player.getCurrentTilePositionwithOffset(0, 0).y - 1.3 * Movement.OVERJUMP_IN_PIXELS, duration: 100, ease: 'Quad' },
            repeat: 0,
            yoyo: true
        });

        XTween.on('start', () => YTween.play());
        XTween.play();
    }

    private playUpTween(xOffset: number, yOffset: number) {
        let YTween1: Phaser.Tweens.Tween = this.scene.tweens.create({
            targets: this.player.getSprite(),
            y: { value: this.player.getCurrentTilePositionwithOffset(xOffset, yOffset).y - Movement.OVERJUMP_IN_PIXELS, duration: 200, ease: 'Quad' },
            repeat: 0,
        });
        let YTween2: Phaser.Tweens.Tween = this.scene.tweens.create({
            targets: this.player.getSprite(),
            y: { value: this.player.getCurrentTilePositionwithOffset(xOffset, yOffset).y, duration: 100, ease: 'Quad' },
            repeat: 0,
        });

        YTween1.on('complete', () => YTween2.play());
        YTween1.play();
    }

    private playDownTween(xOffset: number, yOffset: number) {
        let YTween1: Phaser.Tweens.Tween = this.scene.tweens.create({
            targets: this.player.getSprite(),
            y: { value: this.player.getCurrentTilePositionwithOffset(0, 0).y - Movement.OVERJUMP_IN_PIXELS, duration: 100, ease: 'Quad' },
            repeat: 0,
        });
        let YTween2: Phaser.Tweens.Tween = this.scene.tweens.create({
            targets: this.player.getSprite(),
            y: { value: this.player.getCurrentTilePositionwithOffset(xOffset, yOffset).y, duration: 200, ease: 'Quad' },
            repeat: 0,
        });

        YTween1.on('complete', () => YTween2.play());
        YTween1.play();
    }
}