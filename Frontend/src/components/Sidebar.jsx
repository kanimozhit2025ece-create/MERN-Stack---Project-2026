const Sidebar=() =>{

    return (
        <aside className="sidebar">

            <h3>MAIN MENU</h3>

            <ul>
                <li className="active">Dashboard</li>
                <li>Report an Issue</li>
                <li>All Issues</li>
                <li>Priority Issues</li>
                <li>Track Complaints</li>
                <li>Notifications</li>
                <li>Profile</li>
            </ul>

            <div className="sidebar-bottom">
                <p>Settings</p>
                <p>Logout</p>
            </div>

        </aside>
    );
}

export default Sidebar;