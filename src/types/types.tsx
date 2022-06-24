export type Item = {
    id: number,
    oguid: string,
    status: string,
    order_type: {
        name: string,
        oguid: string
    },
    terminal: {
        name: string,
        oguid: string
    },
    account: {
        name: string,
        oguid: string
    },
    created_user: {
        surname: string,
        name: string,
        patronymic: string,
        oguid: string
    },
    created_date: number
}

