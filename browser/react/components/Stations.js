import React from 'react';
import {Link} from 'react-router';

export function Stations(props){
/*  const DUMMY_STATIONS_DATA = [
  { name: '90s Hip Hop' },
  { name: 'Death Metal' },
  { name: 'Classical' }
  ];*/
  const stationNames = Object.keys(props.stations);
  return (
    <div>
      <h3>Stations</h3>
      <div className="list-group">
      {
        
        stationNames.map(name => {
          return (
            <div className="list-group-item" key={name}>
              <Link to={`/stations/${name}`}>{name}</Link>
            </div>
          );
        })
      }
      </div>
    </div>
  )
}
