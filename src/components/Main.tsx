import { Item } from "../types/types";
import classes from './Main.module.css'
import { useState } from "react";
import { Link } from "react-router-dom";

import usePagination from "../hooks/usePagination";



const DATA: Array<Item> = require('../data.json');

const Main = () => {

    const [count, setCount] = useState(25)

    const {
        firstContentIndex,
        lastContentIndex,
        nextPage,
        prevPage,
        page,
        setPage,
        totalPages,
    } = usePagination({
        contentPerPage: count,
        count: DATA.length,
    });

    const onChangeSelectedHadnler = (event: any) => {
        setCount(event.target.value)
        setPage(1);
    }

    const STATUS_MAP: any = {
        'started': {
            class: 'started',
            label: 'Выполняется'
        },
        'new': {
            class: 'new',
            label: 'Новый'
        },
        'assigned_to': {
            class: 'assignedto',
            label: 'Назначенный'
        },
        'completed': {
            class: 'completed',
            label: 'Завершенный'
        },
        'declined': {
            class: 'declined',
            label: 'Отмененный'
        }
    }

    const getDate = (num: number) => {
        return (new Date(num)).toLocaleString().slice(0, 17);
    }


    return (
        <div>
            <main className={classes.main}>
                {DATA.slice(firstContentIndex, lastContentIndex).map((item: Item, index: number) => (
                    <Link to={`/main/${item.id}`}>
                    <div className={classes.container} key={index}>
                        <div className={classes.dateContainer}>
                            <span>№{item.id}</span>
                            <span>{getDate(item.created_date)}</span>
                        </div>
                        <div className={classes.authContainer}>
                            <span>{item.order_type.name}</span>
                            <span>{item.created_user.surname + ' ' + item.created_user.name.slice(0, 1) + '.' + item.created_user.patronymic.slice(0, 1) + '.'}</span>
                        </div>
                        <div className={classes.terminalContainer}>
                            <span>{item.account.name}</span>
                            <span>{item.terminal.name}</span>
                        </div>
                        <div className={classes.statusContainer + ' ' + classes[STATUS_MAP[item.status]?.class]}>
                            <span>{STATUS_MAP[item.status]?.label}</span>
                        </div>
                    </div>
                    </Link>
                ))
                }
            </main>
            <footer>
                <div className={classes.pagination}>
                    <p className={classes.text}>
                        {page}/{totalPages}
                    </p>
                    <button onClick={prevPage} className={classes.page}>
                        &larr;
                    </button>
                    {/* @ts-ignore */}
                    {[...Array(totalPages).keys()].map((el) => (
                        <button
                            onClick={() => setPage(el + 1)}
                            key={el}
                            className={classes.page + ' ' + ((page === el + 1) ? classes.active : '')}
                        >
                            {el + 1}
                        </button>
                    ))}
                    <button onClick={nextPage} className={classes.page}>
                        &rarr;
                    </button>
                    по
                    <select className={classes.select} onChange={onChangeSelectedHadnler}>
                        <option>10</option>
                        <option>15</option>
                        <option selected>25</option>
                        <option>50</option>
                    </select>
                    записей
                </div>
            </footer>
        </div >
    )
}

export default Main