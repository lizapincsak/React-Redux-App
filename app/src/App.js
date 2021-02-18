import React from 'react';
import DogForm from './components/DogForm';
import { connect } from 'react-redux';
import { getBreed, inputChange } from './components/actions/index';


const App = ({getBreed, inputChange, textInput}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        getBreed(textInput);
    }

    return(
        <div>
            <h1>What's Your Favorite Dog??</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Dog Breed:
                    <input onChange={inputChange} value={textInput}/>
                </label>
                <button>Find</button>
            </form>
            <DogForm />
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        error: state.error, 
        isFetching: state.isFetching, 
        dogBreed: state.dogBreed, 
        dogImages: state.dogImages, 
        textInput: state.textInput,
    }
}

export default connect(mapStateToProps, { getBreed, inputChange })(App);