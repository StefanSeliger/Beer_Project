import React, { Component } from 'react';
import BeerDetailItems from '../components/BeerDetaiItems.js';


class RandomBeerDetails extends React.Component {
    state = {
        randomBeer : [],
    }

    componentDidMount() {
        fetch('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(response => response.json())
            .then(json => this.setState({ randomBeer: json  }))
    }


    render() { 
        return (
            <section>
                <BeerDetailItems
                image={this.state.randomBeer.image_url}
                name={this.state.randomBeer.name}
                tagline={this.state.randomBeer.tagline}
                first_brewed={this.state.randomBeer.first_brewed}
                attenuation_level={this.state.randomBeer.attenuation_level}
                description={this.state.randomBeer.description}
                link={"/"}/>  
            </section>
        );
    }
}
 
export default RandomBeerDetails;