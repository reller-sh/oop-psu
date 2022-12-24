import Rectangle from "./part1/Rectangle";
import Pyramid from "./part1/Pyramid";
import fp from "lodash/fp";


export const lab3 = () => {

    const argv = fp.toString(fp.find(fp.startsWith('-a='), process.argv))
    const aVal = fp.toNumber(fp.replace('-a=', '', argv))

    console.log(aVal)
    const minArea = [125, 2, 3, 4, 5, 6, 12, 7].reduce((previousValue, currentValue) => {

        const newArea = new Rectangle(currentValue).area()

        return newArea < previousValue ? newArea : previousValue
    }, Infinity)

    const counterPyramids = [[125, 1], [2, 2], [3, 22], [4, 45], [5, 22], [6, 2]].reduce((prev, curr) => {

        const newArea = new Pyramid(curr[0], curr[1])

        return newArea.height > aVal ? prev + 1 : prev
    }, 0)


    console.log('Minimal area: ', minArea)
    console.log('Pyramids with height more then arg a: ', counterPyramids)


}
