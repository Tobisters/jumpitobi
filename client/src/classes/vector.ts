export class Vector {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public set(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public equals(otherVector: Vector) {
        if (this.x === otherVector.x && this.y === otherVector.y) {
            return true;
        }
        return false;
    }
}