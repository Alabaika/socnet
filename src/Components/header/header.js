import classes from './header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img alt="" src="https://www.paperlesslabacademy.com/wp-content/uploads/2017/02/linkedin-logo-transparent.png" />
            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log Out</button></div>
                    :<NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header