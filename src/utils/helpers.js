export const remaining = state => state.tasks.filter(task => !task.isComplete).length
