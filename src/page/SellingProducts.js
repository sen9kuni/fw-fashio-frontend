
import Navbar from "../components/Navbar"
import DashboardMenuSeller from "../components/DashboardMenuSeller"
import { Formik } from "formik"
import React from "react"
import { ChromePicker } from "react-color"
import { AiOutlineBgColors, AiOutlineClose } from "react-icons/ai";
import * as Yup from 'yup'

const Dashboard = () => {
    const [color, setColor] = React.useState('#fff')
    const [showPicker, setShowPicker] = React.useState(false)

    const productSchema = Yup.object().shape({
        name: Yup.string().required('Required'),
        price: Yup.string().required('Required'),
        stock: Yup.string().required('Required'),
        condition: Yup.string().required('Required'),
        description: Yup.string().required('Required'),
    })

    const onAddProduct = (value) => {
        value.color = color
        console.log(value);
    };
    return(
        <>
            <Navbar />
            <Formik 
                initialValues={{name: '', color: color, price: '', stock: '', condition: '', description: ''}}
                validationSchema={productSchema}
                >
                {(props) =>
                    <div className="fash-dashboard-body d-flex">
                        <DashboardMenuSeller />
                        <div className="fash-dashboard-content flex-fill overflow-auto d-flex flex-column gap-5">
                            <div className="fash-control-content bc-white d-flex flex-column gap-4 border-0">
                                <div className="d-flex flex-column gap-2">
                                    <span className="fash-h4 fw-4">Inventory</span>
                                </div>
                                <span className="fash-line"></span>
                                <div className="fash-control-input d-flex flex-column gap-2">
                                    <span className="fash-h6 c-dark">Name</span>
                                    <input type="text" onChange={props.handleChange} name="name" className="" placeholder="" />
                                    <span className='invaild-feedback fash-h8' type="invalid">{props.errors.name}</span>
                                </div>
                            </div>

                            <div className="fash-control-content bc-white d-flex flex-column gap-4 border-0">
                                <div className="d-flex flex-column gap-2">
                                    <span className="fash-h4 fw-4">Item details</span>
                                </div>
                                <span className="fash-line"></span>
                                <div className="fash-control-input d-flex flex-column gap-2">
                                    <span className="fash-h6 c-dark">Unit price</span>
                                    <input type="text" name="price" onChange={props.handleChange} className="" placeholder="" />
                                    <span className='invaild-feedback fash-h8' type="invalid">{props.errors.price}</span>
                                </div>
                                <div className="fash-control-input d-flex flex-column gap-2">
                                    <span className="fash-h6 c-dark">Stock</span>
                                    <input type="text" name="stock" onChange={props.handleChange} className="" placeholder="" />
                                    <span className='invaild-feedback fash-h8' type="invalid">{props.errors.stock}</span>
                                </div>
                                <div className="fash-control-input d-flex flex-column">
                                    <span className="fash-h6 c-dark">Stock</span>
                                    <div className="d-flex fash-control-input-radio align-items-center gap-5">
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="radio" onChange={props.handleChange} name="condition" value={'baru'}/>
                                            <span className="fash-h6 c-dark">Baru</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-2">
                                            <input type="radio" onChange={props.handleChange} name="condition" value={'bekas'} />
                                            <span className="fash-h6 c-dark">Bekas</span>
                                        </div>
                                    </div>
                                    <span className='invaild-feedback fash-h8' type="invalid">{props.errors.condition}</span>
                                </div>
                                <div className="fash-control-input d-flex flex-column gap-2">
                                    <span className="fash-h6 c-dark">Color</span>
                                    <div className="d-flex gap-3">
                                        <div className="d-flex gap-2">
                                            <button className="fash-color-button" onClick={() => setShowPicker(showPicker => !showPicker)}>{showPicker? <AiOutlineClose />:<AiOutlineBgColors />}</button>
                                            {
                                                showPicker && <ChromePicker color={color}
                                                    onChange={changeColor => {
                                                        setColor(changeColor.hex || '#fff');
                                                    }
                                                } />
                                            }
                                            <div className="fash-color-input" style={{backgroundColor: color}}></div>
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
                                        <textarea className="w-fill h-fill p-2" onChange={props.handleChange} placeholder="Description" name="description" form="usrform"></textarea>
                                    </div>
                                    <span className='invaild-feedback fash-h8' type="invalid">{props.errors.description}</span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button className="fash-button bc-primary c-secondary" type='button' onClick={()=>onAddProduct(props.values)}>Save</button>
                            </div>
                            <Button onClick={()=> onAddProduct(props.values)} >aaaaaaaaa</Button>
                        </div>
                    </div>
                }
            </Formik>
        </>
    )
}

export default Dashboard