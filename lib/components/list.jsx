List = React.createClass({
  
  render: function() {
    var content = null;

    // Find any task items
    var items = this.props.tasks.map(function(task) {
      return <ListItem key={task._id} task={task} />;
    });

    // Handle the case where there aren't any list items
    if (items.length) {
      content = (
        <div className="ui cards">
          {items}
        </div>
      );
    }
    else {
      content = (
        <div className="ui compact message">
          <p>There aren't any tasks left to complete!</p>
        </div>
      );
    };

    return (
      <div className="ui vertical segment">
        <h3 className="ui header">Tasks</h3>
        { content }
      </div>
    );
  }
});