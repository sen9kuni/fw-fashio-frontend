
import Navbar from "../components/Navbar"
import profile from '../assets/images/profile.jpg'
import { AiOutlineSend } from "react-icons/ai";

const Dashboard = () => {
    return(
        <>
            <Navbar />
            <div className="fash-dashboard-body d-flex">
                <div className="fash-dashboard-content flex-fill">
                    <div className="fash-control-content h-fill d-flex gap-4 border-0 p-0">
                        <div className="fash-chat bc-white">
                            <div className="fash-chat-title">
                                <span className="fash-h3 fw-5">Chat</span>
                            </div>
                            <div className="fash-chat-friends">
                                <div className="fash-control-friends d-flex gap-2 align-items-center">
                                    <div className="fash-nav-profile">
                                        <img src={profile} alt='profile'/>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <span className="fash-h6 fw-4">Jonas adam</span>
                                        <span className="fash-h8 fw-3 c-dark">Permisi kak, mau tanya...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fash-chat-panel d-flex flex-fill flex-column">
                            <div>
                                <div className="fash-chat-title bc-white">
                                    <span className="fash-h3 fw-5">Chat</span>
                                </div>
                            </div>
                            <div className="fash-chat-body d-flex flex-column gap-3">
                                <div className="d-flex flex-fill w-fill">
                                    body
                                </div>
                                <div className="d-flex gap-2">
                                    <div className="fash-input-chat d-flex justify-content-between align-items-center">
                                        <input type="text" name="message" className="w-fill" placeholder="type message..." />
                                    </div>
                                    <div className="fash-chat-send d-flex align-items-center justify-content-center"><AiOutlineSend className="fash-h3 c-secondary" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard