import fp from "lodash/fp";


type StringVerseConstructArgs = {src: number[]} | number[]


export default class StringVerse {

    private _source: number[] = []


    public setSrc = (newSrc: number[]) => {
        console.log('set new array')
        this._source = [...newSrc]
    }

    public update = (addValue: number) => {
        console.log('add value to array')
        this._source.push(addValue)
        if (this._source.length % 3 === 0) {
            const oldSource = this._source
            this._source = []
            oldSource.map((nowVal) => {

                nowVal % 3 === 0 || this._source.push(nowVal)

            })
        }
    }

    public print = () => {
        console.log('called print method')
        console.log(this._source.join(', '))
    }

    constructor(args?: StringVerseConstructArgs) {

        console.log(args)
        if (fp.isArray(args)) {
            console.log('called object constructor')
            this._source = args
        }
        else if (fp.isObject(args)) {
            console.log('called array constructor')
            this._source = args.src
        } else {
            console.log('called non params constructor')
        }
    }

    public destroy = () => {
        console.log('called destructor')

        this._source = []
    }

}
