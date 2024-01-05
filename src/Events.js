import  {getEventsAndSeasons } from './util/api.js'

function Events() {


    return (
        <div>
            <h2>Events</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Start Date</th>
                        <th scope="col">End Date</th>
                        <th scope="col">Event Type</th>
                        <th scope="col">Event Name</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                {}
            </table>
        </div>
    );

}

export default Events;