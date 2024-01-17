import {Outlet, Link} from 'react-router-dom';

function Layout() {

    return (
        <div>
            <div className="topbar-container">
                <div className="topbar-name"><Link to="/">QAH Kiosk Admin</Link></div>
            </div>
            <div className="navbar-container">
                <nav>
                    <ul>
                        <li className="nav-item"><Link to="/">Home</Link></li>
                        <li className="nav-item">
                            <div className="nav-item-header">Single events</div>
                            <div className="nav-item-link-container"><Link to="/events">Edit an event</Link></div>
                            <div className="nav-item-link-container"><Link to="/events/add">Add an event</Link></div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-item-header">Manage event seasons</div>
                            <div className="nav-item-link-container"><Link to="/events">Edit a season</Link></div>
                            <div className="nav-item-link-container"><Link to="/events">Add a season</Link></div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-item-header">Manage pages</div>
                            <div className="nav-item-link-container"><Link to="/events">Page1</Link></div>
                            <div className="nav-item-link-container"><Link to="/events">Page2</Link></div>
                        </li>
                    </ul>
                </nav>

            </div>
            <div className='page-content-container'>
                <Outlet /> 
            </div>
        </div>
    );
}

export default Layout;