Meteor.methods({
  insertTask: function (task) {
    // Validate the data
    check(task, {
      content: String
    });

    // Insert into MongoDB and Minimongo
    Tasks.insert(task);
  }
});