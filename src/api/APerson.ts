import { IPersonInfo } from "../../public/dataTypes/dataTypes.ts";

export function getPersonInfo(value: string): Promise<IPersonInfo> {
    return new Promise((resolve) => {
        if (value === '1') {
            resolve(FIRST)
        } else {
            resolve(SECOND)
        }
    })
}

const FIRST: IPersonInfo = {
    id: '1',
    name: 'Олег',
    surname: 'Разутчиков',
    lastName: 'Олегович',
    dateBirth: '16.05.1986',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMlg5oh_-aZTbY88facOyXmgaKy03z3qaOfw&s',
    data: {
        address: [],
        cards: [],
        credetialsToShow: {
            login: '1'
        }
    }

}

const SECOND: IPersonInfo = {
    id: '2',
    name: 'Абсолютно',
    surname: 'Другой',
    lastName: 'Пользователь',
    dateBirth: '01.01.2001',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMlg5oh_-aZTbY88facOyXmgaKy03z3qaOfw&s',
    data: {
        address: [],
        cards: [],
        credentialsToShow: {
            login: ''
        }
    }

}
