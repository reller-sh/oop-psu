import BaseItemObject from "./BaseItemObject";
import Product from "./Product";
import Node from './Node'


export default class Mechanism extends BaseItemObject<Product, Node> {


    addNode = (newEl: Node) => {

        if (this.children.length > 5) {
            throw Error('No available places for mechanism')
        } else {
            this.children.push(newEl)
        }
    }

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

    addChildren = (newEl: Node) =>{
        newEl.parent = this

        this.children.push(newEl)
    }

}
