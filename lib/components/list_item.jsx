ListItem = React.createClass({

  killTask: function(event) {
    event.preventDefault();
    var taskId = this.props.task._id;
    TaskStore.removeTask(taskId);
  },

  formattedDate: function(date) {
    var formattedDate = new Date(date).format("g:i a – F j, Y");
    return formattedDate;
  },

  render: function() {
    return (

      <div className="ui card">
        <div className="content">
          <div className="header">{this.props.task.content}</div>
          <div className="description">
            { this.formattedDate(this.props.task.created) }
          </div>
        </div>
        <div className="extra content">
          <div className="ui buttons">
            <div className="ui basic red button" onClick={this.killTask}>Delete</div>
          </div>
        </div>
      </div>
    )
  }
});