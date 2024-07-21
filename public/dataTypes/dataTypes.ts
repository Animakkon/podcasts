export interface IPersonInfo {
    id: string,
    name: string,
    surname: string,
    lastName: string,
    dateBirth: string,
    image: string,
    data: {
        address?: Array<IAddress> | [],
        cards?: Array<IPayCardInfo> | [],
        credentialsToShow?: {
            login: string
        }
    }

}

export interface IAddress {

}

export interface IPayCardInfo {

}
