var React = require('react');
var ReactDOM = require('react-dom');
var MapStore = require('./stores/mapStore');
var AppActions = require('./flux/actions');

function getMapState() {
  return {
    map: MapStore.getMap()
  };
}

const Info = React.createClass({

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

  render() {
    return (
      <span>
        Lat: {this.state.map.marker.lat} <br />
        Lng: {this.state.map.marker.lng}
      </span>
    );
  }

});

ReactDOM.render(<Info />, document.getElementById('info'));
