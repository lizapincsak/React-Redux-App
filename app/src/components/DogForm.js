import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const DogForm = (props) => {
    const { error, isFetching, dogImage } = props;

    if (error){
        return <h2>There's an error: {error}</h2>
    }

    if (isFetching) {
        return <h2>Fetching a dog bone</h2>
    }

    return (
        <div>
            <h2>These are images of your favorite dog!!</h2>
            <button>Find Dog</button>
            <img>{dogImage}</img>
        </div>
    )

    const mapStateToProps = state => {
        return {
            isFetching: state.isFetching, 
            error: state.error,
            dogImage: state.dogImage,
        }
    }
}

export default connect(mapStateToProps, {})(DogForm);