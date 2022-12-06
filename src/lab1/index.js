import Triangle from "./Triangle";


export const lab1 = () => {

    let triangles = []

    const t = (new Triangle(2,3, 90))

    console.log(t.toString())
    console.log(t.calculateBisector('bc'))
    console.log(t.calculateBisectorDelimiter('bc'))
    // console.log((new Triangle(2,2, 90)   ).c())
}
