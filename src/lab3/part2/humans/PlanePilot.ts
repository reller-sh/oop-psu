import Pilot from "./Pilot";

export default class PlanePilot extends Pilot{

    public purpose: 'civil' | 'military' = 'civil'

    constructor(fn: string, ln: string, purpose: 'civil' | 'military') {
        super(fn, ln, 'plane')
        this.purpose = purpose
    }
}
