import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.date}>
                <span>Номер / Дата</span>
            </div>
            <div className={classes.author}>
                <span>Тип задания / Автор</span>
            </div>
            <div className={classes.terminal}>
                <span>Аккаунт / Терминал</span>
            </div>
            <div className={classes.status}>
                <span>Статус</span>
            </div>
        </header>
    )
}

export default Header