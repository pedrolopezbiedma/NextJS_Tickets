import { Suspense } from "react"

// Components
import TicketList from "./TicketList"
import Loading from "../loading"

const TicketListPage = () => {
    return (
        <main>
            <nav>
                <div>
                    <h2>Tickets</h2>
                    <p><small>Currently open tickets</small></p>
                </div>
            </nav>
            <Suspense fallback={<Loading/>}>
                <TicketList />
		    </Suspense>
        </main>
    )
}

export default TicketListPage