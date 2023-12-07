export const todoReducer = (state: any, action: any) => {
  switch (action.type) {
    case "add":
      const todos = [...state];
      return [...todos, action.payload];
    case "delete":
      return state.filter((todo: any) => todo.id !== action.payload);
    case "toggle":
      const existingTodos = [...state];
      const index = existingTodos.findIndex(
        (todo: any) => todo.id === action.payload
      );
      existingTodos[index].completed = !existingTodos[index].completed;
      return [...existingTodos];
    case "sort-by-date":
      return [...state].sort(
        (a: any, b: any) =>
          new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    case "sort-by-letter":
      return [...state].sort((a: any, b: any) => a.task.localeCompare(b.task));
    default:
      return state;
  }
};
