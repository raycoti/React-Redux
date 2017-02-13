import {connect} from 'react-redux';
import {Stations} from '../components/Stations';
import React, {Component} from 'react';

function mapStateToProps(state){
 var stations = state.songs.reduce(checkGenre, {});
 console.log('stations', stations);
  return {
    stations: stations
  }
}
function mapDispatchToProps(dispatch, ownProps){
  // let displaySongs = ownProps.stations[routeParams.genreName]
  return {

  }
}

function checkGenre(stations, song){
  let genreName = song.genre;
  if (stations[genreName]){
    stations[genreName].push(song)
  }
  else{
    stations[genreName] = [song]
  }
  return stations
}

const StationsContainer = connect(mapStateToProps, mapDispatchToProps)(Stations);

export default StationsContainer;
