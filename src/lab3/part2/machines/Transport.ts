
type MovingAround = 'air' | 'water' | 'ground'

export default class Transport {
    public model: string | undefined

    public type: MovingAround = 'ground'

    public classified: 'military' | 'civil' = 'civil'

    constructor(type: MovingAround, model?: string) {
        this.model = model
        this.type = type
    }
}
