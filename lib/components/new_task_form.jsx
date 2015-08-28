NewTaskForm = React.createClass({
  
  onSubmit: function(event) {
    event.preventDefault();

    var taskContent = React.findDOMNode(this.refs.content).value;

    TaskStore.addTask(taskContent);

    React.findDOMNode(this.refs.content).value = "";
  },
  
  render: function() {
    return (
      <div className="ui vertical segment">
        <h3 className="ui header">Add a Task</h3>
        <form className="ui form" onSubmit={this.onSubmit}>
          <div className="field">
            <input type="text" ref="content" placeholder="Add a task..." />
          </div>
          
          <button className="ui green button" type="submit">Submit</button>
        </form>
      </div>
    );
  }
});