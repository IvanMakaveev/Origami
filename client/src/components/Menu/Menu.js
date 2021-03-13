import { useState } from 'react';
import style from './Menu.module.css';
import MenuItem from './MenuItem'

const Menu = ({
    onMenuItemClick
}) => {
    const [currentItem, setCurrentItem] = useState();
    const menuItems = [];
    const menuItemClickHandler = (id) => {
        setCurrentItem(id);
        onMenuItemClick(id);
    };

    for (let i = 1; i <= 11; i++) {
        menuItems.push(
            <MenuItem
                key={i}
                id={i}
                isSelected={i == currentItem}
                onClick={menuItemClickHandler}
            >
                Going to {i}
            </MenuItem>)
    }

    return (
        <aside className={style.menu}>
            {menuItems}
        </aside>
    );
}

export default Menu;
