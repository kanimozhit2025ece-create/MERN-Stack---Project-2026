import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className="navbar">

            <div className="nav-logo">
                <h2>PublicInfra</h2>
            </div>

            <div className="nav-menu">
                <Link to="/departments">Department Management</Link>
                <Link to="/categories">Issue Categories</Link>
                <Link to="/settings">Settings</Link>
                <Link to="/logout">Logout</Link>
            </div>

            <div className="nav-user">
                <p>Welcome, User</p>

                <div className="user-avatar">
                    U
                </div>
            </div>

        </nav>
    );
};

export default Navbar;