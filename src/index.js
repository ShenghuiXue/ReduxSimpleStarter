// javascript modules in ES6.
import React, {Component} from 'react';
// import ReactDoM
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// import SearchBar from search_bar.js inside of components folder
import SearchBar from './components/search_bar';
// import key
const API_KEY = "AIzaSyCk2w7xaSOKqprqBP67CEwW9YoCgE1pQ1k";



// Create a new component. This component should produce some HTML.
class App extends Component {
  constructor(props) {
    super (props);
    this.state = {videos: []};
    YTSearch ({key:API_KEY, term:'qing yun zhi'}, (videos) =>{
      this.setState({videos});
    });
  }
  render (){
    return (
      <div>
        <SearchBar />
      </div>
    );
  };
}


// Take this component html gerenrated html and put it on the page.
ReactDOM.render(<App />, document.querySelector(".container"));

// how jsx work? defince some var such as const App(). ReactDOM.render(<App />, document.querySelector(some id))
