import React from 'react'
import { Alert, Button, Col, Form, Modal, Row } from 'react-bootstrap'
import { Formik } from 'formik'
import * as Yup from 'yup'
import 'yup-phone';
import { useDispatch, useSelector } from 'react-redux'

const addressSechema  = Yup.object().shape({
  postalCode: Yup.string().min(5).required(),
  recipientPhone: Yup.string().phone('ID').required()
})

const AddressForm = ({errors, handleSubmit, handleChange})=> {
  const successMsg = useSelector((state) => state.authCustomer.successMsg)
  const errorMsg = useSelector((state) => state.authCustomer.errorMsg)
  return (
    <Form noValidate onSubmit={handleSubmit}>
      {successMsg && <Alert variant="success">{successMsg}</Alert>}
      {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
        <Form.Group className="mb-3" >
          <Form.Label>Save address as (ex : home address, office address)</Form.Label>
          <Form.Control type="text" placeholder="Rumah" />
        </Form.Group>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" >
            <Form.Label>Recipient's name</Form.Label>
            <Form.Control type="text" name='recipientName' />
          </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" >
            <Form.Label>Recipient's telephone number</Form.Label>
            <Form.Control type="text" name='recipientPhone' />
          </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" >
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" name='address' />
          </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" >
            <Form.Label>Postal code</Form.Label>
            <Form.Control type="text" name='postalCode' />
          </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" >
            <Form.Label>City or Subdistrict</Form.Label>
            <Form.Control type="text" name='city' />
          </Form.Group>
          </Col>
        </Row>
        <div className='d-flex flex-row gap-2 align-items-center mb-4'>
          <div>
            <Form.Check type='checkbox' name='checkPrimary' value='true' />
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

function ModalAddAddressNew(props){
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
        <span className='fash-h2 text-center'>Add new address</span>
        
        {/*m> */}
        <Formik initialValues={{addressAs: '', recipientName: '', recipientPhone: '', address: '', postalCode: '', city: '', checkPrimary: ''}} validationSchema={addressSechema} >
            {(props)=><AddressForm {...props}/>}
          </Formik>

      </Modal.Body>
    </Modal>
  )
}

export default function ModalAddAddress() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Button variant='outline-secondary' className='fash-border-dash-modal-checkout py-4 text-secondary' onClick={() => setModalShow(true)}>Add new address</Button>
      <ModalAddAddressNew show={modalShow} onHide={() => setModalShow(false)} />
    </>
  )
}
