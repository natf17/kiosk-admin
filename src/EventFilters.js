import {Link} from 'react-router-dom';

function EventFilters() {
    return (
        <div className="container pt-4 pb-2">
            <div className="row">
                <div className="col-2 text-center filter-events-text">Filter events:</div>
                <div className="col-3 dropdown">
                    Service Year: <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown"> All </button>
                    <ul className="dropdown-menu">
                        <li><Link to="?year=ALL">All</Link></li>
                        <li><Link to="?year=2024">2024</Link></li>
                        <li><Link to="?year=2023">2023</Link></li>
                        <li><Link to="?year=2022">2022</Link></li>
                    </ul>
                </div>
                <div className="col-3 dropdown">
                    Event Type: <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown"> All </button>
                    <ul className="dropdown-menu">
                        <li><Link to="?EventType=ALL">All</Link></li>
                        <li><Link to="?eventType=CACO">CACO</Link></li>
                        <li><Link to="?eventType=CABR">CABR</Link></li>
                        <li><Link to="?eventType=REG">REG</Link></li>
                    </ul>
                </div>
            </div>
            
        </div>
    );

}

export default EventFilters;