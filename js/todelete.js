// add percentage white layer
  map.addLayer({
    id: 'whitep',
    type: 'fill',
    source: 'census',
    'layout': {
      visibility: 'none', //Layers load invisible, to show only when toggled
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
      visibility: 'none', //Layers load invisible, to show only when toggled
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
      visibility: 'none', //Layers load invisible, to show only when toggled
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
      visibility: 'none', //Layers load invisible, to show only when toggled
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
      visibility: 'none', //Layers load invisible, to show only when toggled
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
