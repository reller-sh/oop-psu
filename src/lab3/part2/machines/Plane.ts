import Transport from "./Transport";


type PlaneConstructorInput = {
    model?: string
    lc: number
}

export default class Plane extends Transport{

    public loadCapacity: number = 100
    public reqPilotsNumber: number = 2


    constructor({model, lc}: PlaneConstructorInput) {

        super('air', model)

        this.loadCapacity = lc

    }
}
