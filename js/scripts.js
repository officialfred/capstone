mapboxgl.accessToken = 'pk.eyJ1IjoiY3dob25nIiwiYSI6IjAyYzIwYTJjYTVhMzUxZTVkMzdmYTQ2YzBmMTM0ZDAyIn0.owNd_Qa7Sw2neNJbK6zc1A'

// lngLat for the Downtown Oakland
var nycCenter = [-74.0060, 40.7128];

const bounds = [
    [-74.0, 37.6], // Southwest coordinates
    [-73.0, 42] // Northeast coordinates
];

// load the data
$.getJSON("data/2020_census/2020_census_clean.geojson", function(censusData) {
$.getJSON("data/bubblemap.geojson", function(bubbleMap) {

// load the data
var census =  censusData;
var bubblemap = bubbleMap;


var map = new mapboxgl.Map({
  container: 'mapContainer', // HTML container id
  style: 'mapbox://styles/mapbox/dark-v9', // style URL
  center: nycCenter, // starting position as [lng, lat]
  zoom: 10,
  minZoom: 9,
  maxZoom: 14,
  // maxBounds: bounds // limit map bounds
});


map.on('load', function() {
  map.addSource('census', {
    type: 'geojson',
    data: census,
  })
  map.addSource('bubbles', {
    type: 'geojson',
    data: bubblemap,
  })


// add percentage white layer
  map.addLayer({
    id: 'whitep',
    type: 'fill',
    source: 'census',
    'layout': {
      visibility: 'visible', //Layers load invisible, to show only when toggled
    },
    paint: {
      'fill-color': [
        'interpolate',
        ['linear'],
        ['get', 'WNH_20P'],
        0,
        '#f6e2ff',
        20,
        '#edc4ff',
        40,
        '#e19dff',
        60,
        '#d26dff',
        80,
        '#c543ff',
        90,
        '#9b00e1',
      ],
      'fill-opacity': 0.7
    }
  })

// add percentage black layer
  map.addLayer({
    id: 'blackp',
    type: 'fill',
    source: 'census',
    'layout': {
      visibility: 'visible', //Layers load invisible, to show only when toggled
    },
    paint: {
      'fill-color': [
        'interpolate',
        ['linear'],
        ['get', 'BNH_20P'],
        0,
        '#f6e2ff',
        20,
        '#edc4ff',
        40,
        '#e19dff',
        60,
        '#d26dff',
        80,
        '#c543ff',
        90,
        '#9b00e1',
      ],
      'fill-opacity': 0.7
    }
  })

// add percentage asian layer
  map.addLayer({
    id: 'asianp',
    type: 'fill',
    source: 'census',
    'layout': {
      visibility: 'visible', //Layers load invisible, to show only when toggled
    },
    paint: {
      'fill-color': [
        'interpolate',
        ['linear'],
        ['get', 'ANH_20P'],
        0,
        '#f6e2ff',
        20,
        '#edc4ff',
        40,
        '#e19dff',
        60,
        '#d26dff',
        80,
        '#c543ff',
        90,
        '#9b00e1',
      ],
      'fill-opacity': 0.7
    }
  })

// add percentage white change layer
  map.addLayer({
    id: 'whitec',
    type: 'fill',
    source: 'census',
    'layout': {
      visibility: 'visible', //Layers load invisible, to show only when toggled
    },
    paint: {
      'fill-color': [
        'interpolate',
        ['linear'],
        ['get', 'WNH_PCh'],
        -50,
        '#ff2d00',
        -25,
        '#ff8f77',
        0,
        '#ffffff',
        25,
        '#8183ff',
        50,
        '#0004ff',
      ],
      'fill-opacity': 0.7
    }
  })

// add percentage black change layer
  map.addLayer({
    id: 'blackc',
    type: 'fill',
    source: 'census',
    'layout': {
      visibility: 'visible', //Layers load invisible, to show only when toggled
    },
    paint: {
      'fill-color': [
        'interpolate',
        ['linear'],
        ['get', 'BNH_PCh'],
        -50,
        '#ff2d00',
        -25,
        '#ff8f77',
        0,
        '#ffffff',
        25,
        '#8183ff',
        50,
        '#0004ff',

      ],
      'fill-opacity': 0.7
    }
  })

  map.addLayer({
    id: 'bubble',
    type: 'circle',
    source: 'bubbles',
    'layout': {
      visibility: 'visible', //Layers load invisible, to show only when toggled
    },

    paint: {

      'circle-radius': ["/",
        ['number', ['get', 'wifi']],
          5],
      'circle-opacity': 0.6,
      'circle-color': "#b80000"


       }
    })



// Buttons to toggle the visibility of the layers
    $('#white-percentage').on('click', function() {
      // when this is clicked, let's fly the map to Midtown Manhattan
        map.setLayoutProperty('whitep', 'visibility', 'visible');
        map.setLayoutProperty('blackp', 'visibility', 'none');
        map.setLayoutProperty('asianp', 'visibility', 'none');
        map.setLayoutProperty('whitec', 'visibility', 'none');
        map.setLayoutProperty('blackc', 'visibility', 'none');

    })
    $('#black-percentage').on('click', function() {
      // when this is clicked, let's fly the map to Midtown Manhattan
      map.setLayoutProperty('whitep', 'visibility', 'none');
      map.setLayoutProperty('blackp', 'visibility', 'visible');
      map.setLayoutProperty('asianp', 'visibility', 'none');
      map.setLayoutProperty('whitec', 'visibility', 'none');
      map.setLayoutProperty('blackc', 'visibility', 'none');

    })

    $('#asian-percentage').on('click', function() {
    // when this is clicked, let's fly the map to Midtown Manhattan
      map.setLayoutProperty('whitep', 'visibility', 'none');
      map.setLayoutProperty('blackp', 'visibility', 'none');
      map.setLayoutProperty('asianp', 'visibility', 'visible');
      map.setLayoutProperty('whitec', 'visibility', 'none');
      map.setLayoutProperty('blackc', 'visibility', 'none');

    })

    $('#white-change').on('click', function() {
    // when this is clicked, let's fly the map to Midtown Manhattan
      map.setLayoutProperty('whitep', 'visibility', 'none');
      map.setLayoutProperty('blackp', 'visibility', 'none');
      map.setLayoutProperty('asianp', 'visibility', 'none');
      map.setLayoutProperty('whitec', 'visibility', 'visible');
      map.setLayoutProperty('blackc', 'visibility', 'none');

    })

    $('#black-change').on('click', function() {
    // when this is clicked, let's fly the map to Midtown Manhattan
      map.setLayoutProperty('whitep', 'visibility', 'none');
      map.setLayoutProperty('blackp', 'visibility', 'none');
      map.setLayoutProperty('asianp', 'visibility', 'none');
      map.setLayoutProperty('whitec', 'visibility', 'none');
      map.setLayoutProperty('blackc', 'visibility', 'visible');

    })


})
})
})
// })
