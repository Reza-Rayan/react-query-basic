interface TodoFormProps {
  newTodo: string;
  handleSubmit: () => void;
  setNewTodo: any;
}

const TodoForm = ({ newTodo, handleSubmit, setNewTodo }: TodoFormProps) => {
  return (
    <form className="flex items-center gap-x-2" onSubmit={handleSubmit}>
      <label htmlFor="new-todo">Add a new todo</label>
      <div className="new-todo border border-gray-400 px-4 py-2">
        <input
          type="text"
          id="new-todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
          className="border-none bg-transparent"
        />
      </div>

      <div className="h-full">
        <button type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-white bg-indigo-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
