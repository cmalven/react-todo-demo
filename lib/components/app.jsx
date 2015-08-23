App = React.createClass({

  render: function() {
    var tasks = TaskStore.fetchTasks();

    return (
      <section>
        <List tasks={tasks} />
        <NewTaskForm />
      </section>
    );
  }
});