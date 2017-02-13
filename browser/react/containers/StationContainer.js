import {connect} from 'react-redux';
import Station from '../components/Station';
import React, {Component} from 'react';
import {toggleSong} from '../action-creators/player';

function mapStateToProps(state, ownProps){
  // console.log(ownProps)
  const genreName = ownProps.params.genreName;
  const filteredSongs = state.songs.filter((song) => {
    return song.genre === genreName;
  })
  //console.log('state', state);
  // const songs;
  // const currentSong = {};
  // const isPlaying = false;
  // const toggle = () => {};
  return {
    genreName: genreName,
    songs: filteredSongs,
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying

  };
}

function mapDispatchToProps(dispatch, ownProps){
  //console.log('store: ', ownProps)

  return {
    test: function() {
      return 'this is a test'
    },
    toggle: function(song, list) {
      dispatch(toggleSong(song, list))
    }
  };

}

const StationContainer = connect(mapStateToProps, mapDispatchToProps)(Station);

export default StationContainer;
