import BaseItemObject from "./BaseItemObject";
import Mechanism from "./Mechanism";
import Detail from "./Detail";


export default class Node extends BaseItemObject <Mechanism, Detail>{
    allChildInfo = () => {
        this.children.map((item) => {
            item.info()
        })
    };

    info = () => {
        console.log('Info about part of product.')
        console.log('General: ', this.name, '(', this.model, ')')
        console.log('XYZ: ', this.width, 'X', this.height, 'X', this.length)
    };

    parentInfo = () => {
        this.parent?.info()
    };

    addChildren = (newEl: Detail) =>{
        newEl.parent = this

        this.children.push(newEl)
    }
}
