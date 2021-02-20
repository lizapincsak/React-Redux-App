import React from 'react';
import {connect} from 'react-redux';

const DogImages = ({dogImages}) => {
    console.log(dogImages)
    const renderedDogImages = dogImages.map((image) => {
        return(
            <img width="200" src={image}/>
        )
    })
    return(
        <div>
            {renderedDogImages ? renderedDogImages : ''}
        </div>
    )
    
}

const mapStateToProps = state => {
    return {
      dogImages: state.dogImages,
    }
  }

export default connect(mapStateToProps, {})(DogImages);