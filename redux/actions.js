export const CREATE_TODO = 'CREATE_TODO'; // A constant used for naming the action
export const createToDo = (text) => ({
  type: CREATE_TODO,
  payload: { text },
});
