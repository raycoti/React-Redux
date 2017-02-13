import React, {Component} from 'react';
import {connect} from 'react-redux';

// import store from '../store';
import Albums from '../components/Albums';

function mapStateToProps(state){
  console.log('albums: ', state.albums)
  return {
    albums: state.albums.list,
  }
}

function mapDispatchToProps(dispatch){
  return {

  }
}

const AlbumsContainer = connect(mapStateToProps, mapDispatchToProps)(Albums);

export default AlbumsContainer;
