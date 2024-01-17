import {Link} from 'react-router-dom';

function EventFilters({setSearchParams}) {

    
    function addSearchParams(paramName, paramValue) {
        setSearchParams((params) => {
            params.set(paramName, paramValue);
            return params;
        });
    }

    // extracts the service year selected
    // and delegates to handleClickEvent to perform the update on searchParams
    function handleClickServiceYear(e) {
        const yearValue = e.target.value === "All" ? "ALL" : e.target.value;

        addSearchParams("serviceYear", yearValue);
    }

    function handleClickEventType(e) {
        const eventTypeValue = e.target.value === "All" ? "ALL" : e.target.value;

        addSearchParams("eventType", eventTypeValue);
    }

    
    return (
        <div className="container pt-4 pb-2">
            <div className="row">
                <div className="col-2 text-center filter-events-text">Filter events:</div>
                <div className="col-3 dropdown">
                    Service Year: <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown"> All </button>
                    <ul className="dropdown-menu">
                        <li><button className="filter-dropdown-button" onClick={handleClickServiceYear} value="ALL">All</button></li>
                        <li><button className="filter-dropdown-button" onClick={handleClickServiceYear} value="2024">2024</button></li>
                        <li><button className="filter-dropdown-button" onClick={handleClickServiceYear} value="2023">2023</button></li>
                        <li><button className="filter-dropdown-button" onClick={handleClickServiceYear} value="2022">2022</button></li>
                    </ul>
                </div>
                <div className="col-3 dropdown">
                    Event Type: <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown"> All </button>
                    <ul className="dropdown-menu">
                        <li><button className="filter-dropdown-button" onClick={handleClickEventType} value="ALL">All</button></li>
                        <li><button className="filter-dropdown-button" onClick={handleClickEventType} value="CACO">CACO</button></li>
                        <li><button className="filter-dropdown-button" onClick={handleClickEventType} value="CABR">CABR</button></li>
                        <li><button className="filter-dropdown-button" onClick={handleClickEventType} value="REG">REG</button></li>
                    </ul>
                </div>
            </div>
            
        </div>
    );

}

export default EventFilters;