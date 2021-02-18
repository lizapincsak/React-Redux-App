import React from 'react';
import { connect } from 'react-redux';

const DogForm = ({dogImages}) => {
console.log(dogImages)
    // if (error){
    //     return <h2>There's an error: {error}</h2>
    // }

    // if (isFetching) {
    //     return <h2>Fetching a dog bone</h2>
    // }
    const renderedDogImage = dogImages.map((image) => {
        return (
            <img width="200" src={image} />
        )
    })
    return (
        <div>
           {renderedDogImage ? renderedDogImage : ''}
        </div>
    )

   
}

const mapStateToProps = state => {
    return {
        // error: state.error, 
        // isFetching: state.isFetching, 
        // dogBreed: state.dogBreed, 
        dogImages: state.dogImages, 
        // textInput: state.textInput,
    }
}

export default connect(mapStateToProps)(DogForm);