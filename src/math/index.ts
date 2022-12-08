import fp from 'lodash/fp'

const positions = [
    [1, 1],
    [6, 2],
    [3, 7],
    [5, 5],
    [12, 10],
    [10, 13],
    [13, 15],
    [15, 13],
    [18, 1],
    [22, 2],
    [18, 4],
    [22, 5]
]

export const deltaPositions = () => {
    let delta = []
    positions.forEach((pos, index) => {
        const [x1, y1] = pos
        delta = [...delta, positions.map((posSecond, indexSecond) => {
            const [x2, y2] = posSecond

            if (index === indexSecond)
                return null

            return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2))
        })]
    })
    return delta
}

export const watchMatrix = (power: number = 2) => {
    let dps = deltaPositions();
    let tree: any = {0: {}}
    let excluded: number[] = [0]
    let row: number[] = dps[0]
    let counter: number = dps.length - 1
    let min: number[] = [Infinity]
    let path: string = '0'

    while (counter > 1) {

        for (let loop = 0; loop < power; loop++) {


            const minimal = row.reduce((prev, val, key) => (
                (prev[0] > val && val !== null && !fp.includes(key, excluded))
                    ? [val, key]
                    : prev
            ), [Infinity]);

            if (minimal[1]) {
                excluded.push(minimal[1])
                tree = fp.set(`${path}.${minimal[1]}`, {}, tree)
            }
            if (min[0] > minimal[0])
                min = minimal

        }
        path += `.${min[1]}`
        row = dps[min[1]]
        min = [Infinity]
        counter -= power
    }

    return tree
}
