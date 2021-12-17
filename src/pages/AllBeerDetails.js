import React, { Component } from 'react';
import BeerDetailItems from '../components/BeerDetaiItems.js';


class AllBeerDetails extends React.Component {
    state = {
        beersDetail : [],
    }

    componentDidMount() {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${this.props.id}`)
            .then(response => response.json())
            .then(json => this.setState({ beersDetail: json }))
    }

    render() {

        return (
            <div>
                <h1>{this.state.beersDetail.name}</h1>
                {/* image={url} */}
                {/* <BeerDetailItems
                image={this.state.beersDetail.image_url}/> */}
            </div>

        )
    }
}

export default AllBeerDetails;