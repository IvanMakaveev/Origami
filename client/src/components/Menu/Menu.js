import style from './Menu.module.css';
import MenuItem from './MenuItem'

const Menu = () => {
    const menuItems = [];
    for (let i = 1; i <= 11; i++) {
        menuItems.push(<MenuItem>Going to {i}</MenuItem>)
    }

    return (
        <aside className={style.menu}>
            {menuItems}
        </aside>
    );
}

export default Menu;
