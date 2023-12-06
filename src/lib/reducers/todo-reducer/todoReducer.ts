export const todoReducer = (state: any, action: any) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((todo: any) => todo.id !== action.payload);
    case "toggle":
      return state.map((todo: any) =>
        todo.id === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
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
