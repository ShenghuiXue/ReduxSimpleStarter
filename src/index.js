// javascript modules in ES6.
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyCk2w7xaSOKqprqBP67CEwW9YoCgE1pQ1k";

// Create a new component. This component should produce some HTML.
const App = () => { // const declear a var which the the final varible
  return (<div>
  <SearchBar />
  </div>); // this is a JSX
}

// Take this component html gerenrated html and put it on the page.
ReactDOM.render(<App />, document.querySelector(".container"));
