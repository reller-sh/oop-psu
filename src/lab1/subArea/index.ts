import {Bearing} from "./Bearing";
import {Bolt} from "./Bolt";
import {Gear} from "./Gear";

export const subArea = () => {


    const ary: any = []

    for (let i = 0; i < 10; i++) {
        ary.push(new Bearing(16 + i, 10, 3, 4))
        ary.push(new Bolt(16 + i, 10, 3, 4))
        ary.push(new Gear(16 + i, 10, 2))
    }

    console.log(ary)

}
