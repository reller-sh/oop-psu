import {BaseItemObject} from "./BaseItemObject";
import fp from "lodash/fp";

export class Bearing extends BaseItemObject {

    private _internalDiameter: number | null = null
    private _externalDiameter: number | null = null
    private readonly _ballsCount = 10
    private wallThickness = 5

    constructor(ext_diameter = 0, int_diameter= 0, width= 0, count = null) {
        super('Bearing')
        if (ext_diameter > int_diameter + this.wallThickness) {
            this._externalDiameter = ext_diameter
            this._internalDiameter = int_diameter
            this._ballsCount = count || this._ballsCount
            this.width = width
        } else {
            throw new Error('Argument Error')
        }
    }

    private diameters = (): [number | null, number | null] => ([this._externalDiameter, this._internalDiameter])

    public setExtDiameter = (newVal: number): void => {
        this._externalDiameter = newVal + this._ballsCount > fp.toNumber(this._internalDiameter) ? newVal : this._externalDiameter
    }

    public setIntDiameter = (newVal: number): void => {
        this._internalDiameter = newVal + this._ballsCount < fp.toNumber(this._externalDiameter) ? newVal : this._internalDiameter
    }

    public diameterBalls = (): number => {
        // @ts-ignore
        return (this._externalDiameter - this._internalDiameter - this.wallThickness) / 2
    }

    public needBoxVolume = (): number => {
        // @ts-ignore
        return this.width * this._externalDiameter * this._externalDiameter
    }

}
