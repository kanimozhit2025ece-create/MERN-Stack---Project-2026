const IssueCard=({ title, location, category, priority, status })=> {

    return (
        <div className="issue-card">

            <div className="issue-header">
                <h3>{title}</h3>

                <p className={`priority ${priority.toLowerCase()}`}>
                    {priority}
                </p>
            </div>

            <p>Location: {location}</p>

            <p>Category: {category}</p>

            <div className="issue-footer">
                <p>Status: {status}</p>

                <button>View Details</button>
            </div>

        </div>
    );
}

export default IssueCard;