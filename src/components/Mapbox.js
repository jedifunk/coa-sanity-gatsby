import React, {useState, useEffect} from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import ReactMapboxGl, {Layer, Source, Feature, Image, Popup, MapContext, ZoomControl} from 'react-mapbox-gl'
//import {GrLocationPin as Pin} from 'react-icons/gr'
import pin from '../assets/images/iconmonstr-location-1-240.png'
import box from '@turf/bbox'
import mapboxgl from '!mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
//mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

const Mb = ReactMapboxGl({
  accessToken: `pk.eyJ1IjoiamVkaWZ1bmsiLCJhIjoiY2ttOGo0Y3Z2MThobzJvczNjZm4yaWc2dCJ9.6C8Npb2Zr9KUCkT8pq57RQ`
})

const Map = () => {

  // Get Visited list from CMS
  const data = useStaticQuery(visited)

  // Get City details
  const citiesVisited = data.cities.nodes
  const cityName = citiesVisited.map(city => (city.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase()))
  const citiesGeo = {
    'type': 'geojson',
    'data': `https://raw.githubusercontent.com/drei01/geojson-world-cities/master/cities.geojson`,
  }
  
  // Get Country details
  const countriesVisited = data.countries.nodes
  const iso = countriesVisited.map(country => (country.isoA3)).filter(x => x)
  const countriesGeo = {
    'type': 'geojson',
    'data': `https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson`,
  }

  // Get Places from CMS
  const places = data.places.nodes

  const [state, setState] = useState({
    fitBounds: undefined,
    center: [-100.486052, 37.830348],
    zoom: 1,
  })

  // const markerClick = e => {
  //   var bbox = box(e.features[0])

  //   setState({
  //     ...state,
  //     fitBounds: bbox
  //   })
  //   console.log(state.fitBounds)
  // }

  var hoveredStateId = null;
  
  return (
    <div className={`map-wrapper`} style={{height: "500px"}}>
      <Mb
        style={`mapbox://styles/mapbox/light-v10`}
        zoom={[state.zoom]}
        center={state.center}
        containerStyle={{
          'height': 'inherit'
        }}
      >
        <ZoomControl />
        <Source id="countries" geoJsonSource={countriesGeo} />
        <Layer
          geoJSONSourceOptions={{ generateId: true }}
          id="country-fills"
          type="fill"
          sourceId="countries"
          maxZoom={5}
          filter={['in', 'ISO_A3'].concat(iso)}  
          paint={{
            'fill-color': 'rgba(212,175,55,1)',
            'fill-opacity': [
              'case',
              ['boolean', ['feature-state', 'hover'], false],
              1,
              0.5
            ]
          }}
          //onClick={(e) => markerClick(e)}
        />
        
        <MapContext.Consumer>
          {(map) => {
            
            map.on('click', 'country-fills', function(e) {
              var bbox = box(e.features[0])
              map.fitBounds(bbox)
            })
            // When the user moves their mouse over the state-fill layer, we'll update the
            // feature state for the feature under the mouse.
            map.on('mouseenter', 'country-fills', function (e) {
              //console.log(e)
              // if (e.features.length > 0) {
              //   if (hoveredStateId !== null) {
              //     map.setFeatureState(
              //       { source: 'countries', id: hoveredStateId },
              //       { hover: false }
              //     )
              //   }
              //   hoveredStateId = e.features[0].id

              //   map.setFeatureState(
              //     { source: 'countries', id: hoveredStateId },
              //     { hover: true }
              //   )
              // }
            })
              
              // When the mouse leaves the state-fill layer, update the feature state of the
              // previously hovered feature.
              // map.on('mouseleave', 'country-fills', function () {
              //   if (hoveredStateId !== null) {
              //     map.setFeatureState(
              //       { source: 'countries', id: hoveredStateId },
              //       { hover: false }
              //     )
              //   }
              //   hoveredStateId = null;
              // })
          }}
        </MapContext.Consumer>

        <Source id="cities" geoJsonSource={citiesGeo} />
        <Layer
          id="city-fills"
          type="fill"
          sourceId="cities"
          minZoom={7}
          maxZoom={15}
          filter={['in', 'NAME'].concat(cityName)}  
          paint={{
            'fill-color': [
              'interpolate',
              ['linear'], ['zoom'],
              5, 'rgba(0,0,0,1)',
              6, 'rgba(136,99,0,1)',
            ],
            'fill-opacity': .25,
          }}
        />
        <Image id={'pin'} url={pin} />
        <Layer
          type="symbol"
          id="marker"
          minZoom={6}
          layout={{'icon-image': 'pin', 'icon-size': .1, 'icon-anchor': 'center'}}
        >
          {places && places.map((place, i) => {

            return (
              <Feature 
                key={i}
                coordinates={[place.geo.lng,place.geo.lat]}
              />
            )
          })}
        </Layer>
        {/* {places && places.map((place) => (
          <Popup key={place.id} coordinates={[place.geo.lng,place.geo.lat]}>
            <div>{place.name}</div>
            <div>{place.address}</div>
          </Popup>
        ))} */}
      </Mb>
    </div>
  )
}
export default Map

export const visited = graphql`
query {
  countries: allSanityCountry {
    nodes {
      name
      id
      isoA3
    }
  }
  cities: allSanityCity {
    nodes {
      name
      id
    }
  }
  places: allSanityPlace {
    nodes {
      name
      id
      address
      website
      description
      city {
        name
      }
      country {
        name
      }
      geo {
        lat
        lng
      }
    }
  }
}
`