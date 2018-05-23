import React, {Component} from 'react';

class SearchBar extends Component{ // make a class of SearchBar and extend from component
  // define a state
  constructor (pross) { // this is a constructor
    super (pross); // get all the methods from pararent class
    this.state = {term: "1"}; // set initial state
  }
  render() { // render
    return ( // return search_bar
      <div>
        <input
          value ={this.state.term}
          onChange={event => this.setState({term: event.target.value})}
          />

      </div>
    );
  }


}

export default SearchBar;
