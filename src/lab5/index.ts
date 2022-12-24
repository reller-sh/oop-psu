import {Notebook, Record} from "./Notebook";

export const lab5 = () => {


    const nb = new Notebook()

    nb.lastname = 'Shkerdin'
    nb.initial = 'V.D.'


    const recs = [
        new Record(),
        new Record(),
        new Record(),
    ]

    recs[0].phoneNumber = '12134'
    recs[1].phoneNumber = '786821'
    recs[2].phoneNumber = '454545'

    recs[0].lastname = 'Kravec'
    recs[1].lastname = 'Ledov'
    recs[2].lastname = 'Knyazev'

    recs[0].firstname = 'Leonid'
    recs[1].firstname = 'Dmitriy'
    recs[2].firstname = 'Aleksey'

    recs[0].birthDate = '1/2/2012'
    recs[1].birthDate = '2/4/2015'
    recs[2].birthDate = '3/2/2222'


    nb.records = recs

    console.log(nb.searchByPartNumber('454'))
    console.log(nb.searchByName('Leon'))


}
