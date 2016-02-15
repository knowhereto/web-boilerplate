var AppDispatcher = require('./dispatcher');
var AppConstants = require('./constants');

var AppActions = {

  updateMarker: function(data) {

    AppDispatcher.handleViewAction({
      actionType: AppConstants.UPDATE_MARKER,
      data: data
    })
  }

};

module.exports = AppActions;
