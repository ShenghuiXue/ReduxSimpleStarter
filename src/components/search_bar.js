import React, {Component} from 'react';

class SearchBar extends Component{ // make a class of SearchBar and extend from component
  // define a state
  // props passed from index.js : onSearchTermChange={videoSearch}
  constructor (props) { // this is a constructor
    super (props); // get all the methods from pararent class
    this.state = {term: ""}; // set initial state each class can have its own state
  }
  render() { // render
    return ( // return search_bar // can only return 1 div?
      <div className="search-bar">

        <input
          placeholder= "Search youtube here"
          value ={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
          />
          <span> <i class="fas fa-search"></i></span>
      </div>
    );
  }
  // onInputChange perform two functions:

  onInputChange(term) {
    // 1. change the state of term to be the valule input by user
    // this is done in the same file
    this.setState ({term});
    // 2. return search term to the pararent file
    // props is onSearchTermChange={videoSearch}, somehow term misterey transorted to the pararent file
    this.props.onSearchTermChange(term);
  }

}

export default SearchBar;
