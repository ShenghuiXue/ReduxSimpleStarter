// javascript modules in ES6.
// lodash is js library to control the respose time of the states, proboly can also
// control the time delay for other functions if applied
import _ from 'lodash';
// import the component from react framework
import React, {Component} from 'react';
// import ReactDoM
import ReactDOM from 'react-dom';
// import google API search
import YTSearch from 'youtube-api-search';

// import SearchBar from search_bar.js inside of components folder
import SearchBar from './components/search_bar';
// import videolist
import VideoList from './components/video_list';
// import VideoDetail
import VideoDetail from './components/video_detail';
// import key, for securty reason, the api_key should be hide to the envirment varibles
const API_KEY = "AIzaSyCk2w7xaSOKqprqBP67CEwW9YoCgE1pQ1k";



// Create a new component. This component should produce some HTML.
class App extends Component {
  // props can get data from pararent js
  constructor(props) {
    super (props);
    // initialize state, here we have an empty list videos, and selectedVideo
    // also put a method videoSearch into the constructor
    this.state = {
      videos: [],
      selectedVideo: null

    };
    this.videoSearch('react.js');
  }
    // videoSearch method is also in the app component
    videoSearch (term) {
      // YTSearch is imported previously imported
      YTSearch ({key:API_KEY, term:term}, (SearchedVideos) =>{ // this is a call back function for YTSearch
        // here the state is set be the searched items, selectedVideo is set to be the first element in the array
        this.setState({
          videos:SearchedVideos,
          selectedVideo: SearchedVideos[0]
        });
      });

  }
  // render create a jsx file and return them
  render (){
    // here videoSearch is function
    const videoSearch = _.debounce( (term) => {this.videoSearch(term)}, 300);
    // inside of return: function on onSearchTermChange seems not defined in this document, need check *****
    // video= {this.state.selectedVideo} pass this.state.selectedVideo to VideoList ReactDoM
    // onVideoSelect = {selectedVideo => this.setState({selectedVideo}) selectedVideo and set state
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video= {this.state.selectedVideo}/>
        <VideoList
          onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos}/>
      </div>
    );
  };
}


// Take this component html gerenrated html and put it on the page.
ReactDOM.render(<App />, document.querySelector(".container"));

// how jsx work? defince some var such as const App(). ReactDOM.render(<App />, document.querySelector(some id))
