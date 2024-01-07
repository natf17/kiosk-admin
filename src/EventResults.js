import SingleEventActions from './SingleEventActions.js';

function EventResults({eventData}) {

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Start Date</th>
                        <th scope="col">End Date</th>
                        <th scope="col">Event Type</th>
                        <th scope="col">Event Name</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {eventData.map((event) => {
                        return (
                            <tr>
                                <th scope="row">{event.id}</th>
                                <td>{event.startDate}</td>
                                <td>Coming soon</td>
                                <td>{event.seasonalType}</td>
                                <td>{event.event_season.theme}</td>
                                <td><SingleEventActions/></td>
                            </tr>
                        );
                    })}
                </tbody>

            </table>
        </div>
    );


}

export default EventResults;