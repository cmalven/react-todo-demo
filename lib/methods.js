Meteor.methods({
  insertTask: function (task) {
    // Validate the data
    check(task, {
      content: String
    });

    // Add a date timestamp
    task.created = new Date();

    // Insert into MongoDB and Minimongo
    Tasks.insert(task);
  },

  removeTask: function (taskId) {
    return Tasks.remove({ _id: taskId });
  }
});