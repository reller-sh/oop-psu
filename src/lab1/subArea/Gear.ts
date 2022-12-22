import {BaseItemObject} from "./BaseItemObject";


type LT = 1.5 | 1.75 | 2 | 2.25 | 2.5

export class Gear extends BaseItemObject{


    private _counterTeeth: number
    public lengthTeeth: LT


    private computeTC = () => {
        this._counterTeeth = ((this.length / 2) * Math.PI) / this.lengthTeeth
    }

    public updateDiameter = (diameter: number) => {

        this.length = diameter;
        this.width = diameter;
        this.computeTC()
    }

    constructor(diameter: number, height: number = 10, lengthTeeth: LT  = 1.5) {
        super('Gear');

        this.lengthTeeth = lengthTeeth;

        this.length = diameter;
        this.width = diameter;

        this.computeTC()
        this.height = height
    }
}
