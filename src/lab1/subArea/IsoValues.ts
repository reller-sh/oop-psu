import fp from "lodash/fp";

export type IsoType = 'Bolt' | 'Bearing' | 'Gear' | 'Nut'

export type ISize = Record<IsoType, Record<number, number>>


export class IsoValues {

    public type: IsoType;

    private _width: ISize = {
        Bolt: {
            4: 4, 8: 8, 10: 10
        },
        Bearing: {
            4: 6, 8: 10, 10: 12
        },
        Gear: {
            4: 4, 8: 8, 10: 10
        },
        Nut: {
            4: 3, 8: 3, 10: 4
        },
    };

    private _height: ISize = {
        Bolt: {
            4: 4, 8: 8, 10: 10
        },
        Bearing: {
            4: 6, 8: 10, 10: 12
        },
        Gear: {
            4: 4, 8: 8, 10: 10
        },
        Nut: {
            4: 3, 8: 3, 10: 4
        },
    };

    private _length: ISize = {
        Bolt: {
            4: 10, 8: 10, 10: 12
        },
        Bearing: {
            4: 3, 8: 3, 10: 4
        },
        Gear: {
            4: 3, 8: 3, 10: 4
        },
        Nut: {
            4: 3, 8: 3, 10: 4
        },
    };


    constructor(type?: IsoType) {
        if (type) {
            this.type = type
        }
    }

    public returnIsoValues = (size: number) => {
        return {
            width: this._width[this.type][size],
            length: this._length[this.type][size],
            height: this._height[this.type][size]
        }
    }

    public deltaSizes = (sizeFirst: number, sizeSecond: number) => {
        return (this._width[this.type][sizeSecond] *
                this._width[this.type][sizeSecond] *
                this._width[this.type][sizeSecond]) -
            (this._width[this.type][sizeFirst] *
                this._width[this.type][sizeFirst] *
                this._width[this.type][sizeFirst])
    }
    public checkSizes = (inputSizes: Record<'width' | 'height' | 'length', number>) => {
        const _widths = this._width[this.type]
        const _heights = this._height[this.type]
        const _lengths = this._length[this.type]

        const findWidthIsoNumber = fp.findKey(inputSizes.width, _widths)

        return (
            _heights[findWidthIsoNumber] === inputSizes.height
            && _lengths[findWidthIsoNumber] === inputSizes.length
        )
    }
}
