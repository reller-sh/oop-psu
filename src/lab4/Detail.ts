import BaseItemObject from "./BaseItemObject";
import Node from './Node'

export default class Detail extends BaseItemObject<Node, undefined>{

    allChildInfo = () => {
        throw Error('This is atomic part of product !')
    };

    info = () => {
        console.log('Info about detail in product.')
        console.log('General: ', this.name, '(', this.model, ')')
        console.log('XYZ: ', this.width, 'X', this.height, 'X', this.length)
    };

    parentInfo = () => {
        this.parent?.info()
    };

    addChildren = () =>{
        throw Error("Can't create child for atomic part of product")
    }
}
