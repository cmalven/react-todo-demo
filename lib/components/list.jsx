List = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    return {
      tasks: Tasks.find().fetch()
    };
  },
  render() {
    return (
      <ul>
        {this.data.tasks.map(function (task) {
          return <li key={task._id}>{task.content}</li>;
        })}
      </ul>
    );
  }
});