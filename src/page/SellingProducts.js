
import Navbar from "../components/Navbar"
import DashboardMenuSeller from "../components/DashboardMenuSeller"
import { Button, Form } from 'react-bootstrap'
import { Formik } from 'formik'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addProduct } from "../redux/asyncActions/authSeller"
import ColorPicker from "../components/ColorPicker"
import React from "react"
import { ChromePicker } from "react-color"

const AddProductForm = ({errors, handleSubmit, handleChange}) => {
    const [color, setColor] = React.useState('#fff')
    const [showPicker, setShowPicker] = React.useState(false)
    return (
        <Form noValidate onSubmit={handleSubmit} >
            <div className="fash-dashboard-content flex-fill overflow-auto d-flex flex-column gap-5">
                <div className="fash-control-content bc-white d-flex flex-column gap-4 border-0">
                    <div className="d-flex flex-column gap-2">
                        <span className="fash-h4 fw-4">Inventory</span>
                    </div>
                    <span className="fash-line"></span>
                    <div className="fash-control-input d-flex flex-column gap-2">
                        <span className="fash-h6 c-dark">Name</span>
                        <Form.Control onChange={handleChange} type="text" name="name" className="" placeholder="" />
                    </div>
                </div>

                <div className="fash-control-content bc-white d-flex flex-column gap-4 border-0">
                    <div className="d-flex flex-column gap-2">
                        <span className="fash-h4 fw-4">Item details</span>
                    </div>
                    <span className="fash-line"></span>
                    <div className="fash-control-input d-flex flex-column gap-2">
                        <span className="fash-h6 c-dark">Unit price</span>
                        <Form.Control onChange={handleChange} type="text" name="price" className="" placeholder="" />
                    </div>
                    <div className="fash-control-input d-flex flex-column gap-2">
                        <span className="fash-h6 c-dark">Stock</span>
                        <Form.Control onChange={handleChange} type="text" name="stock" className="" placeholder="" />
                    </div>
                    <div className="fash-control-input d-flex flex-column gap-2">
                        <span className="fash-h6 c-dark">Color</span>
                        {/* <ColorPicker /> */}
                        {/* <div className="d-flex gap-3"> */}
                            {/* <div> */}
                                <button type="button" onClick={() => setShowPicker(showPicker => !showPicker)}>{showPicker? 'Pick':'Close'}</button>
                                {
                                    showPicker && <ChromePicker name='colorHex' color={color} onChange={changeColor => {setColor(changeColor.hex); onColor}} />
                                }
                            {/* </div> */}
                            {/* <input onChange={handleChange} type="text" name="colorHex" value={color} className="" placeholder="" style={{backgroundColor: color}} /> */}
                            {/* <Form.Control onChange={handleChange} value={color} name='colorHex' /> */}
                        {/* </div> */}
                    </div>
                    <div className="fash-control-input d-flex flex-column">
                        <span className="fash-h6 c-dark">Stock</span>
                        <div className="d-flex fash-control-input-radio align-items-center gap-5">
                            <div className="d-flex align-items-center gap-2">
                                <Form.Control onChange={handleChange} type="radio" name="condition" value='baru' />
                                <span className="fash-h6 c-dark">Baru</span>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <Form.Control onChange={handleChange} type="radio" name="condition" value='bekas' />
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
                            <textarea onChange={handleChange} className="w-fill h-fill p-2" placeholder="Description" name="description" form="usrform"></textarea>
                        </div>
                    </div>
                </div>
                <Button type="submit" >aaaaaaaaa</Button>
            </div>
        </Form>
    )
}

const Dashboard = () => {
    const [color, setColor] = React.useState('#fff')
    const [showPicker, setShowPicker] = React.useState(false)
    const dispatch = useDispatch()
    const token = useSelector((state) => state.authSeller.token)
    const navigate = useNavigate()
    let colorFinal
    const onColor = (value) => {
        console.log(value);
    }
    const onAddProduct = (value) => {
        console.log(value);
    }
    return(
        <>
            <Navbar />
            <div className="fash-dashboard-body d-flex">
                <DashboardMenuSeller />
                {/* <Formik initialValues={{name: '', price: '', stock: '',condition: '',description:'', colorHex: ''}} onSubmit={onAddProduct}>
                        {(props)=><AddProductForm {...props}/>}
                </Formik> */}
                <Formik initialValues={{name: '', price: '', stock: '',condition: '',description:'', colorHex: ''}}>
                {(props)=> 
                    <Form>
                        <div className="fash-dashboard-content flex-fill overflow-auto d-flex flex-column gap-5">
                            <div className="fash-control-content bc-white d-flex flex-column gap-4 border-0">
                                <div className="d-flex flex-column gap-2">
                                    <span className="fash-h4 fw-4">Inventory</span>
                                </div>
                                <span className="fash-line"></span>
                                <div className="fash-control-input d-flex flex-column gap-2">
                                    <span className="fash-h6 c-dark">Name</span>
                                    <input onChange={props.handleChange} type="text" name="name" className="" placeholder="" />
                                </div>
                            </div>

                            <div className="fash-control-content bc-white d-flex flex-column gap-4 border-0">
                                <div className="d-flex flex-column gap-2">
                                    <span className="fash-h4 fw-4">Item details</span>
                                </div>
                                <span className="fash-line"></span>
                                <div className="fash-control-input d-flex flex-column gap-2">
                                    <span className="fash-h6 c-dark">Unit price</span>
                                    <input onChange={props.handleChange} type="text" name="price" className="" placeholder="" />
                                </div>
                                <div className="fash-control-input d-flex flex-column gap-2">
                                    <span className="fash-h6 c-dark">Stock</span>
                                    <input onChange={props.handleChange} type="text" name="stock" className="" placeholder="" />
                                </div>
                                <div className="fash-control-input d-flex flex-column gap-2">
                                    <span className="fash-h6 c-dark">Color</span>
                                    <div className="d-flex gap-3">
                                        <div>
                                            <button type="button" onClick={() => setShowPicker(showPicker => !showPicker)}>{showPicker? 'Pick':'Close'}</button>
                                            {
                                                showPicker && <ChromePicker name='colorHex' color={color} oonChange={changeColor => {setColor(changeColor.hex); onColor(props.values = { color: changeColor.hex})}} />
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="fash-control-input d-flex flex-column">
                                    <span className="fash-h6 c-dark">Stock</span>
                                    <div className="d-flex fash-control-input-radio align-items-center gap-5">
                                        <div className="d-flex align-items-center gap-2">
                                            <input onChange={props.handleChange} type="radio" name="condition" value='baru' />
                                            <span className="fash-h6 c-dark">Baru</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-2">
                                            <input onChange={props.handleChange} type="radio" name="condition" value='bekas' />
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
                                        <textarea onChange={props.handleChange} className="w-fill h-fill p-2" placeholder="Description" name="description" form="usrform"></textarea>
                                    </div>
                                </div>
                            </div>
                            <Button onClick={()=> onAddProduct(props.values)} >aaaaaaaaa</Button>
                        </div>
                    </Form>
                }
                </Formik> 
            </div>
        </>
    )
}

export default Dashboard