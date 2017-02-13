import React, {Component} from 'react';
//import store from '../store';
import Lyrics from '../components/Lyrics';

import {searchLyrics} from '../action-creators/lyrics';
import {connect} from 'react-redux';

class LyricsContainer extends Component {

  constructor() {

    super();
    this.state = {
      artistQuery: '',
      songQuery: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleArtistInput = this.handleArtistInput.bind(this);
    this.handleSongInput = this.handleSongInput.bind(this);

  }

/*  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }
*/
  handleArtistInput(artist) {
    this.setState({ artistQuery: artist });
  }

  handleSongInput(song) {
    this.setState({ songQuery: song });
  }

  handleSubmit(e) {
   // console.log('hello')
    e.preventDefault();
    if (this.state.artistQuery && this.state.songQuery) {
      this.props.searchLyrics(this.state.artistQuery, this.state.songQuery);
    }
  }

/*  componentWillUnmount() {
    this.unsubscribe();
  }
*/
  render() {
    return (
      <Lyrics
        {...this.state}
        text={this.props.text}
        handleChange={this.handleChange}
        setArtist={this.handleArtistInput}
        setSong={this.handleSongInput}
        handleSubmit={this.handleSubmit} />
    );
  }

}

function mapStateToProps(state){
  return {
    text: state.lyrics.text,
  }
}

function mapDispatchToProps(dispatch, ownProps){
  // let displaySongs = ownProps.stations[routeParams.genreName]
  // console.log(this);
  return {
    searchLyrics: function(artistQuery, songQuery){
      return dispatch(searchLyrics(artistQuery, songQuery))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LyricsContainer)
