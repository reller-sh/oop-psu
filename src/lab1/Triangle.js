export default class Triangle {

    // private fields
    #a = .0
    #b = .0
    #c = .0
    #angles = {
        ab: .0,
        bc: .0,
        ca: .0,
    }

    constructor(a, b, angle) {
        this.#a = a
        this.#b = b
        this.#c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2) - 2 * this.#b * this.#c * Math.cos(this.toRadians(angle)))

        this.calculateAngles()
    }

    // getters
    a = () => (this.#a)
    b = () => (this.#b)
    c = () => (this.#c)


    calculateAngles() {
        this.#angles.ab = Math.acos((Math.pow(this.#a, 2) + Math.pow(this.#b, 2) - Math.pow(this.#c, 2)) / (2 * this.#a * this.#b))
        this.#angles.bc = Math.acos((Math.pow(this.#b, 2) + Math.pow(this.#c, 2) - Math.pow(this.#a, 2)) / (2 * this.#b * this.#c))
        this.#angles.ca = Math.acos((Math.pow(this.#a, 2) + Math.pow(this.#c, 2) - Math.pow(this.#b, 2)) / (2 * this.#a * this.#c))
    }

    calculateBisector = (angleName) => {
        const [a, b] = angleName.split('')
        return (2 * this[a]() * this[b]() * Math.cos(this.#angles[angleName] / 2)) / (this[a]() + this[b]())
    }

    calculateBisectorDelimiter = (angleName) => {
        const lengthPow = Math.pow(this.calculateBisector(angleName), 2)
        const [a, b] = angleName.split('')

        return lengthPow - (this[a]() * this[b]())

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
    angles: aVb=${this.toDegrees(this.#angles.ab)}; bVc=${this.toDegrees(this.#angles.bc)}; cVa=${this.toDegrees(this.#angles.ca)};  
`
    }
}
