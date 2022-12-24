import Product from "./Product";
import Mechanism from "./Mechanism";


export const lab4 = () => {



    const someProduct = new Product()

    someProduct.name = 'Product #1'


    someProduct.width = 200
    someProduct.length = 100
    someProduct.height = 134.4

    const oneOfMec = new Mechanism()

    oneOfMec.width = 12
    oneOfMec.length = 12
    oneOfMec.height = 12
    oneOfMec.name = 'Some mechanism #1'

    someProduct.addChildren(oneOfMec)


    someProduct.info()
    someProduct.allChildInfo()

    someProduct.children[0].parentInfo()


    // someProduct.parentInfo()
}
