export class Celda {
    private up: Celda;
    private down: Celda;
    private left: Celda;
    protected right: Celda;
    readonly obstaculized: boolean;

    constructor() {
        this.up = new Celda();
        this.down = new Celda();
        this.left = new Celda();
        this.right = new Celda();

        let result = parseInt(String(Math.random()));
        this.obstaculized = Boolean(result);
    }

}