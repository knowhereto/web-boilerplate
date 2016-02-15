var React = require('react');
var ReactDOM = require('react-dom');
var MapStore = require('./stores/mapStore');
var AppActions = require('./flux/actions');
var Gmaps = require('react-gmaps').Gmaps;
var Marker = require('react-gmaps').Marker;
var Circle = require('react-gmaps').Circle;

function getMapState() {
  return {
    map: MapStore.getMap()
  };
}
const Map = React.createClass({

  getInitialState: function() {
    return getMapState();
  },

  componentDidMount: function() {
    MapStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    MapStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(getMapState());
  },

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: false
    });
  },

  onDragEnd(e) {
    AppActions.updateMarker({lat: e.latLng.lat(), lng: e.latLng.lng()});
  },

  render() {
    return (
      <Gmaps
        width={'100%'}
        height={'300px'}
        lat={this.state.map.center.lat}
        lng={this.state.map.center.lng}
        zoom={12}
        params={{v: '3.exp'}}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={this.state.map.marker.lat}
          lng={this.state.map.marker.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
      </Gmaps>
    );
  }

});

ReactDOM.render(<Map />, document.getElementById('gmaps'));
