import StringVerse from "./StringVerse";


export const lab2 = () => {

    let sv = new StringVerse()

    let sv1 = new StringVerse([1,2,3,4,5,6,7])

    let sv2 = new StringVerse({src: [1,2,3,4,5,6]})

    sv1.print()
    sv2.print()

    sv1.update(2)
    sv2.update(2)

    sv1.print()
    sv2.print()

    sv.print()

    sv.destroy()
    sv1.destroy()
    sv2.destroy()

    // let none: number = 12

}

