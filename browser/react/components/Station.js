import React from 'react'
import Songs from './Songs'

export default function Station(props){
  const songs = [];
  const selectedStation = props.routeParams.genreName;
  const currentSong = {};
  const isPlaying = false;
  const toggle = () => {};
  console.log(props);
  return (
    <div>
      <h4>{selectedStation}</h4>
      <Songs
      songs={songs}
      currentSong={currentSong}
      isPlaying={isPlaying}
      toggle={toggle} />
    </div>
  )
}



