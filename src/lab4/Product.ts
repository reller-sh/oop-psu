import BaseItemObject from "./BaseItemObject";
import Mechanism from "./Mechanism";


export default class Product extends BaseItemObject<undefined, Mechanism>{
    allChildInfo = () => {
        this.children.map((item) => {
            item.info()
        })
    };

    info = () => {
        console.log('Info about product.')
        console.log('General: ', this.name, ' ', this.model)
        console.log('XYZ: ', this.width, 'X', this.height, 'X', this.length)
    };

    parentInfo = () => {
        throw Error('Does not exists on root class!')
    };

    addChildren = (newEl: Mechanism) =>{
        newEl.parent = this

        this.children.push(newEl)
    }


}
