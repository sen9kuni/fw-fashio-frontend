
import Navbar from "../components/Navbar"
import DashboardMenu from "../components/DashboardMenu"
import profile from '../assets/images/profile.jpg'
import ColorPicker from "../components/ColorPicker"

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
                                    <span className="fash-h6 c-dark">Name</span>
                                    <input type="text" name="name" className="" placeholder="Name" />
                                </div>
                                <div className="fash-control-input d-flex gap-4 align-items-center justify-content-end">
                                    <span className="fash-h6 c-dark">Email</span>
                                    <input type="text" name="email" className="" placeholder="Email" />
                                </div>
                                <div className="fash-control-input d-flex gap-4 align-items-center justify-content-end">
                                    <span className="fash-h6 c-dark">Phone number</span>
                                    <input type="text" name="phone" className="" placeholder="Phone number" />
                                </div>
                                <div className="fash-control-input d-flex gap-4 align-items-center justify-content-end">
                                    <span className="fash-h6 c-dark">Gender</span>
                                    <div className="d-flex fash-control-input-radio align-items-center gap-5">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="radio" name="male" />
                                            <span className="fash-h6 c-dark">Laki-laki</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="radio" name="female" />
                                            <span className="fash-h6 c-dark">Perempuan</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="fash-control-input d-flex gap-4 align-items-center justify-content-end">
                                    <span className="fash-h6 c-dark">Date of birth</span>
                                    <div className="d-flex fash-control-input-radio align-items-center justify-content-between">
                                        <select name="cars" id="cars">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                        </select>
                                        <select name="cars" id="cars">
                                            <option value="januari">Januari</option>
                                            <option value="februari">Februari</option>
                                            <option value="maret">Maret</option>
                                            <option value="april">April</option>
                                            <option value="mei">Mei</option>
                                            <option value="juni">Juni</option>
                                            <option value="juli">Juli</option>
                                            <option value="agustus">Agustus</option>
                                            <option value="september">September</option>
                                            <option value="oktober">Oktober</option>
                                            <option value="november">November</option>
                                            <option value="desember">Desember</option>
                                        </select>
                                        <select name="cars" id="cars">
                                            <option value="1990">1990</option>
                                        </select>
                                    </div>
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
                        <ColorPicker />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard