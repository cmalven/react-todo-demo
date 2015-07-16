NewTaskForm = React.createClass({
  onSubmit(event) {
    event.preventDefault();

    var taskContent = React.findDOMNode(this.refs.content).value;

    Meteor.call("insertTask", {
      content: taskContent
    });

    React.findDOMNode(this.refs.content).value = "";
  },
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" ref="content" placeholder="Add a task..." />
      </form>
    );
  }
});