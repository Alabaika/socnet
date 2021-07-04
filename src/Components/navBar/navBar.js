import s from './navBar.module.css'
import { NavLink } from 'react-router-dom';
import Friends from "./Friends/friends";

const Navbar = (props) => {
    return (
        <div className={s.nav}>
            <nav >
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
                <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
            </nav>
            <Friends friendsData={props.state.friendsData}/>
        </div>

    )
}

export default Navbar