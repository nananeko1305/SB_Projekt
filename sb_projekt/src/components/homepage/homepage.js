import styles from './homepage.module.css'
import {Carousel} from "react-bootstrap";
import picture1 from "../../images/slika2.jpg";
import picture2 from "../../images/slika3.jpg";
import React from "react";
const HomePage = () => {
    return (
        <>
            <SimpleCarousel/>
            <div className={`w-75 bg-primary mx-auto mt-3 ${styles.body}`}>
                HomePage
            </div>
        </>
    );
}

const SimpleCarousel = () => {
    return (
        <Carousel className={`w-75 mx-auto bg-black`}>
            <Carousel.Item>
                <img
                    className="d-block w-50 mx-auto"
                    src={picture1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-50 mx-auto"
                    src={picture2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};


export default HomePage;