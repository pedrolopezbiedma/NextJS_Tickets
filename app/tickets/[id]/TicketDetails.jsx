const getTicket = async (id) => {
    const response = await fetch(`http://localhost:3005/tickets/${id}`)
    const result = await response.json()

    return result
}

const TicketDetails = async ({ ticketId }) => {
    const ticket = await getTicket(ticketId)
    return (
        <>
            <nav>
                <h2>Ticket Details</h2>
            </nav>
            <div className="card">
                <h3>{ticket.title}</h3>
                <small>Created by: {ticket.user_email}</small>
                <p>{ticket.body}</p>
                <div className={`pill ${ ticket.priority }`}>
                        { ticket.priority} priority
                    </div>
            </div>
        </>
    )
}

export default TicketDetails