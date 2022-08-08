import { AiFillShopping, AiOutlineSearch, AiOutlineFilter, AiOutlineShoppingCart, AiOutlineBell, AiOutlineMail } from "react-icons/ai";
import '../assets/css/index.css';
import profile from '../assets/images/profile.jpg'
import React from 'react';
import NoNotification from '../assets/images/NoNotification.png'
import { Navbar, Container, Col, Form, InputGroup } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const NavbarNotif = () => {
    return (
        <>
            <Navbar className='fash-navbar bc-primary w-fill '>
                <Container className='px-5'>
                    <Col className='d-flex align-items-center'>
                        <Navbar.Brand>
                            <div className="c-secondary d-flex align-items-center">
                                <AiFillShopping className="fash-h2" />
                                <span className="fash-h2">Fashio</span>
                            </div>
                        </Navbar.Brand>
                    </Col>
                    <Col className='d-flex gap-2 align-items-center'>
                        <InputGroup className="align-items-center fash-search bc-primary" stle={{ witdth: 100 }}>
                            <Form.Control
                                id='formcontrol-navbar'
                                className='fash-search bc-primary'
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="basic-addon2"
                            />
                            <AiOutlineSearch className="fash-h2 c-dark" />
                        </InputGroup>
                        <div className="fash-nav-filter d-flex align-items-center justify-content-center px-2">
                            <AiOutlineFilter className="fash-h2 c-dark" />
                        </div>
                    </Col>
                    <Col>
                        <Navbar.Collapse className="justify-content-end gap-4">
                            <AiOutlineShoppingCart className="fash-h2 c-dark" />
                            <AiOutlineBell className="fash-h2 c-dark" />
                            <AiOutlineMail className="fash-h2 c-dark" />
                            <div className="fash-nav-profile">
                                <img src={profile} alt='profile' />
                            </div>
                        </Navbar.Collapse>
                    </Col>
                    <div className="ms-2 fash-h2 c-dark d-flex align-items-center">
                        <DropdownButton
                            className="fash-h2 c-dark bg-unset"
                            key='start'
                            id='dropdown-button-drop-start'
                            drop='start'
                            variant="dark"
                            title='n'
                        >
                            <Dropdown.Item>
                                <img src={NoNotification} alt='NoNotification' className='padding-notif' />
                            </Dropdown.Item>
                        </DropdownButton>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarNotif;