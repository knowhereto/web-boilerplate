var AppDispatcher = require('../flux/dispatcher');
var AppConstants = require('../flux/constants');

var EventEmitter = require('events').EventEmitter;

// Internal object of map
var _map = {
  marker: {
    lat: 53.5625523,
    lng: 9.9579338
  },
  center: {
    lat: 53.5625271,
    lng: 10.0105335
  }
};

// Method to load map from action data
function updateMarker(data) {
  _map.marker = data;
}

// Merge our store with Node's Event Emitter
var MapStore = Object.assign(EventEmitter.prototype, {

  // Returns map store
  getMap: function() {
    return _map;
  },

  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

// Register dispatcher callback
AppDispatcher.register(function(payload) {
  var action = payload.action;
  // Define what to do for certain actions
  switch(action.actionType) {
    case AppConstants.UPDATE_MARKER:
      // Call internal method based upon dispatched action
      updateMarker(action.data);
      break;

    default:
      return true;
  }

  // If action was acted upon, emit change event
  MapStore.emitChange();

  return true;

});

module.exports = MapStore;
