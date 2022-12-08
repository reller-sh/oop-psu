import fp from 'lodash/fp'

export default class Triangle {

    // private fields
    private _a = .0
    private _b = .0
    private _c = .0
    private _angles = {
        ab: .0,
        bc: .0,
        ca: .0,
    }

    constructor(a, b, angle) {

        if (
            !fp.isNumber(a)
            || !fp.isNumber(b)
            || !fp.isNumber(angle)
            || a <= 0
            || b <= 0
            || angle <= 0
            || angle >= 180
            || isNaN(a)
            || isNaN(b)
            || isNaN(angle)
        ) {
            throw new Error('Argument Error')
        }

        this._a = a
        this._b = b
        this._c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2) - 2 * this._b * this._c * Math.cos(this.toRadians(angle)))

        this.calculateAngles()
    }

    // getters
    a = () => (this._a)
    b = () => (this._b)
    c = () => (this._c)


    calculateAngles() {
        this._angles.ab = Math.acos((Math.pow(this._a, 2) + Math.pow(this._b, 2) - Math.pow(this._c, 2)) / (2 * this._a * this._b))
        this._angles.bc = Math.acos((Math.pow(this._b, 2) + Math.pow(this._c, 2) - Math.pow(this._a, 2)) / (2 * this._b * this._c))
        this._angles.ca = Math.acos((Math.pow(this._a, 2) + Math.pow(this._c, 2) - Math.pow(this._b, 2)) / (2 * this._a * this._c))
    }

    calculateBisector = (angleName) => {
        const normalizedName = (fp.orderBy(null,'asc', angleName.split(''))).join('')
        const [a, b] = normalizedName
        return (2 * this[a]() * this[b]() * Math.cos(this._angles[normalizedName] / 2)) / (this[a]() + this[b]())
    }

    calculateBisectorDelimiter = (angleName) => {
        const normalizedName = (fp.orderBy(null,'asc', angleName.split(''))).join('')
        const [a, b] = normalizedName
        const lengthPow = Math.pow(this.calculateBisector(normalizedName), 2)

        return lengthPow - (this[a]() * this[b]())
    }

    increaseAngle = (k) => {

        this._c = Math.sqrt(Math.pow(this._a, 2) + Math.pow(this._b, 2) - 2 * this._b * this._c * Math.cos(this._angles.ab * k))

        this.calculateAngles()
    }


    toDegrees(angle) {
        return Math.round(angle * (180 / Math.PI));
    }

    toRadians(angle) {
        return angle * (Math.PI / 180);
    }

    toString() {
        return `
Triangle
    side: a=${this.a()}; b=${this.b()}; c=${this.c()};
    angles: aVb=${this.toDegrees(this._angles.ab)}; bVc=${this.toDegrees(this._angles.bc)}; cVa=${this.toDegrees(this._angles.ca)};  
`
    }
}
