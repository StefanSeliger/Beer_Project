import React, { Component } from 'react';
import AllBeerItems from '../components/AllBeerItems.js';
import { v4 as uuidv4 } from 'uuid';
import Nav from '../components/Nav.js';


class AllBeer extends React.Component {
    state = {
        beers: [],
    }

    componentDidMount() {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => response.json())
            .then(json => this.setState({ beers: json }))
    }

    render() {
        return (
            <section>
                {
                    this.state.beers.map(elt => 
                        < AllBeerItems 
                            key={uuidv4()}
                            id={elt._id}
                            image={elt.image_url}
                            name={elt.name}
                            tagline={elt.tagline}
                            name={elt.name}
                        />)
                }
                <Nav/>
            </section>
        );
    }
}

export default AllBeer;