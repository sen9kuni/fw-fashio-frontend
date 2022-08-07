
import Navbar from "../components/Navbar"
import DashboardMenuSeller from "../components/DashboardMenuSeller"
import { AiOutlineSearch } from "react-icons/ai";

const Dashboard = () => {
    return(
        <>
            <Navbar />
            <div className="fash-dashboard-body d-flex">
                <DashboardMenuSeller />
                <div className="fash-dashboard-content flex-fill">
                    <div className="fash-control-content h-fill bc-white d-flex flex-column gap-4">
                        <div className="d-flex flex-column gap-2">
                            <span className="fash-h4 fw-4">My order</span>
                        </div>
                        <div className="d-flex flex-column gap-1">
                            <div className="d-flex w-fill gap-5">
                                <span className="fash-h5 fw-4 c-dark">All items</span>
                                <span className="fash-h5 fw-4 c-dark">Sould out</span>
                                <span className="fash-h5 fw-4 c-dark">Archived</span>
                            </div>
                            <span className="fash-line"></span>
                        </div>
                        <div className="fash-search d-flex justify-content-between align-items-center">
                            <input type="text" name="search" className="w-fill" placeholder="Search" />
                            <AiOutlineSearch className="fash-h2 c-dark" />
                        </div>
                        <div className="d-flex flex-fill flex-column">
                            <div className="d-flex bc-ligth px-5 py-3">
                                <div className="d-flex justify-content-between w-fill">
                                    <span className="fash-h5 fw-4 c-dark">Product name</span>
                                    <div className="d-flex gap-5">
                                        <span className="fash-h5 fw-4 c-dark">Price</span>
                                        <span className="fash-h5 fw-4 c-dark">Stock</span>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex h-fill flex-fill bc-dark">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard