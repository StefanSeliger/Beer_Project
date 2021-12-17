import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Arrow from '../img/Vector.jpg'
import Nav from '../components/Nav.js';

class AllBeerDetails extends React.Component {
    state = {
        beersDetail: [],
    }

    componentDidMount() {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${this.props.id}`)
            .then(response => response.json())
            .then(json => this.setState({ beersDetail: json }))
    }

    render() {

        return (
            <section className="BeerDetails">
                <article>
                    <img src={this.state.beersDetail.image_url} alt={this.state.beersDetail.name} />
                    <h2>{this.state.beersDetail.name}</h2>
                    <h3 className="orangeFont">{this.state.beersDetail.tagline}</h3>
                    <div>
                        <p>First Brewed</p>
                        <p>{this.state.beersDetail.first_brewed}</p>
                    </div>
                    <div>
                        <p>Attenuation level</p>
                        <p>{this.state.beersDetail.attenuation_level}</p>
                    </div>
                    <p>{this.state.beersDetail.description}</p>
                    <Link to="/allbeer"><img className="orangeBackground" src={Arrow} alt="back" /></Link>
                </article>
                <Nav/>
            </section>

        )
    }
}

export default AllBeerDetails;