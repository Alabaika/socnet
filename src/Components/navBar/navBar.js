import s from './navBar.module.css'
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
        </nav>
    )
}

export default Navbar