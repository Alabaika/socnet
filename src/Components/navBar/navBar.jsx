import navclasses from './navBar.module.css'

const Navbar = () => {
    return (
        <nav className={navclasses.nav}>
            <a href="#11">Profile</a>
            <a href="#11">Messages</a>
            <a href="#11">News</a>
            <a href="#11">Music</a>
            <a href="#11">Settings</a>
        </nav>
    )
}

export default Navbar