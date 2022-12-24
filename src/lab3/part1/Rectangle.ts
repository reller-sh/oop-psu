export default class Rectangle {
    public width: number = 0;

    constructor(w: number) {
        this.width = w;
    }

    public area = (): number => Math.pow(this.width, 2)

    public perimeter = (): number => this.width * 4;

    public diagonal = (): number => this.width * 4;
}
