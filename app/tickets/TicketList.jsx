const getTickets = async () => {
    const response = await fetch('http://localhost:3005/tickets',
        { next: 
            { revalidate: 0 }
        }
    )
    const result = await response.json()

    return result;
}

const TicketList = async () => {
    const tickets = await getTickets();

    return (
        <>
            { tickets && tickets.length === 0 && (
                <p className="text-center">There are no open tickets</p>
            )}
            { tickets && tickets.map((ticket) => (
                <div className="card my-5" key={ticket.id}>
                    <h3>{ticket.title}</h3>
                    <p>{ticket.body.slice(0, 200) + '...'}</p>
                    <div className={`pill ${ ticket.priority }`}>
                        { ticket.priority} priority
                    </div>
                </div>
            ))}
        </>
    )
}

export default TicketList