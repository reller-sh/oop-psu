import fp from "lodash/fp";
import prompt from 'prompt-sync';


const newPrompt = prompt({sigint: true})


import Triangle from "./Triangle";


export const lab1 = () => {

    let answer = 0;
    let triangles = []


    while (answer !== -1) {
        switch (answer){
            case 0: {
                const aSide = newPrompt("Input a side of triangle: ")
                const bSide = newPrompt("Input b side of triangle: ")
                const abAngle = newPrompt("Input aVb angle of triangle: ")
                try {
                    triangles.push(new Triangle(fp.toNumber(aSide), fp.toNumber(bSide), fp.toNumber(abAngle)))
                } catch ({message}) {
                    console.log(message)
                }
                break
            }
            case 1: {
                const selectedInput = newPrompt(`Input index of triangle (${triangles.length}): `)
                const methodInputs = newPrompt(`input full name of method to call: `)
                const methodArgsInput = newPrompt(`input arguments for method (separated by comma): `)

                // @ts-ignore
                console.log(triangles[fp.toInteger(selectedInput)][methodInputs](...methodArgsInput.split(',')))
            }
        }

        answer = fp.toNumber(newPrompt(`
Put command 
 -1: exit;
 0: continue input triangles;
 1: call method(calculateBisector, calculateBisectorDelimiter) for one of Triangles
`))
    }
}
