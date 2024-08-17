import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Todo } from "../../../@types/Todo";
import { addTodo, deleteTodo, getTodos, updateTodo } from "../../api/todosApi";
import TodoForm from "../TodoForm";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const queryClient = useQueryClient();

  const {
    data: todos,
    isLoading,
    error,
  } = useQuery("todos", getTodos, {
    select: (data) => data.sort((a, b) => a.id - b.id),
  });

  const addTodoMutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const updateTodoMutation = useMutation(updateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const deleteTodoMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addTodoMutation.mutate({
      userId: 1,
      id: "20",
      title: newTodo,
      completed: false,
    });
    setNewTodo("");
  };

  if (isLoading) {
    return <h4>Loading</h4>;
  }
  if (error) {
    return <>{error}</>;
  }
  return (
    <div className="flex flex-col gap-y-10">
      <TodoForm
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        handleSubmit={handleSubmit}
      />
      <div className="flex flex-col gap-y-4">
        {todos.reverse().map((todo: Todo) => (
          <article
            key={todo.id}
            className="flex items-center md:max-w-[700px] justify-between bg-slate-900 px-4 py-2 rounded-lg"
          >
            <div className="flex items-center gap-x-2">
              <span>{todo.id}.</span>
              <input
                type="checkbox"
                checked={todo.completed}
                id={todo.id}
                onChange={() => {
                  updateTodoMutation.mutate({
                    ...todo,
                    completed: !todo.completed,
                  });
                }}
              />
              <h3>{todo.title}</h3>
            </div>
            <button
              type="button"
              onClick={() => deleteTodoMutation.mutate(todo.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-red-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
