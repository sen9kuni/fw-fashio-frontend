
import Navbar from "../components/Navbar"
import DashboardMenu from "../components/DashboardMenu"
import profile from '../assets/images/profile.jpg'

const Dashboard = () => {
    return(
        <>
            <Navbar />
            <div className="fash-dashboard-body d-flex">
                <DashboardMenu />
                <div className="fash-dashboard-content flex-fill">
                    <div className="fash-control-content h-fill bc-white d-flex flex-column gap-4">
                        <div className="d-flex flex-column gap-2">
                            <span className="fash-h4 fw-4">My Profile</span>
                            <span className="fash-h6 c-dark">Manage your profile information</span>
                        </div>
                        <span className="fash-line"></span>
                        <div className="d-flex justify-content-around">
                            <div className="d-flex flex-column gap-4">
                                <div className="fash-control-input d-flex gap-4 align-items-center justify-content-end">
                                    <span className="fash-h6 c-dark">Store Name</span>
                                    <input type="text" name="name" className="" placeholder="Store Name" />
                                </div>
                                <div className="fash-control-input d-flex gap-4 align-items-center justify-content-end">
                                    <span className="fash-h6 c-dark">Email</span>
                                    <input type="text" name="email" className="" placeholder="Email" />
                                </div>
                                <div className="fash-control-input d-flex gap-4 align-items-center justify-content-end">
                                    <span className="fash-h6 c-dark">Phone number</span>
                                    <input type="text" name="phone" className="" placeholder="Phone number" />
                                </div>
                                <div className="d-flex flex-column gap-3">
                                    <span className="fash-h6 c-dark">Store description</span>
                                    <textarea className="p-2 d-flex" placeholder="Description" name="comment" form="usrform"></textarea>
                                </div>
                            </div>
                            <span className="fash-line"></span>
                            <div className="d-flex flex-column gap-3 align-items-center justify-content-center">
                                <div className="fash-edit-profile">
                                    <img src={profile} alt='profile'/>
                                </div>
                                <button className="fash-button">Select image</button>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className="fash-button bc-primary c-secondary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard