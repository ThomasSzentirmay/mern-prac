const Task = require('../models/Task');

module.exports = {
  Query: {
    async getTasks() {
      const tasks = await Task.find();

      return tasks;
    },
    async getTask(_, args, context) {
      const task = await Task.findById(args.id);

      return task;
    }
  }
}