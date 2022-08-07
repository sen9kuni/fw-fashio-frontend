
import Navbar from "../components/Navbar"
import DashboardMenu from "../components/DashboardMenu"

const Dashboard = () => {
    return(
        <>
            <Navbar />
            <div className="fash-dashboard-body d-flex">
                <DashboardMenu />
                <div className="fash-dashboard-content flex-fill">
                    <div className="fash-control-content h-fill bc-white d-flex flex-column gap-4">
                        <div className="d-flex flex-column gap-2">
                            <span className="fash-h4 fw-4">My order</span>
                        </div>
                        <div className="d-flex flex-column gap-1">
                            <div className="d-flex w-fill justify-content-between">
                                <span className="fash-h5 fw-4 c-dark">All items</span>
                                <span className="fash-h5 fw-4 c-dark">Not yet paid</span>
                                <span className="fash-h5 fw-4 c-dark">Packed</span>
                                <span className="fash-h5 fw-4 c-dark">Sent</span>
                                <span className="fash-h5 fw-4 c-dark">Completed</span>
                                <span className="fash-h5 fw-4 c-dark">Order cancel</span>
                            </div>
                            <span className="fash-line"></span>
                        </div>
                        <div className="d-flex bc-ligth h-fill">
                            content
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard