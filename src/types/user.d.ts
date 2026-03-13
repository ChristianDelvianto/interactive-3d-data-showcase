export interface UserCSV {
    'Name': string,
    'Photo': string,
    'Age': string,
    'Country': string,
    'Interest': string,
    'Net Worth': string,
}

export interface UserObject {
    id: number,
    name: string | '',
    age: number | 0,
    interest: string | '',
    country: string | '',
    photo: string | '',
    net_worth: number | 0
}
