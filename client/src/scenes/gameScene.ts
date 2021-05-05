import { Scene } from "phaser";
import { Player } from "../classes/player";
import { Disco } from "../classes/disco";


const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Game',
};

export class GameScene extends Scene {
    private disco: Disco = new Disco(this);
    private player: Player = new Player(this, this.disco);
    private cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys;

    constructor() {
        super(sceneConfig);
    }

    public preload() {
        this.loadImages();
    }

    public create() {
        this.createAnimations();
        this.disco.drawDisco();
        this.player.drawPlayer(103, 110, true);
        this.cursorKeys = this.input.keyboard.createCursorKeys();
    }

    public update() {
        this.player.reactOnInput();
    }

    public getCursorKeys(): Phaser.Types.Input.Keyboard.CursorKeys {
        return this.cursorKeys;
    }

    private loadImages() {
        this.load.image('player', 'src/assets/sprites/character/player.png');
        this.load.image('jump1', 'src/assets/sprites/character/jump1.png');
        this.load.image('jump2', 'src/assets/sprites/character/jump2.png');
        this.load.image('jump3', 'src/assets/sprites/character/jump3.png');
        this.load.image('jump4', 'src/assets/sprites/character/jump4.png');
        this.load.image('jump5', 'src/assets/sprites/character/jump5.png');
        this.load.image('jump6', 'src/assets/sprites/character/jump6.png');
        this.load.image('jump7', 'src/assets/sprites/character/jump7.png');
        this.load.image('jump8', 'src/assets/sprites/character/jump8.png');
        this.load.image('jump9', 'src/assets/sprites/character/jump9.png');
        this.load.image('jump10', 'src/assets/sprites/character/jump10.png');
        this.load.image('jump11', 'src/assets/sprites/character/jump11.png');
        this.load.image('jump12', 'src/assets/sprites/character/jump12.png');
        this.load.image('jump13', 'src/assets/sprites/character/jump13.png');
        this.load.image('jump14', 'src/assets/sprites/character/jump14.png');
        this.load.image('jump15', 'src/assets/sprites/character/jump15.png');
        this.load.image('jump16', 'src/assets/sprites/character/jump16.png');
        this.load.image('jump17', 'src/assets/sprites/character/jump17.png');
        this.load.image('jump18', 'src/assets/sprites/character/jump18.png');
        this.load.image('jump19', 'src/assets/sprites/character/jump19.png');
        this.load.image('jump20', 'src/assets/sprites/character/jump20.png');
        this.load.image('jump21', 'src/assets/sprites/character/jump21.png');
        this.load.image('jump22', 'src/assets/sprites/character/jump22.png');
        this.load.image('jump23', 'src/assets/sprites/character/jump23.png');
        this.load.image('jump24', 'src/assets/sprites/character/jump24.png');
        this.load.image('jump25', 'src/assets/sprites/character/jump25.png');
        this.load.image('jump26', 'src/assets/sprites/character/jump26.png');
        this.load.image('jump27', 'src/assets/sprites/character/jump27.png');
        this.load.image('jump28', 'src/assets/sprites/character/jump28.png');
        this.load.image('jump29', 'src/assets/sprites/character/jump29.png');
        this.load.image('jump30', 'src/assets/sprites/character/jump30.png');

        // load the tilemap
        this.load.image('disco_tiles', 'src/assets/tilemaps/CyberpunkNightclub.jpg')
        this.load.tilemapTiledJSON('tilemap', 'src/assets/tilemaps/disco.json')
    }

    private createAnimations() {
        this.anims.create({
            key: 'jump',
            frames: [
                { key: 'jump1' },
                { key: 'jump2' },
                { key: 'jump3' },
                { key: 'jump4' },
                { key: 'jump5' },
                { key: 'jump6' },
                { key: 'jump7' },
                { key: 'jump8' },
                { key: 'jump9' },
                { key: 'jump10' },
                { key: 'jump11' },
                { key: 'jump12' },
                { key: 'jump13' },
                { key: 'jump14' },
                { key: 'jump15' },
                { key: 'jump16' },
                { key: 'jump17' },
                { key: 'jump18' },
                { key: 'jump19' },
                { key: 'jump20' },
                { key: 'jump21' },
                { key: 'jump22' },
                { key: 'jump23' },
                { key: 'jump24' },
                { key: 'jump25' },
                { key: 'jump26' },
                { key: 'jump27' },
                { key: 'jump28' },
                { key: 'jump29' },
                { key: 'jump30' },
                { key: 'player' }
            ],
            frameRate: 80,
            showOnStart: false,
            repeat: 0
        });
    }
}