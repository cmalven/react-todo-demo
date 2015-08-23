TaskStore = function() {
 
  //
  //   Private Vars
  //
  //////////////////////////////////////////////////////////////////////
 
  var self = new EventEmitter;
  
  //
  //   Private Methods
  //
  //////////////////////////////////////////////////////////////////////
 
  var _init = function() {
    _addEventListeners();
    _subscribe();
  };

  var _subscribe = function() {
    Meteor.subscribe('tasks');
  };

  var _addEventListeners = function() {
    Tracker.autorun(function () {
      this.tasks = Tasks.find().fetch();
      self.emit('change');
    });
  };


  //
  //   Public Methods
  //
  //////////////////////////////////////////////////////////////////////

  self.removeTask = function(taskId) {
    Meteor.call('removeTask', taskId);
  };

  self.addTask = function(taskContent) {
    Meteor.call('insertTask', {
      content: taskContent
    });
  };

  self.fetchTasks = function() {
    return Tasks.find().fetch();
  };
 

  // Initiate
  _init();
 
  // Return the Object
  return self;
}