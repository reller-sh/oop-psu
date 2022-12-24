
export default class Pilot {

    public type: string = 'all'

    public firstname: string | undefined
    public lastname: string | undefined

    constructor(fn: string, ln: string, type: string) {
        this.firstname = fn
        this.lastname = ln

        this.type = type
    }
}
