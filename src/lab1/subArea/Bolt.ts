import {BaseItemObject} from "./BaseItemObject";

export class Bolt extends BaseItemObject{

    public carvingType: 'flat' | 'cross' | 'hexagon' | 'triangular' = 'flat'

    public _capWidth?: number;

    private _carvingDiameter?: number;
    private _carvingLength?: number;
    private _capDiameter: number;

    public setCarvingSizes = () => {

    }

    // @ts-ignore
    constructor(length, carvingDiameter, capDiameter, cw) {

        super('Bolt')
        this.length = length
        this._carvingDiameter = carvingDiameter
        this._capDiameter = capDiameter

        this._capWidth = cw
        this._carvingLength = length - cw
    }
}
