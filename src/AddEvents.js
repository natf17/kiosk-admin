import {Link} from 'react-router-dom';

function AddEvents() {
    return (
        <div>
            <div>What kind of event would you like to add?</div>
            <Link to="seasonal">Add an event to an existing season</Link>
            <Link to="other">Add a one-time event</Link>
        </div>
    );
}

export default AddEvents;