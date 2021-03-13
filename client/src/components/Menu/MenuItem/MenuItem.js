import style from './MenuItem.module.css';

const MenuItem = ({
    id,
    onClick,
    children,
    isSelected
}) => {
    let classes = [style.menuItem]

    if(isSelected){
        classes.push('menu-item-selected');
    }

    return (
        <li className={classes.join(' ')} >
            <a href="/#" className={style.menuListItem} onClick={() => onClick(id)}>
                {children}
            </a>
        </li>
    );
}

export default MenuItem;