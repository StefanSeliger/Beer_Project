import React, { Component } from 'react';
import MainItems from '../components/MainItems.js';
import HeroImage from '../img/christin-hume-08tX2fsuSLg-unsplash.jpg';
import RandomImage from '../img/proriat-hospitality-flENqflm6xU-unsplash.jpg';

import { Link } from 'react-router-dom'



class Main extends React.Component {
    

    render() {
        return (
            <section className="mainSection">
                <MainItems 
                image={HeroImage}
                title={"All Beers"}
                link={"/allbeer"}
                mainText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis."}
                />
                <MainItems 
                image={RandomImage}
                title={"Random Beer"}
                link={"/randombeer"}
                mainText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis."}
                />
            </section>

        );
    }
}

export default Main;