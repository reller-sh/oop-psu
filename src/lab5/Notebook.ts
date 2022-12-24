import fp from "lodash/fp";

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
    ? Acc[number]
    : Enumerate<N, [...Acc, Acc['length']]>

type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>


type DateFormatted = `${IntRange<1, 31>}/${IntRange<1, 12>}/${number}`


export class Record {
    private _lastname: string = ''
    private _firstname: string = ''
    private _phoneNumber: string = ''
    private _birthDate: DateFormatted = '1/1/1980'


    get lastname(): string {
        return this._lastname
    }

    get firstname(): string {
        return this._firstname
    }

    get phoneNumber(): string {
        return this._phoneNumber
    }

    get birthDate(): DateFormatted {
        return this._birthDate
    }

    set lastname(val) {
        this._lastname = val
    }

    set firstname(val) {
        this._firstname = val
    }

    set phoneNumber(val) {
        if (val.length > 11) {
            throw Error('Phone number is invalid !')
        } else {
            this._phoneNumber = val
        }
    }

    set birthDate(val) {
        if (fp.toNumber(val.split('/')[2]) + 100 >= new Date().getFullYear()) {
            this._birthDate = val
        } else {
            throw Error('Invalid year !')
        }
    }


}

export class Notebook {

    private _lastname: string = ''
    private _initial: string = ''
    private _records: Record[] = []

    get lastname() {
        return this._lastname
    }

    get initial() {
        return this._initial
    }

    get records() {
        return this._records
    }

    set lastname(val) {
        this._lastname = val
    }

    set initial(val) {
        this._initial = val
    }

    set records(val) {
        this._records = val
    }

    public searchByName = (name: string): Record[] => {

        const res: Record[] = []

        this._records.forEach((nowRecord) => {
            if (fp.contains(name, nowRecord.firstname) || fp.contains(name, nowRecord.lastname)) {
                res.push(nowRecord)
            }
        })
        return res
    }

    public searchByPartNumber = (symbols: string) => {

        const res: Record[] = []

        this._records.forEach((nowRecord) => {
            if (fp.startsWith(symbols, nowRecord.phoneNumber)) {
                res.push(nowRecord)
            }
        })
        return res
    }


}
