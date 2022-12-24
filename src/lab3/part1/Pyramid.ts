import Rectangle from "./Rectangle";


export default class Pyramid extends Rectangle {

    public height: number = 0


    constructor(w: number, h: number) {
        super(w);
        this.height = h
    }

    public area = () => {
        return (this.perimeter() / 2) *
            Math.sqrt(Math.pow(this.width / 2, 2) + Math.pow(this.height, 2))
    }

    public volume = () => {
        return Math.pow(this.width, 2) / 3 * this.height
    }

}

