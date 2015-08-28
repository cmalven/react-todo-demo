var renderApp = function() {
  React.render(<App />, document.getElementById('root'));
};

// TodoStore is a black box (for the purposes of this demo) that handles our data updating.
TaskStore = new TaskStore();
TaskStore.on('change', function() {
  renderApp();
});

Meteor.startup(function() {
  renderApp();
});