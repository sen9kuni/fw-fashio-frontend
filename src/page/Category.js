import { React, useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import { AiFillShopping, AiOutlineSearch, AiOutlineFilter, AiOutlineShoppingCart, AiOutlineBell, AiOutlineMail } from "react-icons/ai";
import '../assets/css/index.css';
import profile from '../assets/images/profile.jpg'
import { Navbar, Form, InputGroup } from 'react-bootstrap';

const Category = () => {
    const [pages, setPages] = useState([]);
    useEffect(() => {
        getPages();
    }, []);

    const getPages = () => {
        const responsePages = {
            "results": [
                {
                    "id": 1
                },
                {
                    "id": 2
                },
                {
                    "id": 3
                },
                {
                    "id": 4
                },
                {
                    "id": 5
                },
                {
                    "id": 6
                },
                {
                    "id": 7
                },
                {
                    "id": 8
                },
                {
                    "id": 9
                },
                {
                    "id": 10
                }
            ]
        }
        setPages(responsePages.results);
    }
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
                    <Col md={5} className='d-flex gap-2 align-items-center'>
                        <InputGroup className="align-items-center fash-search bc-primary" stle={{ width: 100 }}>
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
                </Container>
            </Navbar>
            <Container className='px-5'>
                <Row>
                    <Col className='my-5'>
                        <Link to={'/'}>Home</Link><span> - </span><Link to={'/'}>category</Link><span> - </span><Link to={'/'}>T-Shirt</Link>
                    </Col>
                </Row>
                <Row className='mb-3'>
                    <h1>T-Shirt</h1>
                </Row>
                <Row>
                    {pages && pages.map((page, i) => (
                        <Col className='mb-4'><Card /></Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default Category
