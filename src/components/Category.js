import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import Gsatu from '../assets/images/Group 1229.png'
import Gdua from '../assets/images/Group 1230.png'
import Gtiga from '../assets/images/Group 1231.png'
import Gempat from '../assets/images/Group 1232.png'
import Glima from '../assets/images/Group 1233.png'

const Category = () => {
    return (
        <>
            <Container>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-50"
                            src={Gsatu}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-50"
                            src={Gdua}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-50"
                            src={Gtiga}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h5>Third slide label</h5>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-50"
                            src={Gempat}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h5>Third slide label</h5>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-50"
                            src={Glima}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h5>Third slide label</h5>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </>
    )
}

export default Category;
