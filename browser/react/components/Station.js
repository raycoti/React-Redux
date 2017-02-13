import React from 'react'
import Songs from './Songs'

export default function Station(props){
  // const selectedStation = props.routeParams.genreName;
  console.log('station props', props)
  // const songs = [];
  // const currentSong = {};
  // const isPlaying = false;
  //const toggle = () => {};
  // console.log(console.log(props));
  return (
    <div>
      <h4>{props.genreName}</h4>
      <Songs
      songs={props.songs}
      currentSong={props.currentSong}
      isPlaying={props.isPlaying}
      toggle={props.toggle} />
    </div>
  )
}
