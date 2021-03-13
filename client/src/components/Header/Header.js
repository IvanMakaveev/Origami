import style from './Header.module.css';
import NavigationItem from './NavigationItem';

const Header = () => {
    const listItems = [];
    for (let i = 1; i <= 11; i++) {
        listItems.push(<NavigationItem>Going to {i}</NavigationItem>)
    }

    return (
        <nav className={style.navigation}>
            <ul>
                <li className={style.listItem}><img src="white-origami-bird.png" alt="White Origami" /></li>
                {listItems}
            </ul>
        </nav>
    );
};

export default Header;