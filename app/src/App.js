
import React from 'react';
import { connect } from 'react-redux';
import { getBreed, onInputChange } from './components/actions/index';
import DogImages from './components/DogImages';

function App({getBreed, onInputChange, userInput}) {

const handleSubmit = (e)=> {
  e.preventDefault();
  getBreed(userInput);
}

  return (
    <React.Fragment>
    <div className="App">
      <h1>Favorite Dog</h1>
      <div className="todoForm">
        <form onSubmit={handleSubmit}>
          <label>
            Dog:
            <input onChange={onInputChange} value={userInput}/>
          </label>
          <button>Find</button>
        </form>
      </div>
    </div>
    <DogImages />
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    error: state.error,
    isFetching: state.isFetching,
    dogBreed: state.dogBreed,
    dogImages: state.dogImages,
    userInput: state.userInput,
  }
}
export default connect(mapStateToProps, {getBreed, onInputChange})(App);
