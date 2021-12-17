import React, { Component } from 'react';
import BeerDetailItems from '../components/BeerDetaiItems.js';
import Nav from '../components/Nav.js';

class RandomBeerDetails extends React.Component {
    state = {
        randomBeer: [],
    }

    componentDidMount() {
        fetch('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(response => response.json())
            .then(json => this.setState({ randomBeer: json }))
    }


    render() {
        return (
            <section>
                <article>
                    <BeerDetailItems
                        image={this.state.randomBeer.image_url}
                        name={this.state.randomBeer.name}
                        tagline={this.state.randomBeer.tagline}
                        first_brewed={this.state.randomBeer.first_brewed}
                        attenuation_level={this.state.randomBeer.attenuation_level}
                        description={this.state.randomBeer.description}
                        link={"/"} />
                </article>
                <Nav/>
            </section>

        );
    }
}

export default RandomBeerDetails;