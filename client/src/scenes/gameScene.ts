import { Scene } from "phaser";
import { Player } from "../classes/player";
import { Disco } from "../classes/disco";
import { TILE_SIZE } from "../shared/constants";


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
        this.disco.drawDisco();
        this.player.drawPlayer(40, 17, true);
        this.cursorKeys = this.input.keyboard.createCursorKeys();
    }

    public update() {
        this.player.reactOnInput();
    }

    public getCursorKeys(): Phaser.Types.Input.Keyboard.CursorKeys {
        return this.cursorKeys;
    }

    private loadImages() {
        this.load.spritesheet('player', 'src/assets/sprites/character/player.png', { frameWidth: TILE_SIZE, frameHeight: TILE_SIZE * 2 });
        this.load.spritesheet('player_jump', 'src/assets/sprites/character/player_jump.png', { frameWidth: TILE_SIZE, frameHeight: TILE_SIZE * 2 });

        // load the tilemap
        this.load.image('borders', 'src/assets/tilemaps/Room/Room_Builder_borders_48x48.png');
        this.load.image('floors', 'src/assets/tilemaps/Room/Room_Builder_Floors_48x48.png');
        this.load.image('walls', 'src/assets/tilemaps/Room/Room_Builder_Walls_48x48.png');
        this.load.image('generic', 'src/assets/tilemaps/Theme_Sorter_48x48/1_Generic_48x48.png');
        this.load.image('bathroom', 'src/assets/tilemaps/Theme_Sorter_48x48/3_Bathroom_48x48.png');
        this.load.image('music', 'src/assets/tilemaps/Theme_Sorter_48x48/6_Music_and_sport_48x48.png');
        this.load.image('conference', 'src/assets/tilemaps/Theme_Sorter_48x48/13_Conference_Hall_48x48.png');
        this.load.image('basement', 'src/assets/tilemaps/Theme_Sorter_48x48/14_Basement_48x48.png');
        this.load.image('stairs', 'src/assets/tilemaps/Theme_Sorter_48x48/17_Visibile_Upstairs_System_48x48.png');
        this.load.image('hospital', 'src/assets/tilemaps/Theme_Sorter_48x48/19_Hospital_48x48.png');
        this.load.image('npc', 'src/assets/sprites/character/Witch_idle_48x48.png');
        this.load.image('npc2', 'src/assets/sprites/character/Fishmonger_2_idle_48x48.png');
        this.load.image('npc3', 'src/assets/sprites/character/Doctor_2_idle_48x48.png');
        this.load.image('npc4', 'src/assets/sprites/character/Kid_Abby_idle_48x48.png');
        this.load.tilemapTiledJSON('tilemap', 'src/assets/tilemaps/disco.json');
    }
}