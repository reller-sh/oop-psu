import {IsoType, IsoValues} from "./IsoValues";


export class BaseItemObject {
    public width: number
    public height: number
    public length: number

    private _values: IsoValues


    constructor(type: IsoType) {
        this._values = new IsoValues()

        this.width = 0
        this.height = 0
        this.length = 0
        this._values.type = type
    }

    public minBoxVolume = () => {
        return this.width * this.height * this.length
    }

    public setIsoType = (type: IsoType) => {
        this._values.type = type
    }

    public setIsoSizes = (num: number) => {
        const newSizes = this._values.returnIsoValues(num)
        this.width = newSizes.width
        this.length = newSizes.length
        this.height = newSizes.height
    }

    public toJSON = () => {
        return JSON.stringify(this)
    }

}
