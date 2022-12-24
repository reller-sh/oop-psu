


export default abstract class BaseItemObject<ParentType, ChildType> {

    public name: string = 'No Name'
    public model: string = ''
    public width: number = 0
    public height: number = 0
    public length: number = 0
    public parent: ParentType | undefined
    public children: ChildType[] = []

    abstract addChildren: (newEl: ChildType) => void
    abstract info: () => void
    abstract parentInfo: () => void
    abstract allChildInfo: () => void

}
