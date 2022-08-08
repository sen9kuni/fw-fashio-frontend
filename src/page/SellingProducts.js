
import Navbar from "../components/Navbar"
import DashboardMenuSeller from "../components/DashboardMenuSeller"
import { Button } from 'react-bootstrap'
import { Formik } from 'formik'

const Dashboard = () => {
    return(
        <>
            <Navbar />
            <div className="fash-dashboard-body d-flex">
                <DashboardMenuSeller />
                <Formik initialValues={{name: '', price: '', stock: '',condition: '',description:''}}>
                    <div className="fash-dashboard-content flex-fill overflow-auto d-flex flex-column gap-5">
                        <div className="fash-control-content bc-white d-flex flex-column gap-4 border-0">
                            <div className="d-flex flex-column gap-2">
                                <span className="fash-h4 fw-4">Inventory</span>
                            </div>
                            <span className="fash-line"></span>
                            <div className="fash-control-input d-flex flex-column gap-2">
                                <span className="fash-h6 c-dark">Name</span>
                                <input type="text" name="name" className="" placeholder="" />
                            </div>
                        </div>

                        <div className="fash-control-content bc-white d-flex flex-column gap-4 border-0">
                            <div className="d-flex flex-column gap-2">
                                <span className="fash-h4 fw-4">Item details</span>
                            </div>
                            <span className="fash-line"></span>
                            <div className="fash-control-input d-flex flex-column gap-2">
                                <span className="fash-h6 c-dark">Unit price</span>
                                <input type="text" name="price" className="" placeholder="" />
                            </div>
                            <div className="fash-control-input d-flex flex-column gap-2">
                                <span className="fash-h6 c-dark">Stock</span>
                                <input type="text" name="stock" className="" placeholder="" />
                            </div>
                            <div className="fash-control-input d-flex flex-column">
                                <span className="fash-h6 c-dark">Stock</span>
                                <div className="d-flex fash-control-input-radio align-items-center gap-5">
                                    <div className="d-flex align-items-center gap-2">
                                        <input type="radio" name="condition" value='baru' />
                                        <span className="fash-h6 c-dark">Baru</span>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                        <input type="radio" name="condition" value='bekas' />
                                        <span className="fash-h6 c-dark">Bekas</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="fash-control-content bc-white d-flex flex-column gap-4 border-0">
                            <div className="d-flex flex-column gap-2">
                                <span className="fash-h4 fw-4">Photo</span>
                            </div>
                            <span className="fash-line"></span>
                            <div className="fash-upload-photo d-flex flex-column gap-3 justify-content-between">
                                <div>
                                    Photo
                                </div>
                                <span className="fash-line"></span>
                                <div className="d-flex justify-content-center">
                                    <button className="fash-button">Upload Foto</button>
                                </div>
                            </div>
                        </div>

                        <div className="fash-control-content bc-white d-flex flex-column gap-4 border-0">
                            <div className="d-flex flex-column gap-2">
                                <span className="fash-h4 fw-4">Description</span>
                            </div>
                            <span className="fash-line"></span>
                            <div className="fash-upload-photo d-flex flex-column gap-3">
                                <span className="fash-h4 fw-4">Description</span>
                                <span className="fash-line"></span>
                                <div className="d-flex h-fill flex-column">
                                    <textarea className="w-fill h-fill p-2" placeholder="Description" name="description" form="usrform"></textarea>
                                </div>
                            </div>
                        </div>
                        <Button type='submit'>aaaaaaaaa</Button>
                    </div>
                </Formik> 
            </div>
        </>
    )
}

export default Dashboard