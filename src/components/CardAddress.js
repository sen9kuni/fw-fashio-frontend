import React from 'react'
import { Alert, Button, Col, Form, Modal, Row } from 'react-bootstrap'
import { Formik } from 'formik'
import * as Yup from 'yup'
import 'yup-phone';
import { useDispatch, useSelector } from 'react-redux'
import { editAddress, getAddresById } from '../redux/asyncActions/authCustomer';

// const addressSechema  = Yup.object().shape({
//   postalCode: Yup.string().min(5).required(),
//   recipientPhone: Yup.string().phone('ID').required()
// })

const AddressForm = ({errors, handleSubmit, handleChange})=> {
  const successMsg = useSelector((state) => state.authCustomer.successMsg)
  const errorMsg = useSelector((state) => state.authCustomer.errorMsg)
  const addressChoice = useSelector((state) => state.authCustomer.addressChoice)
  let primary = ''
  primary = addressChoice?.map((o)=>o.primary_address)[0]
  console.log(primary);
  return (
    <Form noValidate onSubmit={handleSubmit}>
      {successMsg && <Alert variant="success">{successMsg}</Alert>}
      {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
        <Form.Group className="mb-3" >
          <Form.Label>Save address as (ex : home address, office address)</Form.Label>
          <Form.Control onChange={handleChange} name='place_name' type="text" placeholder={addressChoice?.map((o)=> o.place_name)} />
        </Form.Group>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" >
            <Form.Label>Recipient's name</Form.Label>
            <Form.Control onChange={handleChange} type="text" name='recepient_name' placeholder={addressChoice?.map((o)=> o.recepient_name)} />
          </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" >
            <Form.Label>Recipient's telephone number</Form.Label>
            <Form.Control onChange={handleChange} type="text" name='recepient_phone' placeholder={addressChoice?.map((o)=> o.recepient_phone)} />
          </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" >
            <Form.Label>Address</Form.Label>
            <Form.Control onChange={handleChange} type="text" name='address' placeholder={addressChoice?.map((o)=> o.address)} />
          </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" >
            <Form.Label>Postal code</Form.Label>
            <Form.Control onChange={handleChange} type="text" name='postal_code' placeholder={addressChoice?.map((o)=> o.postal_code)} />
          </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" >
            <Form.Label>City or Subdistrict</Form.Label>
            <Form.Control onChange={handleChange} type="text" name='city' placeholder={addressChoice?.map((o)=> o.city)} />
          </Form.Group>
          </Col>
        </Row>
        <div className='d-flex flex-row gap-2 align-items-center mb-4'>
          <div>
            <Form.Check onChange={handleChange} type='checkbox' name='primary_address' value='true' 
            // checked={addressChoice && addressChoice?.map((o)=> o.primary_address)[0] === true ? true : false} 
            />
          </div>
          <div>
            <span>Make it the primary address</span>
          </div>
        </div>

        <div className='d-flex flex-row justify-content-end gap-4'>
          <Button variant='outline-secondary' className='modal-button-add-address rounded-5' >Cancel</Button>
          <Button variant='danger' className='modal-button-add-address rounded-5' type="submit">Save</Button>
        </div>
        </Form>
  )
}

function ModalChangeAddress(props){
  const dispatch = useDispatch()
  const addressChoice = useSelector((state) => state.authCustomer.addressChoice)
  const token = useSelector((state) => state.authCustomer.token)
  const id = addressChoice?.map((o)=>o.id)[0]
  const onEditAddress = (value)=> {
    // console.log(value);
    const param = {id: id, token: token, recepient_name: value.recepient_name, recepient_phone: value.recepient_phone, address: value.address, city: value.city, postal_code: value.postal_code, primary_address: value.primary_address === true ? true : false, place_name: value.place_name}
    console.log(param);
    dispatch(editAddress(param))
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      // show={show}
    >
      <Modal.Header className='border-bottom-0 p-4'>
        <Button variant='close' onClick={props.onHide} />
      </Modal.Header>
      <Modal.Body className='d-flex flex-column gap-4 px-5'>
        <span className='fash-h2 text-center'>Change Address</span>
        
        <Formik initialValues={{place_name: '', recepient_name: '', recepient_phone: '', address: '', postal_code: '', city: '', primary_address: ''}}  onSubmit={onEditAddress} >
            {(props)=><AddressForm {...props}/>}
          </Formik>

      </Modal.Body>
    </Modal>
  )
}

export default function CardAddress({id ,name, address, placeName, city, postalCode}) {
  const dispatch = useDispatch()
  const [modalShow, setModalShow] = React.useState(false);
  const token = useSelector((state) => state.authCustomer.token)
  
  const handleclick = (token, id) => {
    // const idAddress = id
    // idFinal = idAddress
    
    // console.log(id);
    const param = {token: token, id: id}
    console.log(param);
    dispatch(getAddresById(param))
  }
  return (
    <>
      <div onClick={() => handleclick(token, id)} className='d-flex flex-column p-4 gap-2 rounded fash-border-address-color-primary'>
          <span className='fash-h4 fw-5 c-black'>{name}</span>
          <p className='fash-h6 c-black'>{placeName}, {address}, {city}, {postalCode}</p>
          <div>
            <Button onClick={() => { handleclick(token, id);setModalShow(true);}} className='bg-light border-0 p-0 shadow-none'><span className='fash-h4 fw-5 c-black'>Change address</span> </Button>
          </div>
      </div>
      <ModalChangeAddress show={modalShow} onHide={() => setModalShow(false)} />
    </>
  )
}
