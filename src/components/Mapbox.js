import React, {useState, useEffect, useMemo, useRef} from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Map, {Source, Layer, NavigationControl} from 'react-map-gl'
import bbox from '@turf/bbox'
import 'mapbox-gl/dist/mapbox-gl.css'

const MB_TOKEN = `pk.eyJ1IjoiamVkaWZ1bmsiLCJhIjoiY2ttOGo0Y3Z2MThobzJvczNjZm4yaWc2dCJ9.6C8Npb2Zr9KUCkT8pq57RQ`

const MapBox = () => {
  const mapRef = useRef()
  const [allCountries, setAllCountries] = useState(null)
  const [allCities, setAllCities] = useState(null)

  // Get Visited list from CMS
  const data = useStaticQuery(visited)

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson')
      .then(resp => resp.json())
      .then(json => setAllCountries(json))
      .catch(err => console.error('Could not load data', err))

    fetch('https://raw.githubusercontent.com/drei01/geojson-world-cities/master/cities.geojson')
      .then(resp2 => resp2.json())
      .then(json => setAllCities(json))
      .catch(err => console.error('Could not load data', err))
  }, [])

  // Get Country details
  const countriesVisited = data.countries.nodes
  const iso = countriesVisited.map(country => (country.isoA3)).filter(x => x)
  const countriesGeo = useMemo(() => {
    return allCountries
  })

  // Get City details
  const citiesVisited = data.cities.nodes
  const cityName = citiesVisited.map(city => (city.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase()))
  const citiesGeo = useMemo(() => {
    return allCities
  })

  // Get Places
  const places = data.places.nodes

  let placesFormat = places.map((place) => {
    return (
      {
        type: 'Feature', 
        geometry: {
          type: 'Point', 
          coordinates: [place.geo.lng, place.geo.lat]
        },
        properties: {
          title: place.name
        }
      }
    )
  })
  const placesGeoJSON = useMemo(() => {
    return {
      type: 'FeatureCollection',
      features: placesFormat
    }
  }, [placesFormat])

  const onClick = (event) => {
    const feature = event.features[0];
    if (feature) {
      // calculate the bounding box of the feature
      const [minLng, minLat, maxLng, maxLat] = bbox(feature);

      mapRef.current.fitBounds(
        [
          [minLng, minLat],
          [maxLng, maxLat]
        ],
        {padding: 40, duration: 1000}
      );
    }
  }

  return (
    <div className={`map-wrapper`} style={{height: "500px"}}>
      <Map
        ref={mapRef}
        initialViewState={{
          zoom: 1
        }}
        mapStyle="mapbox://styles/mapbox/light-v10"
        interactiveLayerIds={['country-fills']}
        onClick={onClick}
        mapboxAccessToken={MB_TOKEN}
      >
        <NavigationControl />
        <Source id="places" type='geojson' data={placesGeoJSON}>
          <Layer 
            id="places"
            type="circle"
            paint={{
              'circle-color': 'rgba(212,175,55,1)',
            }}
          />
        </Source>
        <Source id="countries" type="geojson" data={countriesGeo}>
          <Layer 
            id="country-fills"
            type="fill"
            filter={['in', 'ISO_A3'].concat(iso)}
            maxzoom={5}
            paint={{
              'fill-color': 'rgba(212,175,55,1)',
              'fill-opacity': [
                'case',
                ['boolean', ['feature-state', 'hover'], false],
                1,
                0.5
              ]
            }}
          />
        </Source>
        <Source id="cities" type="geojson" data={citiesGeo}>
          <Layer 
            id="city-fills"
            type="fill"
            //minZoom={7}
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
        </Source>
      </Map>
    </div>
  )

}
export default MapBox

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